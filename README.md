# 🕷️ Vulnerable DAST Testing – Secure CI/CD Pipeline with OWASP ZAP

This project showcases a **Dynamic Application Security Testing (DAST)** pipeline using **OWASP ZAP**, GitHub Actions, and a custom Node.js app to simulate runtime web vulnerabilities in a DevSecOps environment.

## 🧾 Description

A vulnerable Express.js application is exposed temporarily to the public internet using `ngrok`. OWASP ZAP scans this live app for security vulnerabilities like XSS, SQLi, and misconfigurations. The scan is triggered automatically via GitHub Actions and reports are generated in HTML/JSON format.

## 🧰 Tech Stack

| Layer          | Technology              |
|----------------|--------------------------|
| Language        | JavaScript (Node.js), HTML |
| CI/CD Platform  | GitHub Actions            |
| Security Tool   | OWASP ZAP (DAST)          |
| Tunneling Tool  | ngrok                     |
| Backend         | Express.js                |
| OS              | Windows                   |
| Version Control | Git, GitHub               |

## 🔧 Tools Used

- **OWASP ZAP**: For DAST (Dynamic) web vulnerability scanning.
- **ngrok**: Exposes localhost app to ZAP scanner hosted externally.
- **GitHub Actions**: Runs OWASP ZAP scan automatically.
- **Node.js + Express**: Vulnerable web application.

## ⚙️ Workflow Overview

1. Local Node.js server is started.
2. Exposed to the internet using `ngrok`.
3. GitHub Action triggers ZAP scan on the ngrok URL.
4. DAST scan results are saved and available for review.

## 📜 How to Use

1. Start your Node.js app on `localhost:3000`.
2. Run `ngrok http 3000` and note the public URL.
3. Replace the target URL in `.github/workflows/zap_scan.yml`.
4. Push the code or trigger the GitHub Action manually.
5. View the HTML report from the ZAP output.

## 🧪 Reports

- DAST scan outputs HTML and JSON reports
- Lists high/medium/low vulnerabilities with attack vectors

## 📌 Key Features

- End-to-end automated DAST scanning
- Explores real attack vectors like XSS, CSRF, and SQLi
- Promotes runtime vulnerability detection

## 👨‍💻 Author

**Preetham Prasad** – [GitHub](https://github.com/Preetham1674)

---
