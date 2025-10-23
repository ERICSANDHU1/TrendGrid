<div align="center"> <br /> <img src="public/readme/hero.webp" alt="Project Banner"> <br /> <div> <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=next.js&color=black"/> <img src="https://img.shields.io/badge/-Better Auth-black?style=for-the-badge&logoColor=white&logo=betterauth&color=black"/> <img src="https://img.shields.io/badge/-Shadcn-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=black"/> <img src="https://img.shields.io/badge/-Inngest-black?style=for-the-badge&logoColor=white&logo=inngest&color=black"/><br/>
<img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=00A35C"/>
<img src="https://img.shields.io/badge/-CodeRabbit-black?style=for-the-badge&logoColor=white&logo=coderabbit&color=9146FF"/>
<img src="https://img.shields.io/badge/-TailwindCSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=38B2AC"/>
<img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6"/>

</div> <h3 align="center">TrendGrid — Stock Market App with AI Alerts, Charts & Insights</h3> <div align="center"> A modern, AI-powered stock market app for tracking prices, setting alerts, and exploring insights. </div> </div>
📋 <a name="table">Table of Contents</a>

✨ Introduction

⚙️ Tech Stack

🔋 Features

🤸 Quick Start

🔗 Assets

🚀 More

<a name="introduction">✨ Introduction</a>

TrendGrid is a modern AI-powered stock market web application built with Next.js, Shadcn, Better Auth, and Inngest.
It allows users to track real-time stock prices, create personalized watchlists, explore company insights, and receive automated alerts powered by event-driven workflows and AI-generated summaries.

The admin dashboard enables managing stocks, publishing news, and monitoring user activity — ideal for developers and traders looking to create a dynamic, real-time financial dashboard.

<a name="tech-stack">⚙️ Tech Stack</a>

Better Auth
 — Authentication and authorization library for TypeScript with built-in social login and MFA support.

CodeRabbit
 — AI-powered code review assistant that maintains high-quality code across pull requests.

Finnhub
 — Real-time financial data API for stock, forex, and cryptocurrency market data.

Inngest
 — Platform for event-driven workflows and background jobs.

MongoDB
 — NoSQL database for scalable and flexible data storage.

Nodemailer
 — Library for sending emails and transactional notifications.

Next.js
 — React framework for building optimized, full-stack web applications.

Shadcn
 — Customizable React component library for building accessible and elegant UIs.

TailwindCSS
 — Utility-first CSS framework for rapid styling and responsive design.

TypeScript
 — Statically typed JavaScript for safer, scalable codebases.

<a name="features">🔋 Features</a>

👉 Stock Dashboard — View real-time stock data with interactive line and candlestick charts, including historical performance.
👉 Smart Search — Quickly find stocks across industries, market caps, or performance metrics.
👉 Watchlist & Alerts — Create watchlists, set alert thresholds for price or volume changes, and receive instant notifications.
👉 Company Insights — Access financial data, analyst ratings, earnings, and sentiment analysis.
👉 Event-Driven Workflows — Automated price updates, report scheduling, and notifications powered by Inngest.
👉 AI Insights & Summaries — Generate daily digests and performance summaries with AI assistance.
👉 Customizable Notifications — Get personalized alerts tailored to watchlists and user preferences.
👉 Analytics Dashboard — View insights into user behavior, stock trends, and engagement metrics.

<a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally.

Prerequisites

Make sure you have the following installed:

Git

Node.js

npm

Cloning the Repository
git clone https://github.com/ERICSANDHU1/TrendGrid.git
cd TrendGrid

Installation

Install dependencies:

npm install

Set Up Environment Variables

Create a .env file in the root directory and add:

NODE_ENV='development'
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# FINNHUB
NEXT_PUBLIC_NEXT_PUBLIC_FINNHUB_API_KEY=
FINNHUB_BASE_URL=https://finnhub.io/api/v1

# MONGODB
MONGODB_URI=

# BETTER AUTH
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

# GEMINI
GEMINI_API_KEY=

# NODEMAILER
NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=


Replace placeholders with actual credentials from:

MongoDB

Gemini

Inngest

Finnhub

Running the Project
npm run dev
npx inngest-cli@latest dev


Then open http://localhost:3000
 in your browser.

<a name="links">🔗 Assets</a>

Assets and images for this project are available inside the public/readme folder.

<img src="public/readme/videokit.webp" alt="Assets Preview">
<a name="more">🚀 More</a>

TrendGrid demonstrates modern architecture and real-time features for stock market tracking.
You can extend it further by integrating additional APIs, portfolio management, or AI-driven recommendation systems.

Author: @ERICSANDHU1

Project: TrendGrid — AI-Powered Stock Market Tracker
License: MIT
