<script>
  const projects = [
    {
      title: "UMS Student Academic Companion System (UMSSACS)",
      period: "2024 – 2025",
      description:
        "Web-based platform to help UMS students manage timetables, track CGPA, find events and connect with peers using ML-based study partner matching.",
      tech: "Laravel, PHP, MySQL, HTML, CSS, Bootstrap, JavaScript, Python, DigitalOcean"
    },
    {
      title: "JomDining",
      period: "2024",
      description:
        "Android-based Point of Sales system for restaurant operations. Led backend development, database design, and integration with the frontend.",
      tech: "Kotlin, SQLite, Android Studio"
    },
    {
      title: "Electroholics",
      period: "2023 – 2024",
      description:
        "Localised e-commerce web application focused on computer hardware retail. Coordinated team tasks and oversaw development progress.",
      tech: "HTML, CSS, JavaScript, PHP, MySQL"
    }
  ];

  const awards = [
    {
      title: "First Place — Borneo AI Hackathon",
      year: "2025",
      details:
        "FoodXcel: AI-assisted FSSC 22000 compliance platform for food manufacturers. React frontend on Vercel with Copilot Studio chatbot integration."
    },
    {
      title: "Best Overall Award — TARUMT TechTrek: Innovators Pitch Challenge",
      year: "2024",
      details:
        "JomHarvest: IoT-supported agri-utility and farm-management concept focused on food stability in Sabah, aligned with UNSDG 9."
    },
    {
      title: "Technical Solution Award — MYStartup X Elevate 30-Hour Challenge",
      year: "2023",
      details:
        "JomGarden: IoT-based home gardening prototype using ESP32 and Blynk for wireless control and live monitoring."
    }
  ];

  const publications = [
    {
      title: "Revolutionizing Airline Customer Satisfaction Analysis with Machine Learning Techniques",
      venue: "IRICT 2023 (2024)",
      link: "https://doi.org/10.1007/978-3-031-59707-7_13"
    },
    {
      title: "An Investigation of the Effect of Weather on Hand-Foot-Mouth Disease Incidence in Sarawak",
      venue: "ICACSE 2023 (2024)",
      link: "https://doi.org/10.1007/978-981-97-2977-7_25"
    }
  ];
</script>

