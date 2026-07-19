import React from 'react';
import { experienceData } from '@/config';
import { HugeiconsIcon } from '@hugeicons/react';
import { AiNetworkIcon, MoneyBag02Icon } from '@hugeicons/core-free-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const getIcon = (company: string) => {
    switch (company.toLowerCase()) {
        case 'yudi ai': return <HugeiconsIcon size={120} icon={AiNetworkIcon} />;
        case 'facepe.net': return <HugeiconsIcon size={120} icon={MoneyBag02Icon} />;
        default: return <HugeiconsIcon size={120} icon={AiNetworkIcon} />;
    }
};

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

export const ExperienceNode: React.FC<ExperienceNodeProps> = ({
    period,
    role,
    company,
    description,
    icon,
    highlights
}) => (
    <div className="experience-node cursor-target snap-center shrink-0 w-full md:w-[85vw] md:max-w-5xl h-auto md:h-[60vh] flex flex-col justify-center relative group">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzZjNmNDYiLz48L3N2Zz4=')] opacity-0 group-hover:opacity-10 transition-opacity duration-700 -z-10" />
        <div className="flex flex-col lg:flex-row items-stretch border-4 border-dotted border-zinc-800 bg-zinc-950 h-full">
            <div className="relative shrink-0 w-full lg:w-87.5 flex flex-col items-center justify-center border-b-4 lg:border-b-0 lg:border-r-4 border-dotted border-zinc-800 bg-zinc-900 p-6 lg:p-8">
                {icon}
                <div className="mt-6 lg:mt-8 px-4 py-2 text-zinc-400 font-mono text-sm tracking-widest uppercase text-center">{period}</div>
            </div>
            <div className="flex flex-col grow p-6 sm:p-10 lg:p-14 justify-between">
                <div>
                    <h2 className="text-2xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-zinc-50 mb-2">{role}</h2>
                    <h3 className="text-lg sm:text-xl lg:text-2xl text-zinc-400 mb-4 sm:mb-6 font-light">@ {company}</h3>
                    <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">{description}</p>
                </div>
                <div className="mt-6 sm:mt-8 border-t-2 border-dotted border-zinc-800 pt-6 sm:pt-8">
                    <ul className="flex flex-col gap-3 sm:gap-4">
                        {highlights.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 sm:gap-4">
                                <div className="mt-2 w-2 h-2 rounded-full bg-zinc-100 shrink-0" />
                                <span className="text-zinc-400 text-sm sm:text-base">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);


export default function ExperienceTimeline() {
    const sectionRef = React.useRef<HTMLElement | null>(null);
    const trackRef = React.useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            const section = sectionRef.current;
            const track = trackRef.current;

            if (!section || !track) {
                return;
            }

            const cards = gsap.utils.toArray<HTMLElement>('.experience-node', section);

            // Simple fade-in on all screen sizes, no horizontal scroll-jack.
            gsap.fromTo(
                cards,
                { autoAlpha: 0, y: 60 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.75,
                    ease: 'power3.out',
                    stagger: 0.18,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        once: true,
                    },
                }
            );

            // Horizontal pinned scroll-jacking is desktop-only: it's a heavy, disorienting
            // pattern on touch devices (fights with native scroll, breaks on address-bar resize).
            const mm = gsap.matchMedia();
            mm.add('(min-width: 768px)', () => {
                const totalShift = Math.max(track.scrollWidth - window.innerWidth, 0);
                if (totalShift <= 0) return;

                const horizontalTween = gsap.to(track, {
                    x: -totalShift,
                    ease: 'none',
                    scrollTrigger: {
                        id: 'about-horizontal',
                        trigger: section,
                        start: 'top top',
                        end: () => `+=${totalShift}`,
                        scrub: true,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                cards.forEach((card) => {
                    gsap.fromTo(
                        card,
                        { y: 28 },
                        {
                            y: -28,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: card,
                                start: 'left right',
                                end: 'right left',
                                scrub: true,
                                containerAnimation: horizontalTween,
                            },
                        }
                    );
                });
            });

            ScrollTrigger.refresh();
        },
        { scope: sectionRef, dependencies: [experienceData.length] }
    );

    return (
        <section
            ref={sectionRef}
            className="md:h-dvh w-full h-auto bg-zinc-950 relative md:overflow-hidden flex items-center py-16 md:py-0"
        >
            <div className="hidden md:block fixed top-1/2 left-0 w-[500vw] h-0 border-t-4 border-dotted border-zinc-900 -translate-y-1/2 -z-10" />
            <div
                ref={trackRef}
                className="flex flex-col md:flex-row items-center md:h-full px-4 md:px-[10vw] gap-10 md:gap-24 w-full md:w-max will-change-transform"
            >
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
