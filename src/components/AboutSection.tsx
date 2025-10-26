import React from "react";

const styles = {
  section: {
    background: "#f8f9fa",
    padding: "48px 0",
    display: "flex",
    justifyContent: "center",
  } as React.CSSProperties,
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: "40px",
    flexWrap: "wrap" as "wrap",
    padding: "0 24px",
  },
  imageWrapper: {
    flex: "0 0 180px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  } as React.CSSProperties,
  image: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover" as "cover",
    border: "4px solid #e0e0e0",
    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
    background: "#fff",
  } as React.CSSProperties,
  text: {
    flex: "1",
    minWidth: "260px",
  } as React.CSSProperties,
  heading: {
    fontSize: "2rem",
    fontWeight: 600,
    margin: "0 0 16px 0",
    color: "#2d3748",
    letterSpacing: "-0.5px",
  } as React.CSSProperties,
  paragraph: {
    fontSize: "1.13rem",
    lineHeight: 1.7,
    color: "#444",
    margin: 0,
  } as React.CSSProperties,
};

const AboutSection: React.FC = () => (
  <section style={styles.section} id="about">
    <div style={styles.container}>
      <div style={styles.imageWrapper}>
        <img
          src="@@img_profile_photo@@"
          alt="Dental Technician portrait"
          style={styles.image}
        />
      </div>
      <div style={styles.text}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.paragraph}>
          Hello! I’m a passionate dental technician dedicated to crafting high-quality dental restorations and prosthetics. With years of experience in dental technology, I combine precision, artistry, and the latest techniques to help dentists deliver beautiful smiles to their patients. Whether it’s crowns, bridges, veneers, or custom solutions, I take pride in every detail of my work. Let’s create something to smile about!
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;