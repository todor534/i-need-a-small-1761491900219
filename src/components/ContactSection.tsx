import React, { useState } from "react";

const styles = {
  section: {
    background: "#f7f7f7",
    padding: "48px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as const,
  },
  container: {
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
    padding: "32px 24px",
    maxWidth: 420,
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    gap: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 600,
    marginBottom: 6,
    color: "#2d3748",
    textAlign: "center" as const,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center" as const,
    marginBottom: 18,
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 16,
  },
  label: {
    fontWeight: 500,
    fontSize: 15,
    marginBottom: 4,
    color: "#333",
  },
  input: {
    border: "1px solid #cbd5e1",
    borderRadius: 6,
    padding: "10px 12px",
    fontSize: 15,
    outline: "none",
    transition: "border 0.2s",
    background: "#fafbfc",
  },
  textarea: {
    border: "1px solid #cbd5e1",
    borderRadius: 6,
    padding: "10px 12px",
    fontSize: 15,
    minHeight: 80,
    resize: "vertical" as const,
    background: "#fafbfc",
  },
  button: {
    background: "#0077b6",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "12px 0",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 10,
    transition: "background 0.2s",
  },
  info: {
    marginTop: 18,
    textAlign: "center" as const,
    color: "#555",
    fontSize: 15,
    lineHeight: 1.5,
  },
  success: {
    color: "#228b22",
    textAlign: "center" as const,
    fontWeight: 500,
    fontSize: 16,
    marginTop: 12,
  },
  error: {
    color: "#d90429",
    textAlign: "center" as const,
    fontWeight: 500,
    fontSize: 16,
    marginTop: 12,
  },
};

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Simulate sending, replace with actual handler if needed
    try {
      await new Promise((res) => setTimeout(res, 900));
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Contact Me</h2>
        <div style={styles.subtitle}>
          Interested in working together or have a question? <br />
          Reach out and I'll get back to you soon.
        </div>
        <form style={styles.form} onSubmit={handleSubmit} autoComplete="off">
          <label style={styles.label} htmlFor="name">
            Name
          </label>
          <input
            style={styles.input}
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            disabled={status === "sending"}
            autoComplete="off"
            placeholder="Your name"
          />
          <label style={styles.label} htmlFor="email">
            Email
          </label>
          <input
            style={styles.input}
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            disabled={status === "sending"}
            autoComplete="off"
            placeholder="you@email.com"
          />
          <label style={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            style={styles.textarea}
            id="message"
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            disabled={status === "sending"}
            placeholder="How can I help you?"
          />
          <button style={styles.button} type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
        {status === "success" && (
          <div style={styles.success}>Thank you! Your message has been sent.</div>
        )}
        {status === "error" && (
          <div style={styles.error}>Oops! Something went wrong. Please try again.</div>
        )}
        <div style={styles.info}>
          <div>
            <strong>Email:</strong> <a href="mailto:dentaltech@email.com" style={{ color: "#0077b6", textDecoration: "none" }}>dentaltech@email.com</a>
          </div>
          <div>
            <strong>Phone:</strong> <a href="tel:+1234567890" style={{ color: "#0077b6", textDecoration: "none" }}>+1 234 567 890</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;