interface SectionDividerProps {
  title?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  accentColor?: "acid" | "cyan" | "plasma";
}

export const SectionDivider = ({
  title,
  subtitle,
  align = "left",
  accentColor = "acid",
}: SectionDividerProps) => {
  const accentMap = {
    acid: "text-acid",
    cyan: "text-cyan",
    plasma: "text-plasma",
  };

  const alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`py-12 ${alignMap[align]}`}>
      {title && (
        <h2 className={`text-4xl font-bold font-display ${accentMap[accentColor]} mb-3`}>
          {title}
        </h2>
      )}
      {subtitle && <p className="text-text-secondary text-lg">{subtitle}</p>}
      <div
        className={`mt-6 h-1 rounded-full ${
          accentColor === "acid"
            ? "bg-gradient-to-r from-acid to-cyan"
            : accentColor === "cyan"
            ? "bg-gradient-to-r from-cyan to-plasma"
            : "bg-gradient-to-r from-plasma to-acid"
        }`}
        style={{
          width: align === "center" ? "60px" : align === "right" ? "60px" : "100%",
          margin: align === "center" ? "0 auto" : align === "right" ? "0 0 0 auto" : "0",
        }}
      ></div>
    </div>
  );
};

export default SectionDivider;
