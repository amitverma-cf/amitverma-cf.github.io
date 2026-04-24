import { ParticleTypography } from "@/components/ParticleTypography";
import Dock from "@/components/Dock";
import { HugeiconsIcon } from "@hugeicons/react";
import { Contact01Icon, Folder02Icon, Home02Icon, PrescriptionsIcon, Profile02Icon } from "@hugeicons/core-free-icons";
import InfiniteMenu from "@/components/InfiniteMenu";
import AboutTimeline from "@/About";
import { Hero } from "@/Hero";
import { Contact } from "@/Contact";
import { projectItems } from "@/config";

export default function App() {
  const navItems = [
    { icon: <HugeiconsIcon size={18} icon={Home02Icon} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <HugeiconsIcon size={18} icon={Profile02Icon} />, label: 'About', onClick: () => alert('About!') },
    { icon: <HugeiconsIcon size={18} icon={Folder02Icon} />, label: 'Projects', onClick: () => alert('Projects!') },
    { icon: <HugeiconsIcon size={18} icon={Contact01Icon} />, label: 'Contact', onClick: () => alert('Contact!') },
    { className: "bg-blue-700 text-white", icon: <HugeiconsIcon size={18} icon={PrescriptionsIcon} />, label: 'Resume', onClick: () => window.open('https://drive.google.com/file/d/15scnJF48Rr-N_fvduVD6UVkC1d4nQA3E/view?usp=sharing', '_blank') },
  ];

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
      <div className="h-screen w-screen overflow-hidden"><Hero /></div>
      <div className="h-screen w-screen overflow-hidden"><AboutTimeline /></div>
      <div className="h-screen w-screen overflow-hidden">
        <InfiniteMenu items={projectItems} scale={1} />
      </div>
      <div className="h-screen w-screen overflow-hidden"><Contact /></div>
      <div className="h-100 w-screen overflow-hidden">
        <ParticleTypography
          text="AMIT VERMA"
          fontSize={400}
          particleDensity={5}
          dispersionStrength={20}
        />
      </div>
    </div>
  );
}

