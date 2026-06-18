# Alireza Nobakht Portfolio

A premium, fully static personal portfolio for **Alireza Nobakht** — a Backend Engineer and Technical Product Candidate focused on **ASP.NET / .NET**, **Java / Spring Boot**, backend APIs, data-driven workflows, connected software, and product-oriented delivery.

This project is designed to be deployed directly on **GitHub Pages** with no build step, backend, database, or paid service required.

---

## Live Portfolio Purpose

This portfolio presents one technical profile through three recruiter-friendly hiring lenses:

- **ASP.NET / .NET Backend**
- **Java / Spring Boot Backend**
- **Technical Product / Associate PM**

The site is structured to help recruiters quickly understand:

- what Alireza builds,
- which role track is most relevant,
- what projects support each track,
- which resume version to download,
- and how to contact him directly.

---

## Main Sections

### 1. Hero

Introduces Alireza as a **Backend Engineer & Technical Product Candidate** with a concise positioning statement and three role chips:

- ASP.NET / .NET
- Java / Spring Boot
- Technical Product

The hero also includes a premium animated orbit visual and key profile highlights.

### 2. Recruiter Lenses

A role-based section that lets visitors compare the profile through three hiring angles:

- .NET Backend Recruiter
- Java Recruiter
- Product Recruiter

Each card explains best-fit roles, core strengths, representative work, and links to the relevant resume.

### 3. Outcomes in Context

Shows selected improvements from real projects, grouped by outcome type rather than isolated metrics.

### 4. Selected Engineering Work

A filtered project section showing backend architecture, Java/.NET delivery, product workflows, data handling, connected software, and reliability under real-world constraints.

Project filters include:

- All
- .NET
- Java
- Product
- Backend
- Data Platforms
- Mobile
- Connected Systems

### 5. Capability Map

A structured skills section that explains how skills are used in delivery, not just listed as tags.

Capability areas include:

- Backend & APIs
- Architecture & Service Design
- Data & Performance
- Security & Quality
- DevOps & Delivery
- Mobile & Web Workflows
- Connected Systems
- Product Discovery
- Requirements & Prioritization
- Communication & Teaching

### 6. Product Thinking

A compact product-delivery flow showing how engineering experience supports product judgment:

- Understand
- Structure
- Deliver
- Improve

### 7. Experience Timeline

A premium timeline presenting professional experience through contribution areas, role tags, and professional value.

### 8. Academic Foundation

Compact Education and Professional Development cards showing the computer engineering foundation and ongoing technical growth.

### 9. Resume Downloads

A recruiter-friendly role selector with three resume versions:

- .NET Backend Resume
- Java / Spring Boot Resume
- Product Resume

### 10. Contact & Footer

A polished contact section with direct email, phone, GitHub, LinkedIn, and location details, followed by a compact premium footer.

---

## Project Structure

```text
alireza-nobakht-portfolio/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    ├── icons/
    │   ├── an-logo.png
    │   ├── favicon.png
    │   ├── favicon-32.png
    │   ├── favicon.svg
    │   └── apple-touch-icon.png
    ├── images/
    │   ├── full_profile.png
    │   ├── full_profile.webp
    │   ├── cropped_profile.png
    │   └── cropped_profile.webp
    └── resumes/
        ├── alireza-nobakht-dotnet-backend-resume.pdf
        ├── alireza-nobakht-dotnet-backend-resume.html
        ├── alireza-nobakht-java-spring-resume.pdf
        ├── alireza-nobakht-java-spring-resume.html
        ├── alireza-nobakht-product-management-resume.pdf
        └── alireza-nobakht-product-management-resume.html
```

Some original resume filenames may also be present in the `assets/resumes/` folder for compatibility, but the active portfolio links use the lowercase GitHub Pages-friendly filenames above.

---

## Logo and Favicon

The uploaded AN logo is included in:

```text
assets/icons/an-logo.png
```

It is used for:

- the header brand mark,
- the contact card identity mark,
- favicon assets,
- Apple touch icon.

Favicon files are stored in:

```text
assets/icons/favicon.png
assets/icons/favicon-32.png
assets/icons/favicon.svg
assets/icons/apple-touch-icon.png
```

---

## Resume Links

The portfolio includes three role-specific resume versions.

### .NET Backend Resume

```text
assets/resumes/alireza-nobakht-dotnet-backend-resume.pdf
assets/resumes/alireza-nobakht-dotnet-backend-resume.html
```

### Java / Spring Boot Resume

```text
assets/resumes/alireza-nobakht-java-spring-resume.pdf
assets/resumes/alireza-nobakht-java-spring-resume.html
```

### Product Resume

```text
assets/resumes/alireza-nobakht-product-management-resume.pdf
assets/resumes/alireza-nobakht-product-management-resume.html
```

---

## Technology Stack

This portfolio is intentionally lightweight and static:

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **Responsive layout**
- **GitHub Pages-ready structure**

No framework, build system, server, or package installation is required.

---

## Key Frontend Features

- Dark premium glassmorphism design
- Responsive desktop/mobile layout
- Smooth scrolling navigation
- Mobile navigation menu
- Recruiter mode filtering
- Project filtering
- Capability map filtering
- Resume-card emphasis by recruiter lens
- Accessible focus states
- Reduced-motion support
- Dynamic footer year
- GitHub Pages-compatible relative paths

---

## Deployment on GitHub Pages

1. Create a new GitHub repository.
2. Upload the full contents of the `alireza-nobakht-portfolio/` folder to the repository root.
3. Commit and push the files to the `main` branch.
4. Open the repository on GitHub.
5. Go to **Settings → Pages**.
6. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
7. Save the settings.
8. GitHub Pages will publish the site after deployment finishes.

The site should work without additional configuration because all paths are relative.

---

## Local Preview

You can open `index.html` directly in a browser, but using a local static server is recommended for a more accurate preview.

Example with Python:

```bash
cd alireza-nobakht-portfolio
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## Editing Guide

### Main content

Most site content is inside:

```text
index.html
```

### Visual styling

All design, layout, responsiveness, animations, and component styles are inside:

```text
css/styles.css
```

### Interactions

Navigation behavior, recruiter mode, filters, reveal effects, and dynamic year logic are inside:

```text
js/main.js
```

### Images

Profile and visual assets are stored in:

```text
assets/images/
```

### Icons and favicon

Logo and favicon assets are stored in:

```text
assets/icons/
```

### Resumes

Resume PDF and HTML files are stored in:

```text
assets/resumes/
```

---

## Contact Information Used in the Portfolio

```text
Email: alireza.nobakht2004@gmail.com
Phone: (+98) 910-977-7936
GitHub: github.com/alirezanobakht2004
LinkedIn: linkedin.com/in/alireza-nobakht
Location: Tehran, Iran
```

---

## Notes

- This is a static portfolio and does not include a backend contact form.
- Contact actions use direct links such as `mailto:`, `tel:`, GitHub, and LinkedIn.
- All resume links are local files included in the project.
- The design is optimized for GitHub Pages and modern browsers.

---

## Ownership

This portfolio, its content, personal branding, resume files, images, and logo are intended for Alireza Nobakht’s personal use.

Do not reuse the personal content, identity assets, resume files, or images without permission.
