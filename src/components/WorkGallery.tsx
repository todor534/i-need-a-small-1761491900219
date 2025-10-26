import React from "react";

const galleryStyles: React.CSSProperties = {
  padding: "40px 0",
  background: "#f9f9f9",
};

const headingStyles: React.CSSProperties = {
  textAlign: "center",
  fontSize: "2rem",
  fontWeight: 700,
  marginBottom: "24px",
  color: "#333",
  letterSpacing: "1px",
};

const gridStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  maxWidth: "900px",
  margin: "0 auto",
};

const cardStyles: React.CSSProperties = {
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "transform 0.15s",
};

const imgStyles: React.CSSProperties = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  display: "block",
};

const captionStyles: React.CSSProperties = {
  padding: "16px 12px",
  textAlign: "center",
  fontSize: "1rem",
  color: "#444",
};

const works = [
  {
    img: "@@img_dental_crown@@",
    caption: "Custom Porcelain Crown",
  },
  {
    img: "@@img_implant_bridge@@",
    caption: "Implant-Supported Bridge",
  },
  {
    img: "@@img_veneers@@",
    caption: "Aesthetic Veneers",
  },
  {
    img: "@@img_partial_denture@@",
    caption: "Partial Denture",
  },
  {
    img: "@@img_full_denture@@",
    caption: "Full Denture",
  },
  {
    img: "@@img_zirconia_crown@@",
    caption: "Zirconia Crown",
  },
];

const WorkGallery: React.FC = () => (
  <section id="work" style={galleryStyles}>
    <h2 style={headingStyles}>Work Gallery</h2>
    <div style={gridStyles}>
      {works.map((work, idx) => (
        <div key={idx} style={cardStyles}>
          <img
            src={work.img}
            alt={work.caption}
            style={imgStyles}
            loading="lazy"
          />
          <div style={captionStyles}>{work.caption}</div>
        </div>
      ))}
    </div>
  </section>
);

export default WorkGallery;