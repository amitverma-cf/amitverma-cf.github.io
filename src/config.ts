const projects = [
    {
        title: "Reddish",
        description: "Cross-platform in-memory data store supporting RESP parsing.",
        github: "https://github.com/amitverma-cf/reddish",
        date: "2026",
        badges: ["C++", "CMake", "TCP"]
    },
    {
        title: "SC Digital Contagion",
        description: "30-day temporal stress model using social graph homophily.",
        github: "https://huggingface.co/spaces/amve/sc-digital-contagion-simulator",
        date: "2025",
        badges: ["Python", "K-Means"]
    },
    {
        title: "PACS 3D Viewer",
        description: "Clinical-grade 3D renderer featuring GPU ray-casting.",
        github: "https://github.com/amitverma-cf/pacs",
        date: "2026",
        badges: ["WebGL", "GPU"]
    }
];

const experienceData = [
    {
        period: "May 2025 - Dec 2025",
        role: "Founding Engineer",
        company: "YUDI AI",
        description: "Led the technical architecture for a startup building emotional AI avatars capable of writing, speaking, and interacting via live video.",
        highlights: ["Built real-time AI communication using WebSockets.", "Reduced inference latency by ~40% on A100 GPUs.", "Designed fault-tolerant concurrent session handling."]
    },
    {
        period: "Jan 2025 - Mar 2025",
        role: "SWE Intern",
        company: "FacePe.net",
        description: "Engineered the backend authorization flows for a device-free, biometric payment platform operating in the fintech sector.",
        highlights: ["Developed Facial Recognition + PIN logic.", "Optimized GCP webhook pipelines.", "Maintained state consistency in distributed workflows."]
    },
    {
        period: "Jan 2024 - Jan 2025",
        role: "Software Engineer",
        company: "Prithvi Quest",
        description: "Directed software operations for a startup specializing in drone mapping and automated building cleaning hardware.",
        highlights: ["Architected drone flight stability software.", "Developed telemetry tracking mobile app.", "Implemented hardware-ready CI/CD pipelines."]
    },
    {
        period: "Apr 2020 - Oct 2020",
        role: "App Developer",
        company: "DAYBEST",
        description: "Developed client-facing mobile applications for a startup modernizing the agricultural supply chain.",
        highlights: ["Built Flutter marketplace meta-app.", "Integrated Firebase for real-time sync.", "Connected mobile frontends to WordPress CMS."]
    }
];

const projectItems = [
    {
        image: 'https://v1.docs.ohif.org/assets/images/LT_Viewer-b595e35939c5930f68de2f364a0dc3a5.png',
        link: 'https://github.com/amitverma-cf/pacs',
        title: 'PACS 3D',
        description: 'Clinical grade medical imaging renderer.'
    },
    {
        image: 'https://static.vecteezy.com/system/resources/previews/011/411/224/non_2x/illustration-of-japanese-radish-vector.jpg',
        link: 'https://github.com/amitverma-cf/reddish',
        title: 'Reddish',
        description: 'Concurrent multithreaded Redis-like server.'
    },
    {
        image: 'https://raw.githubusercontent.com/amitverma-cf/movie-rag/master/assets/dashboard.png',
        link: 'https://github.com/amitverma-cf/movie-rag',
        title: 'Movie-RAG',
        description: 'IMDB Movie RAG and Tool Calling system.'
    },
    {
        image: 'https://cdn.dribbble.com/userupload/41901234/file/original-1f9e9c178cdc35b4c08db5e81643cdf3.jpg',
        link: 'https://github.com/amitverma-cf/unihub',
        title: 'UniHub',
        description: 'University student community platform.'
    },
    {
        image: 'https://cdn.dribbble.com/userupload/21339812/file/original-ec108147434c73676cf0dbfb076d50e7.png',
        link: 'https://github.com/amitverma-cf/acm_mu',
        title: 'ACM MU',
        description: 'Official ACM MU chapter landing page.'
    },
    {
        image: 'https://cdn.dribbble.com/userupload/4089514/file/original-f27856c707b2026d65b0d211ef8640e4.png',
        link: 'https://github.com/amitverma-cf/BudgetTracker',
        title: 'Budgeter',
        description: 'Personal finance and expenditure manager.'
    },
    {
        image: 'https://cdn.dribbble.com/userupload/40425258/file/original-4eb8fd76808ba0c90afbbb5b7eb2ae31.png',
        link: 'https://github.com/amitverma-cf/flutter_instagram_redesign',
        title: 'ReInsta',
        description: 'Flutter-based social media UI redesign.'
    }
];

export { projects, experienceData, projectItems };