<main>
  <!-- NAVBAR -->
  <header class="nav">
    <div class="nav-left">
      <span class="logo">CHIEW CHENG YI</span>
    </div>
    <nav class="nav-right">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#awards">Awards</a>
      <a href="#publications">Publications</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <!-- HERO -->
  <section class="hero">
    <h1>Software Engineering Graduate</h1>
    <p>
      I’m a fresh Software Engineering graduate from Universiti Malaysia Sabah (UMS) with hands-on
      experience in full-stack development, hackathons, and research projects. I enjoy building
      clean, scalable systems and products that create real user impact.
    </p>
    <div class="hero-links">
      <a class="btn ghost" href="mailto:chiewccy1@gmail.com">Email</a>
      <a class="btn ghost" href="https://github.com/ccy7701" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a class="btn ghost" href="https://www.linkedin.com/in/chiew-cheng-yi-165abb222" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
    <div class="hero-links secondary">
      <a class="btn solid" href="/Resume_17112025.pdf" download>Download Résumé</a>
      <a class="btn solid" href="/CV_17112025.pdf" download>Download CV</a>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" class="section">
    <h2>About</h2>
    <p>
      I’m based in Kota Kinabalu, Sabah, and recently completed my Bachelor of Computer Science
      (Software Engineering) at Universiti Malaysia Sabah. My interests span full-stack web
      development, AI-assisted tools, and IoT solutions that solve practical, real-world problems.
    </p>
  </section>

  <!-- PROJECTS -->
  <section id="projects" class="section">
    <h2>Projects</h2>
    <div class="cards">
      {#each projects as project}
        <article class="card">
          <h3>{project.title}</h3>
          <p class="muted">{project.period}</p>
          <p>{project.description}</p>
          <p class="tech">{project.tech}</p>
        </article>
      {/each}
    </div>
  </section>

  <!-- AWARDS -->
  <section id="awards" class="section">
    <h2>Awards & Competitions</h2>
    <div class="cards">
      {#each awards as award}
        <article class="card">
          <h3>{award.title}</h3>
          <p class="muted">{award.year}</p>
          <p>{award.details}</p>
        </article>
      {/each}
    </div>
  </section>

  <!-- PUBLICATIONS -->
  <section id="publications" class="section">
    <h2>Publications</h2>
    <ul class="pub-list">
      {#each publications as pub}
        <li>
          <strong>{pub.title}</strong><br />
          <span class="muted">{pub.venue}</span><br />
          <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.link}</a>
        </li>
      {/each}
    </ul>
  </section>

  <!-- SKILLS -->
  <section id="skills" class="section">
    <h2>Skills</h2>
    <div class="skills-grid">
      <div>
        <h3>Programming</h3>
        <p>HTML, CSS, JavaScript, PHP, Python, Java, Kotlin, C, C++</p>
      </div>
      <div>
        <h3>Frameworks &amp; Tools</h3>
        <p>Laravel, Bootstrap, WordPress, Jupyter Notebook</p>
      </div>
      <div>
        <h3>Databases &amp; Deployment</h3>
        <p>MySQL, SQLite, Apache, XAMPP, DigitalOcean, Git, GitHub, Trello</p>
      </div>
      <div>
        <h3>Design &amp; Productivity</h3>
        <p>Figma, Canva, DaVinci Resolve, MS Office, Google Workspace</p>
      </div>
      <div>
        <h3>Languages</h3>
        <p>English (fluent), Bahasa Malaysia (fluent), Mandarin (proficient)</p>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="section">
    <h2>Contact</h2>
    <p>If you’d like to connect, collaborate, or just say hi:</p>
    <ul>
      <li>Email: <a href="mailto:chiewccy1@gmail.com">chiewccy1@gmail.com</a></li>
      <li>GitHub: <a href="https://github.com/ccy7701" target="_blank" rel="noopener noreferrer">github.com/ccy7701</a></li>
      <li>LinkedIn: <a href="https://www.linkedin.com/in/chiew-cheng-yi-165abb222" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
    </ul>
  </section>

  <footer class="footer">
    <small>© {new Date().getFullYear()} Chiew Cheng Yi</small>
  </footer>
</main>

<style>
  :global(body) {
    margin: 0;
    background: #15110f; /* dark earth */
    color: #f4eee6;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  main {
    max-width: 960px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    gap: 1rem;
    font-size: 0.9rem;
  }

  .logo {
    font-weight: 700;
    letter-spacing: 0.12em;
    font-size: 0.9rem;
  }

  .nav-right {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .nav-right a {
    text-decoration: none;
    color: #e0d7c7;
    opacity: 0.85;
  }

  .nav-right a:hover {
    opacity: 1;
    text-decoration: underline;
  }

  .hero {
    margin-bottom: 2.5rem;
  }

  .hero h1 {
    font-size: 2.3rem;
    margin-bottom: 0.75rem;
  }

  .hero p {
    max-width: 40rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
    color: #d8cebf;
  }

  .hero-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .hero-links.secondary {
    margin-top: 0.75rem;
  }

  .btn {
    font-size: 0.9rem;
    padding: 0.5rem 0.95rem;
    border-radius: 999px;
    text-decoration: none;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .btn.ghost {
    border: 1px solid rgba(244, 238, 230, 0.3);
    color: #f4eee6;
    background: transparent;
  }

  .btn.ghost:hover {
    border-color: #f4eee6;
    background: rgba(244, 238, 230, 0.06);
  }

  .btn.solid {
    border: 1px solid #c78b4b;
    background: #c78b4b;
    color: #1a130f;
  }

  .btn.solid:hover {
    background: #d69a57;
    border-color: #d69a57;
  }

  .section {
    margin-top: 2.5rem;
  }

  .section h2 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .section p {
    line-height: 1.6;
  }

  .cards {
    display: grid;
    gap: 1rem;
  }

  .card {
    border-radius: 0.75rem;
    padding: 1rem 1.25rem;
    background: #221813;
    border: 1px solid rgba(244, 238, 230, 0.08);
  }

  .card h3 {
    margin: 0 0 0.3rem;
    font-size: 1.05rem;
  }

  .muted {
    color: #aa9f92;
    font-size: 0.85rem;
    margin-bottom: 0.4rem;
  }

  .tech {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color: #c4b7a5;
  }

  .pub-list {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 1rem;
  }

  .pub-list a {
    font-size: 0.85rem;
    color: #d69a57;
  }

  .pub-list a:hover {
    text-decoration: underline;
  }

  .skills-grid {
    display: grid;
    gap: 1rem;
  }

  .skills-grid h3 {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }

  #contact ul {
    list-style: none;
    padding: 0;
  }

  #contact li {
    margin-bottom: 0.3rem;
  }

  #contact a {
    color: #d69a57;
    text-decoration: none;
  }

  #contact a:hover {
    text-decoration: underline;
  }

  .footer {
    margin-top: 3rem;
    text-align: center;
    color: #8e8275;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    .cards {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .skills-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
