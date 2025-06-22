# 🚨 Vulnerable SAST Testing – Secure CI/CD Pipeline with SonarQube

This project demonstrates a secure CI/CD pipeline that integrates **Static Application Security Testing (SAST)** using **SonarQube** on a custom-built intentionally vulnerable Node.js application.

## 🧾 Description

A simplified Express-based web application with intentional coding flaws was developed to simulate real-world vulnerabilities. The source code is analyzed through SonarQube integrated into a GitHub Actions CI pipeline. This promotes **shift-left security** by identifying issues early in the development lifecycle.

## 🧰 Tech Stack

| Layer          | Technology              |
|----------------|--------------------------|
| Language        | JavaScript (Node.js), HTML |
| CI/CD Platform  | GitHub Actions            |
| Security Tool   | SonarQube (SAST)          |
| Backend         | Express.js                |
| OS              | Windows                   |
| Version Control | Git, GitHub               |

## 🔧 Tools Used

- **SonarQube**: For static code vulnerability scanning.
- **GitHub Actions**: Automates SAST scans during code commits.
- **Node.js + Express**: Custom-built vulnerable app for testing.
- **NPM Modules**: body-parser, express, path, etc.

## 🚀 Pipeline Flow

1. Developer pushes code to GitHub.
2. GitHub Actions triggers the pipeline.
3. Source code is analyzed using SonarQube Scanner CLI.
4. Vulnerability report is generated and viewable in the SonarQube dashboard.

## 📜 How to Run Locally

1. Install and run SonarQube on localhost.
2. Clone this repo.
3. Setup GitHub Actions with proper token and Sonar config.
4. Push to main branch or dispatch manually.

## 📄 Reports

Vulnerability reports are automatically generated in the SonarQube interface after every commit.

---

## 📌 Key Features

- Automated SAST scans using GitHub Actions
- Detects code smells, bugs, vulnerabilities
- Promotes DevSecOps and shift-left testing

## 👨‍💻 Author

**Preetham Prasad** – [GitHub](https://github.com/Preetham1674)

---
