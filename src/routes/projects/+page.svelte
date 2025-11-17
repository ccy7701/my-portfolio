<!-- src/routes/projects/+page.svelte -->
<script>
  const modules = import.meta.glob('./*/+page.js', { eager: true });

  const projects = Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path.split('/')[1];
      const data = mod.load().project;

      return {
        slug,
        order: data.order,
        title: data.title,
        period: data.period,
        description: data.description,
        thumbnail: data.images[0]
      };
    })
    .sort((a, b) => a.order - b.order);
</script>

<section class="section section-header">
  <div class="section-header-inner">
    <h2>Projects</h2>
    <p class="section-subtitle">
      Technical projects I’ve undertaken across full-stack web development, mobile applications, and applied software engineering
    </p>
  </div>
</section>

<section class="projects-list">
  {#each projects as p}
    <a class="project-card" href={`/projects/${p.slug}`}>
      <div class="project-card-text">
        <h3>{p.title}</h3>
        <p class="period">{p.period}</p>
        <br>
        <p>{p.description}</p>
      </div>

      <img src={p.thumbnail} alt={p.title} class="project-thumb" />
    </a>
  {/each}
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

   .projects-list {
    display: flex;
    flex-direction: column;
    gap: 1.35rem;
  }

  .project-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--card);
    border: 1px solid var(--card-border);
    padding: 1.5rem 1.75rem;
    border-radius: 12px;
    text-decoration: none;
    color: var(--text);
    gap: 2rem;
  }

  .project-card:hover {
    border-color: var(--accent-light);
    transform: translateY(-2px);
    transition: 0.15s ease;
  }

  .project-card-text {
    flex: 1;
    padding-right: 1.25rem;
  }

  .project-card-text h3 {
    margin: 0 0 0.3rem;
  }

  .project-card-text p {
    margin: 0.25rem 0;
  }

  .period {
    margin: 0.15rem 0 0.5rem;
    font-size: 1rem;
    color: var(--text-muted);
  }

  .project-thumb {
    width: 300px;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
  }
</style>
