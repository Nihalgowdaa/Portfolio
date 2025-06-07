import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const onScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        if (top >= offset && top < offset + height) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <h2 className="logo">Nagarjun H R</h2>
        <ul className="nav-links">
          {["home", "about", "skills", "projects", "certifications", "contact"].map((id) => (
            <li
              key={id}
              className={activeSection === id ? "active" : ""}
              onClick={() => scrollTo(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </li>
          ))}
        </ul>
      </nav>

      <header id="home" className="hero-section">
        <h1>Hi, I'm <span className="gradient-text">Nagarjun H R</span></h1>
        <p className="tagline">Software Developer | ML Enthusiast | Problem Solver</p>
      </header>

      <section id="about" className="section">
        <h2>Career Objective</h2>
        <p>
          Aspiring Software Developer with strong problem-solving skills and a
          passion for coding. Seeking to contribute technical expertise in
          software development, data science, and machine learning within a
          progressive organization.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <ul>
          <li>Programming: Python, C, C++</li>
          <li>Data Structures and Algorithms</li>
          <li>Basics of Machine Learning</li>
          <li>Problem Solving & Logical Thinking</li>
        </ul>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul>
          <li><strong>Contact Base Management System:</strong> C-based console app</li>
          <li><strong>Dog Emotion Detection:</strong> Deep learning model</li>
          <li><strong>Flight Delay Detection:</strong> ML-based prediction system</li>
        </ul>
      </section>

      <section id="certifications" className="section">
        <h2>Certifications</h2>
        <ul>
          <li>Python Programming – Udemy</li>
          <li>Soft Skills – NPTEL</li>
          <li>Data Science & ML – Udemy (Ongoing)</li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>📞 6360552040</p>
        <p>📧 nihalnagarjun08@gmail.com</p>
        <p>📍 Hassan, Karnataka</p>
      </section>

      <footer className="footer">
        <p>© 2025 Nagarjun H R | Built with 💙 in React</p>
      </footer>
    </div>
  );
}

export default App;
