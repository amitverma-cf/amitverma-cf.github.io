import { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface BentoBoxProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export function BentoBox({ children, className, title, description, icon }: BentoBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: 15 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 95%",
          }
        }
      );
    }
  }, []);

  return (
    <div
      ref={boxRef}
      className={cn(
        "relative overflow-hidden border-b border-white/[0.03] md:border-none p-6 md:p-10 flex flex-col gap-8 group transition-colors duration-700 hover:bg-white/[0.01]",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        {icon && <div className="mb-4 opacity-40 group-hover:opacity-100 transition-opacity duration-700">{icon}</div>}
        {title && (
          <div className="flex flex-col gap-1">
            <h3 className="text-xs uppercase tracking-widest text-white/30 font-medium">{title}</h3>
            {description && <p className="text-sm text-white/50 leading-relaxed max-w-sm">{description}</p>}
          </div>
        )}
      </div>
      <div className="flex-1 min-h-0">{children}</div>
    </div>
  );
}
