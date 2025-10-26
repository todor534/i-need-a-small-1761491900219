import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WorkGallery from "./components/WorkGallery";
import ContactSection from "./components/ContactSection";

const styles: { [key: string]: React.CSSProperties } = {
  app: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    background: "#f8fafb",
    color: "#25313a",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "0 1.5rem",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 0 1rem 0",
  },
  navBrand: {
    fontWeight: 700,
    fontSize: "1.4rem",
    letterSpacing: "0.02em",
    color: "#1a7fa0",
  },
  navLinks: {
    display: "flex",
    gap: "1.3rem",
  },
  navLink: {
    color: "#25313a",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "1rem",
    transition: "color 0.2s",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    fontSize: "0.98rem",
    color: "#7a8a99",
    margin: "2.5rem 0 1rem 0",
    letterSpacing: "0.01em",
  },
};

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

const App: React.FC = () => (
  <div style={styles.app}>
    <div style={styles.container}>
      <nav style={styles.nav}>
        <span style={styles.navBrand}>Alex Novak · Dental Technician</span>
        <div style={styles.navLinks}>
          <a
            style={styles.navLink}
            onClick={() => scrollToSection("about")}
            tabIndex={0}
          >
            About
          </a>
          <a
            style={styles.navLink}
            onClick={() => scrollToSection("work")}
            tabIndex={0}
          >
            Work
          </a>
          <a
            style={styles.navLink}
            onClick={() => scrollToSection("contact")}
            tabIndex={0}
          >
            Contact
          </a>
        </div>
      </nav>
      <HeroSection />
      <AboutSection />
      <WorkGallery />
      <ContactSection />
      <footer style={styles.footer}>
        &copy; {new Date().getFullYear()} Alex Novak · Dental Technician
      </footer>
    </div>
  </div>
);

export default App;