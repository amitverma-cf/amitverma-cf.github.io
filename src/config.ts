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
        image: 'https://picsum.photos/seed/1/800/600?grayscale',
        link: 'https://github.com/amitverma-cf/movie-rag',
        title: 'Movie-RAG',
        description: 'IMDB Movie RAG and Tool Calling system.'
    },
    {
        image: 'https://picsum.photos/seed/1/800/600?grayscale',
        link: 'https://github.com/amitverma-cf/pacs',
        title: 'PACS 3D',
        description: 'Clinical grade medical imaging renderer.'
    },
    {
        image: 'https://picsum.photos/seed/1/800/600?grayscale',
        link: 'https://github.com/amitverma-cf/reddish',
        title: 'Reddish',
        description: 'Concurrent multithreaded Redis-like server.'
    },
    {
        image: 'https://picsum.photos/seed/1/800/600?grayscale',
        link: 'https://github.com/amitverma-cf/unihub',
        title: 'UniHub',
        description: 'University student community platform.'
    },
    {
        image: 'https://picsum.photos/seed/1/800/600?grayscale',
        link: 'https://github.com/amitverma-cf/acm_mu',
        title: 'ACM MU',
        description: 'Official ACM MU chapter landing page.'
    },
    {
        image: 'https://picsum.photos/seed/1/800/600?grayscale',
        link: 'https://github.com/amitverma-cf/BudgetTracker',
        title: 'Budget Tracker',
        description: 'Personal finance and expenditure manager.'
    },
    {
        image: 'https://picsum.photos/seed/1/800/600?grayscale',
        link: 'https://github.com/amitverma-cf/flutter_instagram_redesign',
        title: 'Re-Instagram',
        description: 'Flutter-based social media UI redesign.'
    }
];

const contactItems = [
    {
        image: `https://picsum.photos/seed/1/800/600?grayscale`,
        text: 'LinkedIn'
    },
    {
        image: `https://picsum.photos/seed/2/800/600?grayscale`,
        text: 'GitHub'
    },
    
    {
        image: `https://picsum.photos/seed/2/800/600?grayscale`,
        text: 'Hugging Face'
    },
    {
        image: `https://picsum.photos/seed/3/800/600?grayscale`,
        text: 'Gmail'
    },
    {
        image: `https://picsum.photos/seed/4/800/600?grayscale`,
        text: 'Twitter'
    },
];

export { projects, experienceData, projectItems, contactItems };