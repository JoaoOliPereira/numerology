import React from "react";

export default function Modal({ open, onClose, title, content, extraButton }) {
  if (!open) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 1000
    }}>
      <div style={{
        background: "#fff", padding: 24, borderRadius: 16, maxWidth: 600, width: "90%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)", position: "relative"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            backgroundColor: "#6c63ff",
            border: "2px solidrgb(186, 183, 248)",
            color: "white",
            borderRadius: "50%",
            width: 32,
            height: 32,
            fontSize: 16,
            fontWeight: "bold",
            cursor: "pointer",
            lineHeight: "28px",
            textAlign: "center"
          }}
          title="Fechar"
        >
          ×
        </button>
        <h2 style={{ fontSize: "1.5rem", marginBottom: 12 }}>{title}</h2>
        <div style={{ whiteSpace: "pre-line" }}>{content}</div>
        {extraButton && (
          <button
            onClick={extraButton.onClick}
            style={{
              marginTop: "1rem",
              backgroundColor: "green",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: 6,
              cursor: "pointer"
            }}
          >
            {extraButton.label}
          </button>
        )}
      </div>
    </div>
  );
}