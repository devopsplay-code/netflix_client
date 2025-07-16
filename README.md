
# 🎬 Netflix Clone: AWS-Powered Video Streaming App

A fully functional, production-style **Netflix Clone** built with a modern tech stack using **React**, **Node.js**, **MongoDB**, and **AWS services**. Designed for real-world scalability with secure, fast, and automated video streaming powered by **S3, Lambda, MediaConvert**, and **CloudFront**.

---

## 🚀 Features

- ✅ User Signup & Login (JWT Authentication)
- ✅ Admin & User Dashboards
- ✅ Video Listing by Genre (Movies / Web Series)
- ✅ Video Detail Page with Ratings and Description
- ✅ Video Streaming via AWS CloudFront
- ✅ Automatic Quality Conversion (1080p, 720p, 480p)
- ✅ Secure Uploads & Streaming using IAM and API Gateway

---

## 🧱 Project Structure

```
netflix-clone/
├── frontend/        # React UI with routing and movie cards
├── backend/         # Node.js + Express + MongoDB APIs (JWT Auth)
├── lambda/          # AWS Lambda function for MediaConvert automation
├── scripts/         # Deployment scripts for EC2, S3, etc.
└── README.md
```

---

## 🌐 Architecture Overview

```
[User Browser]
     │
     ▼
[React Frontend on EC2]
     │
     ▼
[API Gateway + Backend (Private EC2)]
     │
     ├──▶ MongoDB Atlas (Auth + Video Metadata)
     └──▶ S3 (Video Files)
            │
            ▼
    [Lambda + MediaConvert]  → Auto-generate 480p/720p/1080p
            │
            ▼
     [CloudFront Distribution]  → Fast Streaming to Users
```

---

## ⚙️ Tech Stack

| Layer          | Technologies Used |
|----------------|-------------------|
| Frontend       | React, CSS        |
| Backend        | Node.js, Express  |
| Database       | MongoDB Atlas     |
| Auth           | JWT               |
| Storage        | AWS S3            |
| Processing     | AWS Lambda, MediaConvert |
| CDN/Streaming  | AWS CloudFront    |
| Deployment     | EC2 (Ubuntu), IAM, API Gateway |

---

## 📦 How to Run

### 🔹 Frontend (React)
```bash
cd frontend
npm install
npm start
```

### 🔹 Backend (Node.js)
```bash
cd backend
npm install
node server.js
```

### 🔹 Deploy on AWS
- Upload video to S3
- Trigger Lambda for MediaConvert jobs
- Access videos securely via CloudFront

---

## 🎯 What I Learned

- Real-world full-stack app structure using React + Node.js
- Media processing automation with AWS Lambda + MediaConvert
- Secure video storage and streaming architecture
- Role-based access with IAM + API Gateway + EC2 Network Security
- Best practices in AWS DevOps for deployment

---

## 🧑‍💻 Author

**Sri Balaji**  
Cloud | DevOps | Full Stack Developer  
[GitHub](https://github.com/devopsplay-code)

---

## 📜 License

This project is licensed under the MIT License.
