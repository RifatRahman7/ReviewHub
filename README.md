🚀 ReviewHub

Live site:https://reviewhub11ph.web.app/

ReviewHub is a full-stack MERN web application where users can explore services, submit reviews with ratings, and manage their own service listings. It includes authentication, protected routes, filtering, search, and count-up analytics.

---

## 🛠 Tech Stack

### 🌐 Frontend
- React
- TailwindCSS (dark/green theme)
- Axios
- Firebase Authentication (Email/Password + Google)
- React Router
- React CountUp

### 🔙 Backend
- Express.js
- MongoDB (Atlas)
- Firebase Admin SDK (for token verification)

### ☁ Deployment
- Frontend:https://reviewhub11ph.web.app/
- Backend:https://review-hub-server-ten.vercel.app/


## 🔐 Features

- 🔑 Firebase Authentication (Login, Register, Logout)
- 🧾 Add, Update, and Delete Services
- ✍️ Add Reviews with Rating (1–5 stars)
- 📬 View "My Reviews" & edit/delete them
- 🔎 Search services by title, category, or company
- 🎯 Filter services by category
- 📈 CountUp analytics: total users, reviews, and services
- 🔒 Protected routes using Firebase token verification


   🔧 Dependencies:
   Frontend (client/package.json):
bash
npm install react react-dom react-router-dom axios tailwindcss daisyui firebase

These will be used:
react: Main library for building UI

react-router-dom: Routing for SPA navigation

axios: To handle HTTP requests

firebase: For authentication and hosting

tailwindcss: Utility-first CSS framework

daisyui: Component library built on TailwindCSS


Backend (server/package.json):
bash

npm install express mongoose cors dotenv jsonwebtoken firebase-admin

These will be used:
express: Backend web framework

mongoose: MongoDB ODM for handling schemas and database

cors: Middleware to allow cross-origin requests

dotenv: To manage environment variables

jsonwebtoken: For creating and verifying tokens (auth)

firebase-admin: For verifying Firebase tokens securely from the server


  ⚙️ How to Run Locally

1. Clone the repo  
Navigate to client & install dependencies

bash
cd client
npm install
npm run dev
Navigate to server & install dependencies

bash
cd server
npm install
npm run start
Set environment variables in .env file (Firebase, Mongo URI, etc.)
