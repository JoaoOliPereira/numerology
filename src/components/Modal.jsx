import React from "react";

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{
        background: "#fff", padding: 24, borderRadius: 8, maxWidth: 600, width: "90%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)", position: "relative"
      }}>
        <button onClick={onClose} style={{ position: "absolute", top: 8, right: 8 }}>X</button>
        <h2>{title}</h2>
        <div style={{ marginTop: 12 }}>{children}</div>
      </div>
    </div>
  );
}
