<!-- src/routes/projects/+page.svelte -->
<script>
  import { openLightbox } from "../../lib/lightbox";

  const projects = [
    {
      title: "UMS Student Academic Companion System (UMSSACS)",
      period: "2024 – 2025",
      description:
        "Web-based system that helps students organise timetables, track CGPA, discover events, and connect with peers through ML study partner matching.",
      images: ["/placeholder.jpg"]
    },
    {
      title: "JomDining (Point of Sales App)",
      period: "2024",
      description:
        "Android-based Point of Sales system for restaurant operations. Responsible for backend logic, database schema design, and app–database integration.",
      images: ["/placeholder.jpg"]
    },
    {
      title: "Electroholics (E-Commerce Web App)",
      period: "2023 – 2024",
      description:
        "Localized e-commerce platform targeted toward computer hardware retail. Oversaw task coordination, UI development, and backend integration.",
      images: ["/placeholder.jpg"]
    }
  ];
</script>

<section class="section section-header">
  <div class="section-header-inner">
    <h2>Projects</h2>
    <p class="section-subtitle">
      Technical work I have undertaken covering full-stack web development, mobile applications, and applied software engineering
    </p>
  </div>

  <div class="projects-list">
    {#each projects as project}
      <article class="project-row">
        <div class="project-text">
          <h3 class="project-title">{project.title}</h3>
          <p class="project-subtitle">{project.period}</p>
          <p>{project.description}</p>
        </div>

        <!-- Preview image -->
        <img class="project-image" src={project.images[0]} alt={project.title} />
      </article>
    {/each}
  </div>
</section>

<style>
  .section-header-inner {
    text-align: center;
    max-width: 680px;
    margin: 0 auto 4.0rem;
  }

  .section-header h2 {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-bottom: 0.5rem;
  }

  .section-subtitle {
    font-size: 1.15rem;
    color: var(--text-muted);
    line-height: 1.55;
    max-width: 9000px;
    margin: 0 auto;
  }

  /* --- LAYOUT FIXES --- */
  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1.5rem;
  }

  .project-row {
    display: flex;
    align-items: center;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 0.75rem;
    padding: 1.25rem 1.25rem;
    gap: 1.5rem;
    transition: transform 0.2s ease;
  }

  .project-title {
    font-size: 1.35rem;
    font-weight: 600;
    margin: 0;
  }

  .project-subtitle {
    margin: 0.5rem 0 0.5rem;
    font-size: 1rem;
    color: var(--text-muted);
  }

  .project-text {
    flex: 1;
  }

  .project-image {
    width: 340px;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .project-row:hover {
    transform: scale(1.01);
    cursor: pointer;
    border-color: var(--accent-light);
    background: rgba(0, 0, 0, 0.03);
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
