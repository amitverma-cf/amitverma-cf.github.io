import React from 'react';
import { experienceData } from '@/config';
import TargetCursor from '@/components/TargetCursor';

// --- Huge Geometric Icons ---
const IconAI = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-40 h-40 text-zinc-100">
        <path strokeLinecap="square" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path strokeLinecap="square" d="M12 6v2M12 16v2M6 12h2M16 12h2M8.46 8.46l1.42 1.42M14.12 14.12l1.42 1.42M8.46 15.54l1.42-1.42M14.12 9.88l1.42-1.42" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
);

const IconFintech = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-40 h-40 text-zinc-100">
        <path strokeLinecap="square" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="12" r="3" strokeLinecap="square" />
    </svg>
);

const IconDrones = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-40 h-40 text-zinc-100">
        <circle cx="12" cy="12" r="10" strokeLinecap="square" />
        <path strokeLinecap="square" d="M12 2v4M12 18v4M2 12h4M18 12h4M8 8l8 8M16 8l-8 8" />
    </svg>
);

const IconAgritech = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-40 h-40 text-zinc-100">
        <path strokeLinecap="square" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
);

// --- Icon Mapping Helper ---
const getIcon = (company: string) => {
    switch (company.toLowerCase()) {
        case 'yudi ai': return <IconAI />;
        case 'facepe.net': return <IconFintech />;
        case 'prithvi quest': return <IconDrones />;
        case 'daybest': return <IconAgritech />;
        default: return <IconAgritech />;
    }
};

// --- Interfaces ---
export interface ExperienceData {
    period: string;
    role: string;
    company: string;
    description: string;
    highlights: string[];
}

interface ExperienceNodeProps extends ExperienceData {
    icon: React.ReactNode;
}

// --- Card Component ---
export const ExperienceNode: React.FC<ExperienceNodeProps> = ({
    period,
    role,
    company,
    description,
    icon,
    highlights
}) => (
    <div className="cursor-target snap-center shrink-0 w-[85vw] max-w-5xl h-[60vh] flex flex-col justify-center relative group">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzZjNmNDYiLz48L3N2Zz4=')] opacity-0 group-hover:opacity-10 transition-opacity duration-700 -z-10" />
        <div className="flex flex-col lg:flex-row items-stretch border-4 border-dotted border-zinc-800 bg-zinc-950 h-full">
            <div className="relative shrink-0 w-full lg:w-87.5 flex flex-col items-center justify-center border-b-4 lg:border-b-0 lg:border-r-4 border-dotted border-zinc-800 bg-zinc-900 p-8">
                {icon}
                <div className="mt-8 px-4 py-2 text-zinc-400 font-mono text-sm tracking-widest uppercase">{period}</div>
            </div>
            <div className="flex flex-col grow p-10 lg:p-14 justify-between">
                <div>
                    <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-zinc-50 mb-2">{role}</h2>
                    <h3 className="text-xl lg:text-2xl text-zinc-400 mb-6 font-light">@ {company}</h3>
                    <p className="text-lg text-zinc-300 max-w-2xl leading-relaxed">{description}</p>
                </div>
                <div className="mt-8 border-t-2 border-dotted border-zinc-800 pt-8">
                    <ul className="flex flex-col gap-4">
                        {highlights.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div className="mt-2 w-2 h-2 rounded-full bg-zinc-100 shrink-0" />
                                <span className="text-zinc-400 text-base">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

// --- Main Component ---
export default function ExperienceTimeline() {
    return (
        <section className="h-screen w-full bg-zinc-950 relative overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex items-center scrollbar-hide">
            <div className="fixed top-1/2 left-0 w-[500vw] h-0 border-t-4 border-dotted border-zinc-900 -translate-y-1/2 -z-10" />
            <div className="flex flex-row items-center h-full px-[10vw] gap-24 w-max">
                <TargetCursor
                    spinDuration={2}
                    hideDefaultCursor
                    parallaxOn
                    hoverDuration={0.2}
                />

                {/* Intro Card */}
                <div className="cursor-target snap-center shrink-0 w-[60vw] max-w-2xl flex flex-col items-start gap-8">
                    <div className="w-32 h-32 border-4 border-dotted border-zinc-800 rounded-full flex items-center justify-center bg-zinc-900">
                        <div className="w-8 h-8 bg-zinc-100 rounded-full" />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-50 mb-4">Experience.</h1>
                </div>

                {/* Mapped Experience Cards */}
                {experienceData.map((exp, idx) => (
                    <ExperienceNode
                        key={idx}
                        {...exp}
                        icon={getIcon(exp.company)}
                    />
                ))}
            </div>
        </section>
    );
}