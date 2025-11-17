<!-- src/routes/projects/+page.svelte -->
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
</script>

<section class="section">
  <h2>Projects</h2>
  <p class="section-intro">
    Selected projects from my degree and independent work, focused on full-stack web development
    and Android applications.
  </p>
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
