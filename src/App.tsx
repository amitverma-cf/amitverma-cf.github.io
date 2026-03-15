import SplitText from "@/components/SplitText";
import ShapeGrid from "@/components/ShapeGrid";
import { BentoBox } from "@/components/BentoBox";
import Grainient from "@/components/Grainient";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FolderCodeIcon,
  GithubIcon,
  Linkedin01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";

export default function App() {
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

  const experience = [
    {
      role: "Founding Engineer",
      company: "YUDI AI",
      date: "2025",
      summary: "Orchestrated EchoMimic models on Google Cloud A100 GPUs and integrated Gemini 2.5."
    },
    {
      role: "Software Intern",
      company: "FacePe",
      date: "2025",
      summary: "Engineered biometric payment gateways with FaceIO and Firebase."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#e5e5e5] selection:bg-white selection:text-black overflow-x-hidden p-4 md:p-8 font-geist antialiased">
      
      {/* BACKGROUND GRAINIENT */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <Grainient 
          color1="#10277d"
          color2="#130014"
          color3="#136062"
          timeSpeed={0.15}
          grainAmount={0.3}
          contrast={1.2}
          zoom={0.8}
        />
      </div>

      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 relative z-10 w-full auto-rows-[minmax(180px,auto)]">
        
        {/* HERO BENTO */}
        <BentoBox className="md:col-span-8 md:row-span-2 min-h-[420px] md:min-h-[500px] flex flex-col justify-end p-6 md:p-12 overflow-hidden border-white/[0.05]">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <ShapeGrid shape="circle" borderColor="#ffffff" speed={0.2} squareSize={40} />
          </div>
          <div className="relative z-20 space-y-4 md:space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-[8vw] font-black tracking-tighter leading-[0.8] text-white">
              <SplitText 
                text="AMIT VERMA" 
                className="inline-block"
                delay={30}
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
              />
            </h1>
            <p className="text-lg md:text-2xl font-light text-white/50 max-w-xl leading-snug md:ml-30">
              Systems engineer specializing in high-performance rendering and distributed data stores.
            </p>
          </div>
        </BentoBox>

        {/* CONNECT BENTO */}
        <BentoBox className="md:col-span-4 p-6 md:p-8 flex flex-col justify-between border-white/[0.05]" title="Connect">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
            <a href="https://github.com/amitverma-cf" className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/10">
              <div className="flex items-center gap-3">
                <HugeiconsIcon icon={GithubIcon} className="w-5 h-5 opacity-40 group-hover:opacity-100" />
                <span className="text-sm font-medium">GitHub</span>
              </div>
              <span className="text-[10px] opacity-20 group-hover:opacity-100">→</span>
            </a>
            <a href="https://linkedin.com/in/amve-me" className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/10">
              <div className="flex items-center gap-3">
                <HugeiconsIcon icon={Linkedin01Icon} className="w-5 h-5 opacity-40 group-hover:opacity-100 text-blue-400" />
                <span className="text-sm font-medium">LinkedIn</span>
              </div>
              <span className="text-[10px] opacity-20 group-hover:opacity-100">→</span>
            </a>
            <a href="mailto:ava.amitverma@gmail.com" className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/10 sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-3">
                <HugeiconsIcon icon={Mail01Icon} className="w-5 h-5 opacity-40 group-hover:opacity-100 text-purple-400" />
                <span className="text-sm font-medium">Email</span>
              </div>
              <span className="text-[10px] opacity-20 group-hover:opacity-100">→</span>
            </a>
          </div>
        </BentoBox>

        {/* PROJECTS BENTO */}
        <BentoBox className="md:col-span-8 p-6 md:p-10 border-white/[0.05]" title="Selected Projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {projects.map((p, i) => (
              <a key={i} href={p.github} target="_blank" rel="noopener" className="group p-6 rounded-3xl bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/10 flex flex-col justify-between h-52 sm:h-56">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-lg leading-tight group-hover:italic transition-all duration-500">{p.title}</h3>
                    <HugeiconsIcon icon={FolderCodeIcon} className="w-4 h-4 opacity-20 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed line-clamp-4 group-hover:text-white/60 transition-colors">{p.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  {p.badges.map(b => (
                    <span key={b} className="text-[9px] uppercase tracking-tighter bg-white/5 px-2 py-0.5 rounded-full text-white/30 group-hover:text-white/50 group-hover:bg-white/10 transition-colors">{b}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </BentoBox>

        {/* EXPERIENCE BENTO */}
        <BentoBox className="md:col-span-4 p-6 md:p-8 border-white/[0.05]" title="Experience">
          <div className="space-y-10 mt-6 relative before:content-[''] before:absolute before:left-[3px] before:top-4 before:bottom-0 before:w-px before:bg-white/5">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-7 group">
                <div className="absolute left-0 top-1.5 w-[7px] h-[7px] bg-white/30 border border-[#050505] rounded-full group-hover:scale-150 group-hover:bg-white/60 transition-all duration-500 z-10" />
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-sm md:text-base font-medium text-white/90">{exp.role}</h4>
                  <span className="text-[9px] font-mono text-white/20 whitespace-nowrap ml-2">{exp.date}</span>
                </div>
                <p className="text-[10px] text-white/30 uppercase mb-3 tracking-[0.15em] font-semibold">{exp.company}</p>
                <p className="text-xs text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors">{exp.summary}</p>
              </div>
            ))}
          </div>
        </BentoBox>

        {/* SKILLS BENTO (WIDE) */}
        <BentoBox className="md:col-span-12 p-6 md:p-10 border-white/[0.05]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="space-y-3">
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-white/20 font-bold border-b border-white/5 pb-2">Languages</h4>
              <p className="text-sm text-white/50 font-light flex flex-wrap gap-x-2">
                <span>C++</span> <span className="text-white/10">•</span> 
                <span>Python</span> <span className="text-white/10">•</span> 
                <span>TS</span> <span className="text-white/10">•</span> 
                <span>SQL</span>
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-white/20 font-bold border-b border-white/5 pb-2">Specialization</h4>
              <p className="text-sm text-white/50 font-light">distributed-systems, GPU-rendering, cloud-infra</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-white/20 font-bold border-b border-white/5 pb-2">Infrastructure</h4>
              <p className="text-sm text-white/50 font-light flex flex-wrap gap-x-2">
                <span>GCP</span> <span className="text-white/10">•</span> 
                <span>Firebase</span> <span className="text-white/10">•</span> 
                <span>Linux</span>
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-white/20 font-bold border-b border-white/5 pb-2">Tooling</h4>
              <p className="text-sm text-white/50 font-light flex flex-wrap gap-x-2">
                <span>Git</span> <span className="text-white/10">•</span> 
                <span>CMake</span> <span className="text-white/10">•</span> 
                <span>Docker</span> <span className="text-white/10">•</span> 
                <span>GDB</span>
              </p>
            </div>
          </div>
        </BentoBox>

      </main>
      <footer className="py-24 max-w-7xl mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-center gap-12 opacity-20 text-[10px] tracking-[0.5em] uppercase font-medium relative z-10">
        <span>© AMIT VERMA / {new Date().getFullYear()}</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors underline underline-offset-4">Top</a>
          <a href="https://amve.me" className="hover:text-white transition-colors underline underline-offset-4">Origin</a>
        </div>
      </footer>
    </div>
  );
}

