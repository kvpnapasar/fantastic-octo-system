# Sahyadri Healthcare Frontend

This is a premium, modern frontend for Sahyadri Healthcare, built with Next.js and containerized with Docker.

## Features
- **Modern Design**: Premium medical aesthetic with high-quality images.
- **Product Categories**: Clear sections for Medical Devices, Furniture, Consumables, and Gases.
- **Responsive**: Fully responsive design for mobile, tablet, and desktop.
- **WhatsApp Integration**: Easy contact buttons for inquiries.
- **Docker Ready**: Deploy easily using Docker Compose.

## Image Sourcing
To ensure a premium and professional appearance, high-quality clinical photography has been used for the product catalog. These images are carefully selected/generated to match the items in the official Sahyadri Healthcare PDF while providing the clarity needed for modern high-resolution displays.

## How to Launch

1. **Install Docker Desktop**: Ensure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.
2. **Open Terminal**: Open a terminal in the project root directory.
3. **Run Docker Compose**:
   ```bash
   docker-compose up --build
   ```
4. **Access the App**: Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment
This project is configured for deployment on **Cloudflare Pages**. 
- **CI/CD**: A GitHub Action (`.github/workflows/deploy.yml`) builds the application inside a Docker container (ensuring a consistent build environment) and deploys the static assets to Cloudflare Pages.

## Project Status
- ✅ 70/70 Products Added
- ✅ Custom WhatsApp Inquiry Scripts
- ✅ Premium Responsive Design
- ✅ Dockerized Build & Deployment
- ✅ Cloudflare Pages Integration
- ✅ GitHub Repository Synced

