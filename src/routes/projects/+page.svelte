<!-- src/routes/projects/+page.svelte -->
<script>
  import { lightboxImage, showLightbox } from "../../lib/lightbox";
  
  let visible = false;
  let image = "";

  const projects = [
    {
      title: "UMS Student Academic Companion System (UMSSACS)",
      period: "2024 – 2025",
      description:
        "A full-stack academic companion platform that helps UMS students organize timetables, track CGPA, discover events, and connect with peers through ML-assisted study partner matching.",
      tech: "Laravel, PHP, MySQL, HTML, CSS, Bootstrap, JavaScript, Python, DigitalOcean",
      image: "/placeholder.jpg"
    },
    {
      title: "JomDining (Point of Sales App)",
      period: "2024",
      description:
        "Android-based Point of Sales system for restaurant operations. Responsible for backend logic, database schema design, and app–database integration.",
      tech: "Kotlin, SQLite, Android Studio",
      image: "/placeholder.jpg"
    },
    {
      title: "Electroholics (E-Commerce Web App)",
      period: "2023 – 2024",
      description:
        "Localized e-commerce platform targeted toward computer hardware retail. Oversaw task coordination, UI development, and backend integration.",
      tech: "HTML, CSS, JavaScript, PHP, MySQL",
      image: "/placeholder.jpg"
    }
  ];
</script>

<section class="section">
  <h2>Projects</h2>
  <p class="section-intro">
    Selected work across full-stack development and mobile applications.
  </p>

  <div class="projects-list">
    {#each projects as project}
      <article class="project-row">
        <div class="project-text">
          <h3>{project.title}</h3>
          <p class="muted">{project.period}</p>
          <p>{project.description}</p>
          <p class="tech">{project.tech}</p>
        </div>

        <img
          class="project-image"
          src={project.image}
          alt={project.title}
          on:click={() => {
            lightboxImage.set(project.image);
            showLightbox.set(true);
          }}
        />
      </article>
    {/each}
  </div>
</section>

<style>
  /* --- LAYOUT FIXES --- */
  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1.5rem;
  }

  .project-row {
    display: flex;
    align-items: stretch;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 0.75rem;
    padding: 1.25rem 1.25rem;
    gap: 1.5rem;
  }

  .project-text {
    flex: 1;
  }

  .project-image {
    width: 340px;           /* fills right side proportionally */
    height: auto;
    max-height: 200px;
    object-fit: cover;
    border-radius: 0.5rem;
    cursor: zoom-in;
    flex-shrink: 0;
    transition: transform 0.25s ease;
  }

  .project-row:hover .project-image {
    transform: scale(1.03);
  }

  /* Responsive */
  @media (max-width: 750px) {
    .project-row {
      flex-direction: column;
    }
    .project-image {
      width: 100%;
      max-height: 240px;
    }
  }
</style>
