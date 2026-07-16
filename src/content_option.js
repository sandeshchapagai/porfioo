import photoMe from './assets/images/my_photo.jpeg';

const logotext = "SanDesh";
const meta = {
    title: "Sandesh Chapagai",
    description: "Sandesh Chapagai — Flutter developer with 3+ years architecting and shipping production apps on the App Store and Google Play. Currently sole architect of a live gaming and language-learning platform.",
};

const introdata = {
    title: "I’m Sandesh Chapagai",
    photo: photoMe,
    animated: {
        first: "Flutter Developer & Mobile Architect",
        second: "3+ years shipping production apps",
        third: "4 apps live on App Store & Google Play",
    },
    description: "Flutter developer with 3+ years architecting and shipping production apps. Currently sole architect of a live gaming and language-learning platform with a rapidly growing five-figure user base — owning system design end-to-end. Specialized in modular architecture, complex UI engineering, payment integration, and disciplined CI/CD release ownership.",
};

const stats = [
    { value: "3+", label: "Years of experience" },
    { value: "4", label: "Apps in production" },
];

const dataabout = {
    title: "A bit about myself",
    aboutme: "I’m a Flutter developer with a BSc.CSIT from Prithvi Narayan Campus, Pokhara. I currently serve as sole architect and engineer for two live products — a gaming app and Nobigo, a language-learning platform with a rapidly growing five-figure user base — owning system design, technical decisions, and implementation end-to-end while mentoring a junior engineer. My work spans modular architecture, complex UI engineering (SVG stroke-tracing, gamified UX), payment integration (Fonepay QR), and disciplined CI/CD release ownership with Codemagic and Shorebird OTA. Over the past three years I’ve taken four apps from zero to live on the App Store and Google Play.",
};


const worktimeline = [
    {
        jobtitle: "Flutter Developer (Sole Architect)",
        where: "Darkmatter Game Production, Kathmandu",
        date: "Nov 2025 – Present",
    },
    {
        jobtitle: "Flutter Developer",
        where: "BlackTech, Pokhara",
        date: "Jun 2024 – Aug 2025",
    },
    {
        jobtitle: "Flutter Developer",
        where: "Websoft Technology Nepal, Pokhara",
        date: "Oct 2023 – Apr 2024",
    },
    {
        jobtitle: "Flutter Developer",
        where: "Pine Software, Pokhara",
        date: "Feb 2023 – Oct 2023",
    },
];

const skills = [
    { name: "Flutter & Dart", value: 95 },
    { name: "Clean Architecture, MVVM & SOLID", value: 90 },
    { name: "BLoC, Provider & Riverpod", value: 90 },
    { name: "Firebase, REST & GraphQL", value: 85 },
    { name: "CI/CD — Codemagic, Shorebird & GitHub Actions", value: 85 },
    { name: "Complex UI & SVG Rendering", value: 85 },
    { name: "Payments & Platform Channels", value: 80 },
    { name: "Kotlin, Swift & Java", value: 70 },
];

const skillGroups = [
    {
        label: "Core",
        items: ["Flutter", "Dart", "Clean Architecture", "MVVM", "SOLID", "BLoC", "Provider", "Riverpod"],
    },
    {
        label: "DevOps & Release",
        items: ["Codemagic", "Shorebird OTA", "GitHub Actions", "CI/CD"],
    },
    {
        label: "Backend & Data",
        items: ["REST APIs", "GraphQL", "Firebase", "Firestore", "Hive", "SQFlite", "Drift"],
    },
    {
        label: "Platform",
        items: ["Fonepay QR", "BLE", "Maps & Navigation", "SVG Rendering", "Platform Channels", "Real-Time Sync"],
    },
    {
        label: "Languages",
        items: ["Dart", "Kotlin", "Swift", "Java", "JavaScript", "SQL"],
    },
];

