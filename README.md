# 🎓 Campus Copilot — AI Chatbot for Purdue Northwest Students

Campus Copilot is a Retrieval-Augmented Generation (RAG)-powered chatbot built using **Google Cloud Vertex AI Agent Builder**, designed to assist current, future, and past students of **Purdue University Northwest (PNW)** with instant, accurate answers about academics, financial aid, student policies, and more.

Imagine having a student advisor available 24/7 — that’s what Campus Copilot aims to be.

---

## 🌟 What It Can Do

Ask Campus Copilot questions like:
> ❓ "How many credits do I need to graduate with distinction?"  
> 🗓️ "What’s the refund deadline if I drop a course this week?"  
> 💸 "Am I still eligible for financial aid as an international grad student?"  
> 📘 "Can you summarize the course outcomes from this syllabus?"

This bot responds using real PNW academic policies, course syllabi, financial aid PDFs, and student services guides — no hallucinations, just grounded answers.

---

## 🧠 How It Works

✅ Documents (PDFs like academic handbooks, course syllabi, financial aid FAQs) are uploaded to a **GCP Cloud Storage bucket**  
✅ These documents are indexed via **Vertex AI Agent Builder**, which uses **RAG (Retrieval-Augmented Generation)**  
✅ A **Search + Chat Agent** is configured to generate grounded answers using the **Enterprise Edition of Agentspace Powered by Gemini 2.5 Pro**  
✅ A **fully working chatbot preview UI** is hosted by Google Agentspace 
✅ Login and personalization handled via **Firebase Auth**  
✅ User chat history and profile data stored in **Firestore**  
✅ React + Vite app setup complete 

---

## 🛠️ Tech Stack

| Category | Tools Used |
|----------|------------|
| 👨‍💻 Frontend | React + Vite |
| 🔐 Auth | Firebase Authentication |
| 💬 Backend (Chat) | Vertex AI Agent Builder (Search + Chat) |
| 🧠 GenAI Model | Agentspace Gemini 2.5 Pro (via Vertex AI) |
| 📁 Vector Store | Vertex AI Data Store (RAG-native) |
| ☁️ Cloud Infra | Google Cloud Storage |
| 🗃️ DB | Firebase Firestore (chat history, user profile) |
| 📦 Hosting | Firebase Hosting (React app) |
| 🔍 Document Sources | Academic Handbook, Syllabi, Financial Aid PDFs, Student Services PDFs, Graduate School Handbook, etc. |

---

## 💡 Why This Project Matters — Especially for PNW Students

Campus Copilot is a real tool that can help students in need of accurate, grounded information:

### 🧑‍🎓 Future Students
- Instantly learn about **degree requirements**, **credit rules**, and **student services**
- Understand PNW policies without navigating dozens of confusing PDFs
- Helps international students find relevant visa policies or tuition breakdowns

### 👨‍🏫 Current Students
- No more waiting on hold with academic advisors
- Get quick, document-backed answers about course drops, academic probation, refunds, and more
- Ask policy-specific questions at midnight before deadlines 😅

### 🎓 Alumni
- Check eligibility for **continuing education programs**
- Look up **transcript request** procedures or **OPT program details and deadlines**
- Use it as a knowledge base even after leaving campus

---


## 🧑‍💻 Built for PNW Student Community by Giri Ratna Sai Gummadi

🎓 Master’s in CS from PNW  
💼 Full-Stack Software Developer | GenAI Engineer | AI-Powered Automation  
📍 Austin, TX, USA  
🔗 [LinkedIn](https://www.linkedin.com/in/girigummadi)  

---


## 📸Images of Campus Copilot RAG Chatbot Interactions


### GPA Requirements for Admission at PNW
<img width="1233" height="1015" alt="GPA Requirements for Admission at PNW" src="https://github.com/user-attachments/assets/6a2582ee-3d6b-47a4-a3a2-99b0f7ab0fd6" />


### PNW Financial AID Information
<img width="1227" height="1016" alt="Financial AID at PNW" src="https://github.com/user-attachments/assets/568c5ef2-a4ac-443d-8861-e1a7bc41c7d6" />


### Computer Science Graduate Program Fee Details
<img width="1375" height="1013" alt="Fee Details - Computer Science program" src="https://github.com/user-attachments/assets/aa0a3a38-a201-4565-87ce-d920ec0d32d3" />


### Find Office/ Department Location Across the PNW Campus
<img width="1211" height="1013" alt="Department's location accross PNW" src="https://github.com/user-attachments/assets/8366cc72-0591-4cd6-bc76-ea35d8ab1702" />


### Quick Access to Course Description and Syllabus
<img width="1380" height="1017" alt="Course Description and Details" src="https://github.com/user-attachments/assets/80b1721d-ab63-47e5-9c45-2927d536962f" />


### Understand Core Courses Required for Specific Program
<img width="1377" height="1020" alt="Core Courses Information CS" src="https://github.com/user-attachments/assets/98704ab0-2652-4889-aabd-faf4d3d955b0" />




---

> Feedback, collaboration, or mentorship? I'm all ears — feel free to connect!
