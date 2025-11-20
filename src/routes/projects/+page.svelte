<!-- src/routes/projects/+page.svelte -->
<script>
  import { onMount } from 'svelte';

  const modules = import.meta.glob('./*/+page.js', { eager: true });
  
  let theme = 'light';

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
        images: data.images
      };
    })
    .sort((a, b) => a.order - b.order);

  function getThumbnail(images) {
    if (!images || images.length === 0) return '';
    
    // Check if project has both lightmode and darkmode logos
    const lightLogo = images.find(img => img.includes('_logo_lightmode'));
    const darkLogo = images.find(img => img.includes('_logo_darkmode'));
    
    if (lightLogo && darkLogo) {
      return theme === 'dark' ? darkLogo : lightLogo;
    }
    
    return images[0];
  }

  onMount(() => {
    const htmlElement = document.documentElement;
    theme = htmlElement.getAttribute('data-theme') || 'light';

    const observer = new MutationObserver(() => {
      theme = htmlElement.getAttribute('data-theme') || 'light';
    });

    observer.observe(htmlElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<section class="section section-header">
  <div class="section-header-inner">
    <h2>Projects (NOT DONE)</h2>
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

      {#key theme}
        <img src={getThumbnail(p.images)} alt={p.title} class="project-thumb" />
      {/key}
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
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background: linear-gradient(180deg, var(--accent), var(--accent-light));
    transition: height 0.3s ease;
    border-radius: 12px 0 0 12px;
  }

  .project-card:hover {
    border-color: rgba(59, 130, 246, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  .project-card:hover::before {
    height: 100%;
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

  @media (max-width: 750px) {
    .project-card {
      flex-direction: column;
    }
    .project-thumb {
      width: 100%;
      max-height: 240px;
    }
  }

  @media (max-width: 900px) {
    .section-header-inner {
      margin: 0 auto 3.0rem;
    }
  }
</style>
