# MechFlow — Saudi Arabia Bilingual Coming Soon Landing Page

A modern, high-converting "Coming Soon / Launching Soon" landing page tailored for **Saudi Arabia & the Gulf Region**. Built with **English (default)** & **Arabic (العربية)** dynamic language switching, auto LTR/RTL layout support, and Saudi corporate tech aesthetics.

---

## 🚀 How to Push to GitHub & Deploy on Vercel

### Step 1: Initialize Git & Push to GitHub

Open your terminal in `d:\mechflow` and run:

```bash
# 1. Initialize Git repository
git init

# 2. Add all files and commit
git add .
git commit -m "Initial commit: MechFlow Saudi Arabia bilingual landing page"

# 3. Create repository on GitHub (via GitHub Web UI or GitHub CLI)
# 4. Link your local repo to GitHub and push (Replace with your GitHub repo URL):
git remote add origin https://github.com/YOUR_USERNAME/mechflow-landing.git
git branch -M main
git push -u origin main
```

---

### Step 2: Deploy to Vercel (1-Click Deployment)

#### Option A: Using Vercel Dashboard (Easiest)
1. Go to [Vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** ➔ **"Project"**.
3. Select your `mechflow-landing` repository from your GitHub list.
4. Keep all default settings (Framework Preset: **Other** or **Static HTML**).
5. Click **"Deploy"**.
6. Done! Your website will be live with a free SSL domain (e.g., `mechflow.vercel.app` or your custom domain).

#### Option B: Using Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Run vercel command in your project folder
vercel
```

---

## 🌟 Key Features

- **🌐 Dynamic Bilingual (EN ⇄ AR)**: English (LTR) by default with 1-click toggle to Arabic (RTL) using Cairo font.
- **🇸🇦 Saudi Market Aesthetics**: Emerald Green `#006C35` + Soft Sand accents + Clean Slate Glass card styling.
- **⏱️ Live Countdown Timer**: Shows Days, Hours, Minutes, and Seconds until launch.
- **📧 Early Access Email Form**: Interactive submission feedback with `localStorage` fallback.
- **📱 Fully Responsive**: Optimized for iOS, Android, Tablets, and Desktop screens.
