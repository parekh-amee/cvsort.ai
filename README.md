
<p align="center">
  <h2 align="center">cvsort.ai</h2>
  <p align="center">
 Smart Resume Shortlisting with AI + MERN Stack
  </p>
</p>

<br>
<br>

## 🔥 About the Project

This project holds a special place in my journey as a **Full Stack Developer**.  

Every day, thousands of job listings are created to help companies meet the ever-growing demand of the market by recruiting fresh talent. The job of a recruiter is tough—like finding a needle in a haystack. In the age of Artificial Intelligence, this task can be made easier through our product: **cvsort.ai**.

It combines a solid **MERN stack** foundation (MongoDB, Express, React, Node.js) with the power of **AI/ML NLP models** to optimize resume filtering.

cvsort.ai reduces the burden on recruiters by handling the repetitive job of sifting through thousands of resumes. Just upload all the CVs, and receive a ranked list of candidates based on how relevant they are to the job description. Boom—recruitment done smarter, faster.

---

## Getting Started

Start developing locally.

### Step 1: Install Dependencies

cd into the project directory:

```sh
cd cvsort.ai
```

Install dependencies for Web-App:

```sh
cd web-app/api
yarn install

cd ../client
yarn install
```

Install dependencies for Flask backend:

```sh
cd middleware
pip install -r requirements.txt
```

### Step 2: Setup .env

To run the server you’ll need a `.env` file.

- Create a new file `.env` in the root
- Open `.env.EXAMPLE` for reference
- Paste contents and add your actual keys

### Step 3: Run the App

```sh
cd web-app/api
yarn dev
```

```sh
cd middleware
python app.py
```
---

## 🧰 Tech Stack  

### Frontend  
- React.js  
- Redux (if used)  
- TailwindCSS / CSS3  

### Backend  
- Node.js  
- Express.js  
- MongoDB  

### AI / ML  
- Python (Flask or FastAPI microservice)  
- NLP Model for JD vs Resume similarity  
- Document processing with spaCy / NLTK / Transformers  

---


## 🧠 What It Does  
cvsort.ai helps recruiters filter and rank resumes based on relevance to job descriptions using a machine learning model.  

Key highlights:  
- Upload resumes → Get sorted list by JD relevance  
- Built-in NLP model for **semantic similarity**  
- Clean and scalable full-stack app  

---

## Features

- 🔍 **Role-Based Filtering** – AI classifier trained on 900+ resumes, sorts into 20 job roles with 95% accuracy.
- 🧠 **NLP-based Matching** – Uses cosine similarity to score resumes vs job description.
- 📊 **Bulk Processing** – Can handle up to 3000 resumes/hour.
- 🔐 **OAuth & Secure Login** – Google and password-based auth.
- 📤 **Export Shortlists** – Download top candidates as CSV.

---

## Architecture

```plaintext
Frontend (React) ⇄ Node.js API ⇄ MongoDB
                        ⇄ Flask NLP Microservice
```

---

## Author

- Amee Parekh
