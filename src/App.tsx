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
  const lenisRef = useRef<Lenis | null>(null);

  const sectionEase = useCallback((t: number) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }, []);

  useGSAP(() => {
    // 1. Initialize Lenis for smooth momentum scrolling
    const lenis = new Lenis({
      duration: 0.8, // Slightly longer for a more cinematic feel
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

    // 2. Scrollytelling: The "Pin and Fade" effect for the Projects section
    const projectTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "center center", // Pin when the section hits the exact center of the screen
        end: "+=300%", // Scroll runway: Hold the pin for 1.5x the viewport height
        pin: true,
        scrub: 1, // 1-second momentum smoothing on the fade
        anticipatePin: 1,
      }
    });

    // Animate the inner wrapper of the projects section
    projectTl.fromTo("#projects .content-wrapper", 
      { opacity: 0, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 0.5 } // Fade In
    )
    .to("#projects .content-wrapper", { opacity: 1, duration: 5 }) // Hold state (user explores the InfiniteMenu)
    .to("#projects .content-wrapper", { opacity: 0, scale: 1.05, duration: 0.5 }); // Fade Out

    // 3. Force layout recalculation after all pins are mapped
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []); // Removed complex dependencies since we aren't tracking dynamic snap arrays anymore

  // 4. Simplified Navigation: Just tell Lenis where to go
  const scrollToSection = useCallback((id: string) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(`#${id}`, {
        duration: 1,
        offset: 0,
        easing: sectionEase,
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
        <ParticleTypography text="Experiences" fontSize={200} particleDensity={5} dispersionStrength={20} />
      </section>
      
      {/* Horizontal pinned timeline */}
      <AboutTimeline />
      
      <section id="projects-title" className="h-screen w-screen overflow-hidden">
        <ParticleTypography text="Projects" fontSize={200} particleDensity={5} dispersionStrength={20} />
      </section>
      
      {/* Scrollytelling Projects Section */}
      <section id="projects" className="h-screen w-screen overflow-hidden flex items-center justify-center bg-black">
        {/* The content-wrapper is crucial here. We animate THIS, not the section itself, to prevent layout breaks when pinned */}
        <div className="content-wrapper w-full h-full flex items-center justify-center will-change-transform">
          <InfiniteMenu items={projectItems} scale={1} />
        </div>
      </section>
      
      <section id="contacts-title" className="h-screen w-screen overflow-hidden">
        <ParticleTypography text="Contacts" fontSize={200} particleDensity={5} dispersionStrength={20} />
      </section>
      
      <section id="contact" className="h-screen w-screen overflow-hidden items-center pt-30">
        <Contact />
        <ParticleTypography text="AMIT VERMA" fontSize={400} particleDensity={5} dispersionStrength={20} />
      </section>
    </div>
  );
}