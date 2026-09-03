import React from "react";

interface FlavorBadgesProps {
  notes: string[];
}

export const FlavorBadges: React.FC<FlavorBadgesProps> = ({ notes }) => {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      {notes.map((note, index) => (
        <span
          key={index}
          style={{
            background: "rgba(197, 160, 89, 0.12)",
            border: "1px solid var(--border-gold)",
            color: "var(--color-gold-light)",
            padding: "0.4rem 0.9rem",
            borderRadius: "20px",
            fontSize: "0.85rem",
            fontWeight: 500,
          }}
        >
          {note}
        </span>
      ))}
    </div>
  );
};
