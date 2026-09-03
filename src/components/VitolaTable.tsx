import React from "react";
import { Vitola } from "../types/cigar";

interface VitolaTableProps {
  vitolas: Vitola[];
  packaging: string;
}

export const VitolaTable: React.FC<VitolaTableProps> = ({ vitolas, packaging }) => {
  return (
    <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "12px" }}>
      <h3 className="gold-gradient-text" style={{ marginTop: 0, marginBottom: "1rem" }}>
        Vitolas y Formatos
      </h3>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
            fontSize: "0.95rem",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border-gold)" }}>
              <th style={{ padding: "0.75rem", color: "var(--color-gold-light)" }}>Vitola</th>
              <th style={{ padding: "0.75rem", color: "var(--color-gold-light)" }}>Dimensiones</th>
            </tr>
          </thead>
          <tbody>
            {vitolas.map((v, i) => (
              <tr
                key={i}
                style={{
                  borderBottom: i < vitolas.length - 1 ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
                }}
              >
                <td style={{ padding: "0.75rem", fontWeight: 600, color: "#fff" }}>{v.name}</td>
                <td style={{ padding: "0.75rem", color: "#d0c0b0" }}>{v.dimension}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          marginTop: "1.25rem",
          paddingTop: "1rem",
          borderTop: "1px dashed rgba(197, 160, 89, 0.3)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.88rem",
          color: "#a0a0a0",
        }}
      >
        <span>Empaques disponibles:</span>
        <span style={{ color: "var(--color-gold-light)", fontWeight: 600 }}>
          {packaging} cigarros por caja / estuche
        </span>
      </div>
    </div>
  );
};
