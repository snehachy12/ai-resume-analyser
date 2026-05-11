import React from "react";

interface ProfessionalCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "acid" | "cyan" | "plasma" | "none";
}

const ProfessionalCard = ({ 
  children, 
  className = "", 
  hover = true,
  glow = "none"
}: ProfessionalCardProps) => {
  const glowClasses = {
    acid: "hover:border-acid/50 hover:shadow-[0_0_20px_rgba(223,255,0,0.1)]",
    cyan: "hover:border-cyan/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)]",
    plasma: "hover:border-plasma/50 hover:shadow-[0_0_20px_rgba(191,90,242,0.1)]",
    none: ""
  };

  return (
    <div
      className={`
        rounded-xl border border-smoke bg-carbon/50 backdrop-blur-sm
        ${hover ? "transition-all duration-300 hover:scale-105" : ""}
        ${glow !== "none" ? glowClasses[glow] : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ProfessionalCard;
