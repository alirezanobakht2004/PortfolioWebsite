# Alireza Nobakht — Professional Portfolio Website

A premium multi-career-track portfolio website built for GitHub Pages deployment.

The portfolio showcases professional experience across:

* ASP.NET Core Development
* Java Development
* Product Management / Associate Product Management

The design system is inspired by modern product-focused companies such as Stripe, Vercel, Linear, Notion, and GitHub.

---

# Live Portfolio Goals

This website serves as:

* Professional personal website
* Recruiter landing page
* Technical portfolio
* Resume hub
* Career showcase
* Personal brand platform

---

# Features

## Core Features

* Dark mode by default
* Light mode support
* Theme persistence using LocalStorage
* Fully responsive design
* Mobile-first architecture
* GitHub Pages compatible
* No backend required

## User Experience

* Smooth scrolling
* Scroll progress indicator
* Section reveal animations
* Animated statistics counters
* Interactive project cards
* Accessible navigation
* Keyboard accessibility support
* Reduced-motion support

## Resume Center

Dedicated Resume Center containing:

### ASP.NET Core Developer Resume

* Professional summary
* Skills overview
* Direct PDF download

### Java Developer Resume

* Professional summary
* Skills overview
* Direct PDF download

### Associate Product Manager Resume

* Professional summary
* Skills overview
* Direct PDF download

## Contact Features

* Email copy-to-clipboard
* Phone copy-to-clipboard
* GitHub profile link
* LinkedIn profile link
* Toast notifications

## SEO Features

* Open Graph metadata
* Twitter metadata
* Semantic HTML5
* Structured content hierarchy
* Lighthouse optimization

---

# Technology Stack

## Frontend

* HTML5
* CSS3
* Vanilla JavaScript

## No Dependencies

No frameworks are required.

No package manager is required.

No build step is required.

No backend is required.

---

# Folder Structure

```text
portfolio/
│
├── index.html
│
├── assets/
│   │
│   ├── css/
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── sections.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   ├── portfolio-data.js
│   │   ├── theme.js
│   │   ├── navigation.js
│   │   ├── animations.js
│   │   ├── clipboard.js
│   │   └── app.js
│   │
│   ├── images/
│   │   ├── full_profile.png
│   │   └── cropped_profile.png
│   │
│   └── resumes/
│       ├── Alireza_Nobakht_Resume_ASP.NetCore.pdf
│       ├── Alireza_Nobakht_Java_Resume_v2.pdf
│       └── Alireza_Nobakht_Associate_Product_Manager_Resume.pdf
│
└── README.md
```

---

# Local Development

## Option 1 — Open Directly

Open:

```text
index.html
```

inside your browser.

Most features will work immediately.

---

## Option 2 — VS Code Live Server

Install:

```text
Live Server
```

extension.

Then:

```text
Right Click → Open With Live Server
```

Recommended for development.

---

## Option 3 — Python Server

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

---

# GitHub Pages Deployment

## Step 1

Create a repository:

```text
alirezanobakht.github.io
```

or

```text
portfolio
```

---

## Step 2

Upload all project files.

---

## Step 3

Push to GitHub.

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin REPOSITORY_URL
git push -u origin main
```

---

## Step 4

Open:

```text
Settings
→ Pages
→ Deploy from branch
→ Main
→ Root
```

Save changes.

---

## Step 5

GitHub will generate:

```text
https://username.github.io/
```

or

```text
https://username.github.io/repository-name/
```

---

# Customization Guide

## Profile Images

Replace:

```text
assets/images/full_profile.png
```

and

```text
assets/images/cropped_profile.png
```

with updated images.

Keep filenames unchanged.

---

## Resume Files

Replace files inside:

```text
assets/resumes/
```

Update:

```javascript
portfolio-data.js
```

if filenames change.

---

## Personal Information

Edit:

```javascript
assets/js/portfolio-data.js
```

Update:

* Name
* Email
* Phone
* GitHub
* LinkedIn
* Summary

---

## Projects

Inside:

```javascript
projects: []
```

Add:

* Title
* Description
* Technologies
* Impact
* Achievements

---

## Experience

Inside:

```javascript
experience: []
```

Add:

* Company
* Position
* Responsibilities
* Results

---

## Skills

Inside:

```javascript
skills: {}
```

Add or remove technologies as needed.

---

# Performance Considerations

The project is optimized for:

## Core Web Vitals

* Fast Largest Contentful Paint (LCP)
* Low Cumulative Layout Shift (CLS)
* Fast First Input Delay (FID)

## Optimization Techniques

* Lazy-loaded images
* Minimal JavaScript
* No framework overhead
* Optimized CSS architecture
* GPU-accelerated animations
* RequestAnimationFrame usage
* Intersection Observer API
* Local asset hosting

## Lighthouse Targets

Expected scores:

```text
Performance     95+
Accessibility   95+
Best Practices  95+
SEO             100
```

---

# Accessibility

The portfolio includes:

* Semantic HTML5
* Keyboard navigation
* Focus states
* ARIA labels
* Screen-reader support
* Reduced motion support
* Accessible color contrast

---

# Recommended Future Enhancements

## Version 2

* Blog section
* Case studies
* Project filtering
* Search functionality
* Download analytics
* Multi-language support

## Version 3

* CMS integration
* Headless content management
* Portfolio analytics dashboard
* Project detail pages
* Automated resume updates

---

# License

Personal portfolio website for Alireza Nobakht.

All rights reserved.

---

Built with HTML, CSS, JavaScript, and a modern design system optimized for recruiters, hiring managers, engineering leaders, and product teams.
