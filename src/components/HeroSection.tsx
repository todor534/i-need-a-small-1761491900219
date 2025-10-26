import React from "react";

const heroSectionStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "60vh",
  background: "linear-gradient(120deg, #f7fafc 0%, #e3e7ed 100%)",
  padding: "48px 16px 32px 16px",
  textAlign: "center",
};

const avatarStyles: React.CSSProperties = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  objectFit: "cover",
  boxShadow: "0 4px 16px rgba(0,0,0,0.09)",
  marginBottom: "24px",
  border: "4px solid #fff",
  background: "#e1e6ed",
};

const nameStyles: React.CSSProperties = {
  fontSize: "2.2rem",
  fontWeight: 700,
  color: "#1a202c",
  marginBottom: "8px",
  letterSpacing: "0.02em",
};

const titleStyles: React.CSSProperties = {
  fontSize: "1.2rem",
  color: "#4a5568",
  fontWeight: 500,
  marginBottom: "18px",
};

const introStyles: React.CSSProperties = {
  fontSize: "1.08rem",
  color: "#374151",
  maxWidth: "420px",
  margin: "0 auto 26px auto",
  lineHeight: 1.6,
};

const ctaButtonStyles: React.CSSProperties = {
  display: "inline-block",
  background: "#2b6cb0",
  color: "#fff",
  fontWeight: 600,
  fontSize: "1rem",
  padding: "12px 32px",
  border: "none",
  borderRadius: "24px",
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(44, 62, 80, 0.08)",
  transition: "background 0.2s",
  textDecoration: "none",
  marginTop: "6px",
};

const ctaButtonHoverStyles: React.CSSProperties = {
  background: "#205080",
};

export const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section style={heroSectionStyles}>
      <img
        src="@@img_avatar_portrait@@"
        alt="Dental Technician Portrait"
        style={avatarStyles}
        loading="lazy"
      />
      <h1 style={nameStyles}>Alex Novak</h1>
      <div style={titleStyles}>Dental Technician</div>
      <p style={introStyles}>
        Dedicated to crafting beautiful, functional dental restorations. With a passion for precision and aesthetics, I help dentists deliver confident smiles to their patients.
      </p>
      <a
        href="#contact"
        style={isHovered ? { ...ctaButtonStyles, ...ctaButtonHoverStyles } : ctaButtonStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Contact Me
      </a>
    </section>
  );
};

export default HeroSection;