/**
 * ==========================================================
 * portfolio-data.js
 * Centralized Portfolio Data Source
 * ==========================================================
 */

const PORTFOLIO_DATA = {

    /* ======================================================
       PERSONAL INFORMATION
    ====================================================== */

    personal: {

        fullName: "Alireza Nobakht",

        headline:
            "Software Engineer | ASP.NET Core Developer | Java Developer | Product Management Candidate",

        location: "Tehran, Iran",

        email: "alireza.nobakht2004@gmail.com",

        phone: "+98 910 977 7936",

        github:
            "https://github.com/alirezanobakht2004",

        linkedin:
            "https://linkedin.com/in/alireza-nobakht",

        website:
            "https://alirezanobakht.github.io",

        profileImage:
            "assets/images/cropped_profile.png",

        fullImage:
            "assets/images/full_profile.png",

        summary: `
            Software Engineer with experience spanning ASP.NET Core,
            Java Spring Boot, Android, geospatial systems, embedded
            software, and connected-device platforms. Experienced in
            backend architecture, API design, database optimization,
            offline-first applications, and cross-platform integrations.
            Also pursuing a Product Management path by combining technical
            depth with workflow design, requirement analysis, stakeholder
            communication, and measurable business outcomes.
        `
    },

    /* ======================================================
       CAREER TRACKS
    ====================================================== */

    careerFocus: [

        {
            title: "ASP.NET Core Developer",
            description:
                "Backend systems, enterprise APIs, database optimization, security, testing, and cloud-ready architectures."
        },

        {
            title: "Java Developer",
            description:
                "Spring Boot applications, geospatial systems, Android integrations, PostgreSQL/PostGIS platforms, and scalable APIs."
        },

        {
            title: "Associate Product Manager",
            description:
                "Technical product leadership, workflow design, requirements definition, prioritization, and product delivery."
        }

    ],

    /* ======================================================
       SKILLS
    ====================================================== */

    skills: {

        backend: [

            "C#",
            ".NET",
            "ASP.NET Core",
            "Web API",
            "REST APIs",
            "Entity Framework Core",
            "LINQ",
            "SignalR",
            "Java",
            "Spring Boot",
            "Spring MVC",
            "Hibernate",
            "JPA"
        ],

        architecture: [

            "Clean Architecture",
            "DDD",
            "CQRS",
            "SOLID",
            "Dependency Injection",
            "Repository Pattern",
            "Unit Of Work",
            "Multi-Tenant Systems",
            "Design Patterns"
        ],

        databases: [

            "SQL Server",
            "PostgreSQL",
            "PostGIS",
            "Redis",
            "Database Design",
            "Query Optimization",
            "Stored Procedures",
            "Spatial Indexing"
        ],

        frontend: [

            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "React",
            "Thymeleaf",
            "Leaflet",
            "OpenLayers"
        ],

        mobile: [

            "Android",
            "Kotlin",
            "Java Android SDK",
            "Offline Synchronization",
            "GPS Tracking"
        ],

        testing: [

            "xUnit",
            "NUnit",
            "Moq",
            "Unit Testing",
            "Integration Testing",
            "FluentValidation",
            "Swagger/OpenAPI"
        ],

        security: [

            "JWT",
            "OAuth 2.0",
            "RBAC",
            "ASP.NET Identity",
            "Secure Coding",
            "Authorization"
        ],

        devops: [

            "Docker",
            "CI/CD",
            "GitHub Actions",
            "Azure DevOps",
            "Git",
            "Linux"
        ],

        embedded: [

            "STM32",
            "C",
            "C++",
            "Qt",
            "UART",
            "SPI",
            "I2C",
            "GPS",
            "IMU",
            "Multithreading",
            "Real-Time Systems"
        ],

        productManagement: [

            "Product Discovery",
            "User Stories",
            "Acceptance Criteria",
            "Backlog Prioritization",
            "Roadmapping",
            "Workflow Design",
            "Requirement Analysis",
            "Stakeholder Communication",
            "KPI Thinking",
            "Risk Analysis"
        ]
    },

    /* ======================================================
       EXPERIENCE
    ====================================================== */

    experience: [

        {
            role:
                "Software Developer & Embedded Systems Engineer",

            company:
                "Hiromap (Hirongar Pars Company)",

            location:
                "Tehran, Iran",

            period:
                "Feb 2024 - Present",

            highlights: [

                "Architected ASP.NET Core services for enterprise ERP and multi-tenant systems.",

                "Built Spring Boot geospatial platforms using PostgreSQL/PostGIS.",

                "Improved API performance by 40% through SQL optimization.",

                "Supported 99.5% reported system availability.",

                "Integrated STM32 firmware, Android applications, and desktop software.",

                "Developed GPS, IMU, navigation, and field-survey solutions.",

                "Created diagnostic tools with zero observed serial data loss at 115200 baud."
            ]
        },

        {
            role:
                "Technical Instructor & Educational Consultant",

            company:
                "Ghalamchi Educational Institute",

            location:
                "Tehran, Iran",

            period:
                "Aug 2022 - Jun 2023",

            highlights: [

                "Mentored students in programming fundamentals and algorithms.",

                "Prepared structured lessons and practical exercises.",

                "Facilitated technical communication and collaborative learning.",

                "Provided educational consulting and progress tracking."
            ]
        }

    ],

    /* ======================================================
       PROJECTS
    ====================================================== */

    projects: [

        {
            title:
                "Tender Management API",

            category:
                "ASP.NET Core",

            period:
                "2025",

            technologies: [

                "ASP.NET Core",
                "EF Core",
                "SQL Server",
                "FluentValidation",
                "AutoMapper",
                "xUnit",
                "REST API"
            ],

            description:
                "Procurement and bidding backend platform supporting tenders, bids, vendors, and identity management.",

            impact: [

                "95%+ test coverage",

                "35% query performance improvement",

                "Standardized validation and API architecture"
            ]
        },

        {
            title:
                "Alibaba Travel Reservation System",

            category:
                "ASP.NET Core",

            period:
                "2025",

            technologies: [

                "ASP.NET Core",
                "SQL Server",
                "Redis",
                "JWT",
                "Clean Architecture"
            ],

            description:
                "Multi-modal transportation reservation platform supporting booking workflows and role-based access.",

            impact: [

                "60% faster responses",

                "Targeted 10k+ concurrent users",

                "99.8% uptime goal"
            ]
        },

        {
            title:
                "Geospatial Data Management System",

            category:
                "Java / Spring Boot",

            period:
                "2025",

            technologies: [

                "Java",
                "Spring Boot",
                "Hibernate",
                "PostgreSQL",
                "PostGIS",
                "React",
                "Leaflet"
            ],

            description:
                "Survey-data and mapping platform for storage, visualization, and geospatial processing.",

            impact: [

                "Spatial indexing",

                "Large dataset visualization",

                "Scalable map workflows"
            ]
        },

        {
            title:
                "Field Survey Data Collection App",

            category:
                "Android",

            period:
                "2024",

            technologies: [

                "Java Android SDK",
                "Spring Boot",
                "REST APIs",
                "GPS",
                "Offline Storage"
            ],

            description:
                "Offline-capable field data collection application for survey engineers.",

            impact: [

                "Offline synchronization",

                "GPS tracking",

                "40% reduction in manual-entry errors"
            ]
        },

        {
            title:
                "Desktop Diagnostics & Cross-Platform Transfer",

            category:
                "Connected Systems",

            period:
                "2024 - 2025",

            technologies: [

                "C++",
                "Qt",
                "C#",
                "UART",
                "STM32"
            ],

            description:
                "Real-time diagnostics and serial communication tooling for connected-device platforms.",

            impact: [

                "Zero observed data loss",

                "40% lower memory consumption",

                "Multi-format export support"
            ]
        }

    ],

    /* ======================================================
       EDUCATION
    ====================================================== */

    education: [

        {
            degree:
                "Bachelor's Degree",

            field:
                "Computer Engineering",

            institution:
                "Computer Engineering Program",

            description:
                "Focused on software engineering, algorithms, databases, systems programming, and computer architecture."
        }

    ],

    /* ======================================================
       CERTIFICATIONS
    ====================================================== */

    certifications: [

        {
            title:
                "ASP.NET Core Professional Development",
            issuer:
                "Self-Directed Professional Training"
        },

        {
            title:
                "Java & Spring Boot Professional Development",
            issuer:
                "Self-Directed Professional Training"
        },

        {
            title:
                "Product Management Learning Path",
            issuer:
                "Continuous Professional Development"
        }
    ],

    /* ======================================================
       ACHIEVEMENTS
    ====================================================== */

    achievements: [

        {
            metric: "40%",
            title:
                "API Performance Improvement"
        },

        {
            metric: "99.5%",
            title:
                "Reported Production Availability"
        },

        {
            metric: "95%+",
            title:
                "Test Coverage Achievement"
        },

        {
            metric: "10k+",
            title:
                "Target Concurrent Users"
        },

        {
            metric: "40%",
            title:
                "Reduction in Manual Entry Errors"
        },

        {
            metric: "0",
            title:
                "Observed Data Loss at 115200 Baud"
        }
    ],

    /* ======================================================
       RESUME CENTER
    ====================================================== */

    resumes: [

        {
            title:
                "ASP.NET Core Developer Resume",

            type:
                "ASP.NET Core",

            pdf:
                "assets/resumes/Alireza_Nobakht_Resume_ASP.NetCore.pdf",

            summary:
                "Backend engineering, enterprise APIs, architecture, performance optimization, security, testing, and DevOps."
        },

        {
            title:
                "Java Developer Resume",

            type:
                "Java",

            pdf:
                "assets/resumes/Alireza_Nobakht_Java_Resume_v2.pdf",

            summary:
                "Spring Boot, PostgreSQL/PostGIS, Android, geospatial platforms, and enterprise backend systems."
        },

        {
            title:
                "Associate Product Manager Resume",

            type:
                "Product Management",

            pdf:
                "assets/resumes/Alireza_Nobakht_Associate_Product_Manager_Resume.pdf",

            summary:
                "Technical product leadership, workflow design, requirement analysis, prioritization, and product delivery."
        }

    ]

};

/* Global Access */

window.PORTFOLIO_DATA = PORTFOLIO_DATA;