import React, { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal = ({ 
  children, 
  delay = 0, 
  duration = 700,
  className = "" 
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: boolean;
}

export const PageLayout = ({ 
  children, 
  maxWidth = "xl",
  padding = true 
}: LayoutProps) => {
  const maxWidthMap = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-5xl",
    xl: "max-w-7xl",
    "2xl": "max-w-7xl",
    full: "w-full",
  };

  return (
    <section className={`${maxWidthMap[maxWidth]} mx-auto ${padding ? "px-6 py-16" : ""} relative z-10`}>
      {children}
    </section>
  );
};

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
  glow?: "acid" | "cyan" | "plasma" | "none";
}

export const GlassContainer = ({ 
  children, 
  className = "",
  glow = "none"
}: GlassContainerProps) => {
  return (
    <div className={`glass rounded-2xl p-8 ${className}`}>
      {children}
    </div>
  );
};

export default { ScrollReveal, PageLayout, GlassContainer };