const experience = [
    {
        role: "Flutter Developer — Sole Architect",
        company: "Darkmatter Game Production",
        location: "Kathmandu, Nepal",
        date: "Nov 2025 – Present",
        current: true,
        points: [
            "Sole architect and engineer for two live products (gaming + language-learning) — owning system design, technical decisions, and implementation end-to-end.",
            "Grew Nobigo to a five-figure active-user base; built an SVG stroke-tracing engine, gamified UX, and a modular content system across 5 subject areas.",
            "Run a twice-weekly release cadence via Codemagic and Shorebird OTA; integrated Fonepay QR subscription billing.",
            "Mentor a junior engineer through code reviews and architecture guidance.",
        ],
    },
    {
        role: "Flutter Developer",
        company: "BlackTech",
        location: "Pokhara, Nepal",
        date: "Jun 2024 – Aug 2025",
        points: [
            "One of 3 mobile engineers across concurrent production products; sprint planning, code reviews, and technical design.",
            "Lead developer on RestroX — designed and shipped 10+ modules end-to-end, from zero to live on both platforms.",
            "Architected Simple Patro, a Nepali calendar with Bikram Sambat conversion and full localization.",
            "Introduced Clean Architecture and SOLID; built reusable component libraries adopted team-wide.",
        ],
    },
    {
        role: "Flutter Developer",
        company: "Websoft Technology Nepal",
        location: "Pokhara, Nepal",
        date: "Oct 2023 – Apr 2024",
        points: [
            "Built and shipped Flutter apps for event management and organizational platforms.",
            "Integrated RESTful APIs and real-time data sync.",
        ],
    },
    {
        role: "Flutter Developer",
        company: "Pine Software",
        location: "Pokhara, Nepal",
        date: "Feb 2023 – Oct 2023",
        points: [
            "Contributed to healthcare and government Flutter applications.",
            "Implemented authentication flows, local storage, and responsive cross-device UI.",
        ],
    },
];

const services = [
    {
        title: "Flutter App Architecture",
        description: "End-to-end system design and implementation for production Android & iOS apps — modular, scalable, and maintainable with zero architectural debt.",
    },
    {
        title: "Complex UI & Gamified UX",
        description: "Custom SVG rendering, stroke-tracing engines, animations, and gamified interfaces that keep users engaged and coming back.",
    },
    {
        title: "Payments & Subscriptions",
        description: "Integrate QR and subscription billing (Fonepay) and other payment flows with reliable, secure, well-tested handling.",
    },
    {
        title: "CI/CD & Release Engineering",
        description: "Disciplined release pipelines with Codemagic and Shorebird OTA — predictable cadence, instant hotfixes, no ad-hoc store cycles.",
    },
    {
        title: "Backend & Real-Time Integration",
        description: "Firebase, REST and GraphQL APIs, real-time sync, and offline-first data layers built for reliability at scale.",
    },
];

