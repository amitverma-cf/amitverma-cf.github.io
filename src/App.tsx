import { ParticleTypography } from "@/components/ParticleTypography";
import Dock from "@/components/Dock";
import { HugeiconsIcon } from "@hugeicons/react";
import { Contact01Icon, Folder02Icon, Home02Icon, PrescriptionsIcon, Profile02Icon } from "@hugeicons/core-free-icons";
import InfiniteMenu from "@/components/InfiniteMenu";
import AboutTimeline from "@/About";
import { Hero } from "@/Hero";
import { Contact } from "@/Contact";
import { projectItems } from "@/config";
import { useCallback, useMemo, useRef } from "react";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const isSectionScrollLocked = useRef(false);
  const lenisRef = useRef<Lenis | null>(null);

  const sectionOrder = useMemo(
    () => ["home", "experiences", "about", "projects-title", "projects", "contacts-title", "contact", "signature"],
    []
  );

  const sectionEase = useCallback((t: number) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }, []);

  useGSAP(() => {
    const lenis = new Lenis({
      duration: 0.62,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.5,
      wheelMultiplier: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Dynamic array to track our snap triggers
    const snapTriggers: ScrollTrigger[] = [];

    // Delay initialization to ensure DOM layout and About section's Pinot spacer exist
    const timeoutId = setTimeout(() => {
      const getSections = () => sectionOrder.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
      const sections = getSections();
      
      sections.forEach((sec) => {
        // Skip 'about' since it comes with horizontal snap points securely wrapped inside About.tsx
        if (sec.id === "about") return;

        const st = ScrollTrigger.create({
          trigger: sec,
          start: "top top",
          end: "+=100%", // Valid boundary covering exact height of section
          snap: {
            snapTo: [0, 1], // Pull progress towards closest boundary
            duration: { min: 0.25, max: 0.6 },
            delay: 0.05, // Rapid reaction once dragging force relents
            ease: sectionEase
          }
        });
        snapTriggers.push(st);
      });
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      snapTriggers.forEach(st => st.kill());
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [sectionEase, sectionOrder]);

  const scrollToSection = useCallback((id: string) => {
    if (lenisRef.current) {
      isSectionScrollLocked.current = true;
      lenisRef.current.scrollTo(`#${id}`, {
        duration: 0.5,
        offset: 0,
        lock: true,
        easing: sectionEase,
        onComplete: () => {
          isSectionScrollLocked.current = false;
        },
      });
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [sectionEase]);

  const navItems = useMemo(
    () => [
      { icon: <HugeiconsIcon size={18} icon={Home02Icon} />, label: "Home", onClick: () => scrollToSection("home") },
      { icon: <HugeiconsIcon size={18} icon={Profile02Icon} />, label: "Experiences", onClick: () => scrollToSection("about") },
      { icon: <HugeiconsIcon size={18} icon={Folder02Icon} />, label: "Projects", onClick: () => scrollToSection("projects") },
      { icon: <HugeiconsIcon size={18} icon={Contact01Icon} />, label: "Contact", onClick: () => scrollToSection("contact") },
      {
        className: "bg-blue-700 text-white",
        icon: <HugeiconsIcon size={18} icon={PrescriptionsIcon} />,
        label: "Resume",
        onClick: () => window.open("https://drive.google.com/file/d/15scnJF48Rr-N_fvduVD6UVkC1d4nQA3E/view?usp=sharing", "_blank"),
      },
    ],
    [scrollToSection]
  );

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background overflow-x-hidden font-geist antialiased">
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-999">
        <Dock
          items={navItems}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
      <section id="home" className="h-screen w-screen overflow-hidden"><Hero /></section>
      <section id="experiences" className="h-screen w-screen overflow-hidden">
        <ParticleTypography
          text="Experiences"
          fontSize={200}
          particleDensity={5}
          dispersionStrength={20}
        />
      </section>
      <section id="about" className="w-screen overflow-hidden"><AboutTimeline /></section>
      <section id="projects-title" className="h-screen w-screen overflow-hidden">
        <ParticleTypography
          text="Projects"
          fontSize={200}
          particleDensity={5}
          dispersionStrength={20}
        />
      </section>
      <section id="projects" className="h-screen w-screen overflow-hidden">
        <InfiniteMenu items={projectItems} scale={1} />
      </section>
      <section id="contacts-title" className="h-screen w-screen overflow-hidden">
        <ParticleTypography
          text="Contacts"
          fontSize={200}
          particleDensity={5}
          dispersionStrength={20}
        />
      </section>
      <section id="contact" className="h-screen w-screen overflow-hidden items-center pt-30">
        <Contact />
        <ParticleTypography
          text="AMIT VERMA"
          fontSize={400}
          particleDensity={5}
          dispersionStrength={20}
        />
      </section>
    </div>
  );
}

