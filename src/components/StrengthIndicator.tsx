import React from "react";

interface StrengthIndicatorProps {
  strength: 1 | 2 | 3 | 4 | 5;
  label?: string;
}

export const StrengthIndicator: React.FC<StrengthIndicatorProps> = ({
  strength,
  label,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      {label && <span style={{ fontSize: "0.85rem", color: "#a0a0a0" }}>{label}:</span>}
      <div className="strength-dots">
        {([1, 2, 3, 4, 5] as const).map((level) => (
          <span
            key={level}
            className={`strength-dot ${level <= strength ? "filled" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};
