import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "disabled";
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const sizeMap = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantMap = {
  primary: "bg-acid text-void font-bold hover:bg-lime transition-all duration-200",
  secondary: "bg-graphite border border-smoke text-text-primary hover:border-acid hover:text-acid transition-all duration-200",
  ghost: "border border-acid text-acid hover:bg-acid/10 transition-all duration-200 font-semibold",
  disabled: "bg-graphite text-text-muted cursor-not-allowed opacity-50",
};

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  fullWidth = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-lg
        ${sizeMap[size]}
        ${variantMap[disabled ? "disabled" : variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
