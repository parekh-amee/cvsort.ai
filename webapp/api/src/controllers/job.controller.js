import Job from '../models/Job';
import httpStatus from 'http-status-codes';
import getNLPResults from '../services/getNLPResults';

/**
 * @desc    To get all the jobs created by a user
 * @route   GET /api/jobs
 * @access  private
 */
export const getAllJobs = async (req, res) => {
  try {
    const userId = req.user._id;
    const jobs = await Job.find({ userId });
    return res.status(httpStatus.OK).json({ data: jobs });
  } catch (err) {
    console.error('Error fetching jobs:', err);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: 'Something went wrong while fetching your jobs' });
  }
};

/**
 * @desc    To create a new job
 * @route   POST /api/jobs
 * @access  private
 */
export const createJob = async (req, res) => {
  try {
    const userId = req.user._id;
    const job = new Job({
      ...req.body,
      userId,
    });
    const savedJob = await job.save();
    return res.status(httpStatus.CREATED).json({ data: savedJob });
  } catch (err) {
    console.error('Error creating job:', err);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: 'Something went wrong while creating the job' });
  }
};

/**
 * @desc    To get job info by Id
 * @route   GET /api/jobs/:jobId
 * @access  private
 */
export const getJobById = async (req, res) => {
  const jobId = req.params.jobId;
  try {
    const job = await Job.findOne({ _id: jobId });
    if (!job) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: `No job exists with JobId: ${jobId}` });
    }
    return res.status(httpStatus.OK).json({ data: job });
  } catch (err) {
    console.error('Error fetching job by ID:', err);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: 'Something went wrong while retrieving the job' });
  }
};

/**
 * @desc    To get job results by Id
 * @route   GET /api/jobs/:jobId/results
 * @access  private
 */
export const getJobResultsById = async (req, res) => {
  const jobId = req.params.jobId;

  try {
    const job = await Job.findOne({ _id: jobId });

    if (!job) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: `No job exists with JobId: ${jobId}` });
    }

    // If already processed, return cached results
    if (job.processed) {
      return res.status(httpStatus.OK).json({ data: job.results });
    }

    // Optional: Validate payload before NLP processing
    if (!job.jd || !job.profile || !job.resumes?.length) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: 'Missing job description, profile, or resumes' });
    }

    const payload = {
      jd: job.jd,
      profile: job.profile,
      tags: job.tags,
      resumes: job.resumes,
      userId: req.user._id,
    };

    let results;
    try {
      results = await getNLPResults(payload);
    } catch (nlpErr) {
      console.error('NLP processing failed:', nlpErr);
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: nlpErr.message || 'NLP processing failed' });
    }

    // Save results to DB
    job.results = results;
    job.processed = true;
    await job.save();

    return res.status(httpStatus.OK).json({ data: job.results });
  } catch (err) {
    console.error('Error getting job results:', err);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: 'Something went wrong while getting job results' });
  }
};