const dataportfolio = [
    {
        gradient: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        monogram: "N",
        title: "Nobigo",
        company: "Darkmatter Game Production",
        tagline: "Language learning, gamified",
        description: "Multilingual learning platform — learn Japanese, designed for Nepali learners heading to Japan.",
        longDescription: "A live, offline-first language-learning platform with a rapidly growing five-figure user base. As sole architect I own system design end-to-end — from a custom SVG rendering engine for character stroke tracing to a gamified learning experience and a modular content system spanning Alphabets, Kanji, Vocabulary, Grammar, and Learning Paths.",
        technologies: ["Flutter", "Firebase Auth", "Firestore", "FCM", "Hive", "SVG Engine", "Fonepay QR"],
        features: [
            "SVG-based character stroke-tracing engine",
            "Gamified learning UX across 5 subject areas",
            "Offline-first, built for multi-language expansion",
            "Fonepay QR subscription billing",
        ],
        playStoreLink: "https://play.google.com/store/apps/details?id=com.Darkmatter.Language&hl=en",
        appStoreLink: "https://apps.apple.com/au/app/nobigo/id6752236186",
    },
    {
        gradient: "linear-gradient(135deg, #cb2d3e 0%, #ef473a 100%)",
        monogram: "R",
        title: "RestroX",
        company: "BlackTech",
        tagline: "Restaurant operations, one app",
        description: "Comprehensive restaurant management system for orders, inventory, finance, and real-time analytics.",
        longDescription: "As lead developer I designed and shipped 10+ modules end-to-end — order management, checkout, dish menus & submenus, inventory control, finance analytics, real-time reporting, and staff operations. Took the product from zero to live on both platforms; it's now widely used by restaurants across major cities in Nepal and internationally.",
        technologies: ["Flutter", "BLoC", "REST APIs", "Real-Time Reporting"],
        features: [
            "10+ modules covering the full restaurant workflow",
            "Order management, checkout & inventory control",
            "Finance analytics and real-time reporting",
            "Live on Android & iOS, used across Nepal and beyond",
        ],
        playStoreLink: "https://play.google.com/store/apps/details?id=co.restrox.app&hl=en",
        appStoreLink: "https://apps.apple.com/us/app/restrox-restaurant-software/id1611549881",
    },
    {
        gradient: "linear-gradient(135deg, #11998e 0%, #38a169 100%)",
        monogram: "SP",
        
        title: "Simple Patro",
        company: "BlackTech",
        tagline: "Nepali calendar, reimagined",
        description: "A handy Nepali calendar with Bikram Sambat conversion, festivals, Rashifal, and full localization.",
        longDescription: "A Nepali calendar platform built for local users, featuring a Bikram Sambat date-conversion engine, festival data, Rashifal, and complete Nepali localization throughout the experience.",
        technologies: ["Flutter", "Provider", "SQFlite"],
        features: [
            "Bikram Sambat date-conversion engine",
            "Festival data and Rashifal",
            "Full Nepali localization",
            "Lightweight, offline-capable calendar",
        ],
        playStoreLink: "https://play.google.com/store/apps/details?id=com.simplepatro.app&hl=ne",
        appStoreLink: "https://apps.apple.com/us/app/simple-patro-nepali-calendar/id6738119769",
    },
    {
        gradient: "linear-gradient(135deg, #0f2027 0%, #2c5364 100%)",
        monogram: "G",

        title: "Goreto",
        company: "Freelance / Contract",
        tagline: "Trek booking & navigation",
        description: "Trek package booking and navigation app with an integrated equipment marketplace.",
        longDescription: "A trek booking, accommodation, and equipment marketplace built for low-connectivity mountain environments, with geospatial navigation and offline caching so it stays useful off the grid.",
        technologies: ["Flutter", "Maps & Navigation", "Geospatial", "Offline Caching"],
        features: [
            "Trek and accommodation booking",
            "Integrated equipment marketplace",
            "Maps & geospatial navigation",
            "Offline caching for low-connectivity areas",
        ],
        playStoreLink: "https://play.google.com/store/apps/details?id=com.goreto.goreto_app",
        appStoreLink: "https://apps.apple.com/in/app/goreto/id6746813154",
    },
];


const education = [
    {
        school: "Prithvi Narayan Campus",
        degree: "BSc. Computer Science & Information Technology (CSIT)",
        location: "Pokhara, Nepal",
        date: "2021 – 2025",
    },
];

// Served from public/resume.pdf.
const resumeUrl = "/resume.pdf";

const contactConfig = {
    YOUR_EMAIL: "sandeshchapagai25@gmail.com",
    YOUR_FONE: "+977 9846936792",
    description: "Feel free to reach out for collaboration, project inquiries, or just to connect. I’m always open to discussing new opportunities in Flutter development and mobile architecture.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/sandeshchapagai",
    facebook: "https://facebook.com/SanDesh.567890/",
    linkedin: "https://linkedin.com/in/sandeshchapagai",
    twitter: "https://twitter.com/sandeshchapagai",
    website: "https://www.sandeshchapagai.com.np",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    experience,
    education,
    resumeUrl,
    skills,
    skillGroups,
    services,
    introdata,
    stats,
    contactConfig,
    socialprofils,
    logotext,
};
