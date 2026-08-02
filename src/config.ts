const projects = [
    {
        title: "Reddish",
        description: "Multi-client TCP server implementing a Redis-like store with RESP parsing.",
        github: "https://github.com/amitverma-cf/reddish",
        date: "2026",
        badges: ["C++", "CMake", "TCP"]
    },
    {
        title: "SC Digital Contagion",
        description: "30-day agent-based stress-propagation model over a homophily-based social graph. Built the simulation engine and UI for a 5-person team project.",
        github: "https://huggingface.co/spaces/amve/sc-digital-contagion-simulator",
        date: "2025",
        badges: ["Python", "K-Means"]
    },
    {
        title: "PACS 3D Viewer",
        description: "Clinical-grade 3D DICOM renderer using GPU ray-casting; cut memory usage ~50% via Int16 voxel data.",
        github: "https://github.com/amitverma-cf/pacs",
        date: "2026",
        badges: ["WebGL", "GPU"]
    }
];

const experienceData = [
    {
        period: "May 2025 - Dec 2025",
        role: "Co-Founder & CTO",
        company: "YUDI AI",
        description: "Co-founded an early-stage AI startup building real-time conversational avatars. Startup wound down due to lack of funding; left after ~7 months.",
        highlights: [
            "Designed a serverless architecture using short-lived ephemeral tokens so the frontend could connect directly to Gemini's realtime audio API, avoiding a persistent VM-hosted backend.",
        ]
    },
    {
        period: "Jan 2025 - Mar 2025",
        role: "SWE Intern",
        company: "FacePe.net",
        description: "Backend work on a device-free, biometric (Face + PIN) payment platform.",
        highlights: ["Built backend logic for the biometric authentication flow.", "Debugged webhook delivery failures in the transaction pipeline."]
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
        description: 'Redis-like TCP server written in C++.'
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
