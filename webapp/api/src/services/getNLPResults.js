import http from '../utils/httpInstance';

const getNLPResults = async (payload) => {
  try {
    const { data } = await http.post('/process', payload);
    return data;
  } catch (err) {
    console.error('NLP request error:', err?.response?.data || err.message);
    throw new Error('Error during NLP data processing');
  }
};

export default getNLPResults;
