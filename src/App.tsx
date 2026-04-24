import { ParticleTypography } from "@/components/ParticleTypography";
import Dock from "@/components/Dock";
import { HugeiconsIcon } from "@hugeicons/react";
import { Contact01Icon, Folder02Icon, Home02Icon, PrescriptionsIcon, Profile02Icon } from "@hugeicons/core-free-icons";
import InfiniteMenu from "@/components/InfiniteMenu";
import AboutTimeline from "@/About";
import { Hero } from "@/Hero";
import { Contact } from "@/Contact";
import { projectItems } from "@/config";
import { useCallback, useEffect, useMemo, useRef } from "react";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const isSectionScrollLocked = useRef(false);

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

    // 1. Sync GSAP ScrollTrigger with Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      // 2. CRITICAL FIX: GSAP ticker time is in SECONDS. Lenis expects MILLISECONDS.
      // Failing to multiply by 1000 causes Lenis animations to literally move 1000x slower.
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const getSections = () => {
      return sectionOrder
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);
    };

    let lastWheelTime = Date.now();

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();

      const now = Date.now();
      const timeSinceLastWheel = now - lastWheelTime;
      lastWheelTime = now;

      // Filter out continuous trackpad momentum events if they arrive too quickly 
      // after a lock terminates, or during the lock.
      if (Math.abs(event.deltaY) < 15 || timeSinceLastWheel < 45) {
        return;
      }

      if (isSectionScrollLocked.current) {
        return;
      }

      const lenis = lenisRef.current;
      if (!lenis) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      const aboutTrigger = ScrollTrigger.getById("about-horizontal");

      // Check if we are inside the About horizontal section bounds
      if (aboutTrigger) {
        // Use a 2px threshold to handle fractional pixel values
        const isWithinHorizontal = window.scrollY >= aboutTrigger.start - 2 && window.scrollY <= aboutTrigger.end + 2;
        
        if (isWithinHorizontal) {
          const totalPixels = aboutTrigger.end - aboutTrigger.start;
          const numNodes = document.querySelectorAll('.experience-node').length;
          
          if (numNodes > 1) {
            const stepPx = totalPixels / (numNodes - 1);
            const progressPixels = window.scrollY - aboutTrigger.start;
            let currentNode = Math.round(progressPixels / stepPx);
            
            let targetNode = currentNode + direction;

            // If navigating within the horizontal steps
            if (targetNode >= 0 && targetNode <= numNodes - 1) {
              const targetScrollY = aboutTrigger.start + (targetNode * stepPx);
              
              if (Math.abs(targetScrollY - window.scrollY) > 2) {
                isSectionScrollLocked.current = true;
                lenis.scrollTo(targetScrollY, {
                  duration: 0.85,
                  lock: true,
                  force: true,
                  easing: sectionEase,
                  onComplete: () => {
                    window.setTimeout(() => {
                      isSectionScrollLocked.current = false;
                    }, 500); // 500ms safety window against momentum
                  }
                });
                return;
              }
            }
          }
        }
      }

      const sections = getSections();
      if (!sections.length) return;

      const pivot = window.scrollY + window.innerHeight * 0.35;
      let currentIndex = 0;

      for (let i = 0; i < sections.length; i += 1) {
        const topOfSection = sections[i].getBoundingClientRect().top + window.scrollY;
        if (topOfSection <= pivot) {
          currentIndex = i;
        }
      }

      const targetIndex = Math.min(Math.max(currentIndex + direction, 0), sections.length - 1);

      if (targetIndex !== currentIndex) {
        isSectionScrollLocked.current = true;

        lenis.scrollTo(sections[targetIndex], {
          duration: 0.85,
          offset: 0,
          lock: true,
          force: true,
          easing: sectionEase,
          onComplete: () => {
            window.setTimeout(() => {
              isSectionScrollLocked.current = false;
            }, 500);
          },
        });
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
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
      { icon: <HugeiconsIcon size={18} icon={Profile02Icon} />, label: "Experiences", onClick: () => scrollToSection("experiences") },
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
      <section id="contact" className="h-screen w-screen overflow-hidden items-center">
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

