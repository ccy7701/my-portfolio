<script>
  export let data;
</script>

<div class="back-link-container">
  <a href="/projects" class="back-link">← Back to Projects</a>
</div>

<article class="project-article">
  <h1>{data.project.title}</h1>
  <p class="muted">{data.project.period}</p>
  <p>{data.project.description}</p>

  <div class="project-images">
    {#each data.project.images as img}
      <img src={img} alt={data.project.title} />
    {/each}
  </div>
</article>

<style>
  .back-link-container {
    margin-bottom: 1.5em;
    display: block;
  }

  .back-link {
    text-decoration: none;
    color: var(--text);
    font-weight: 500;
    font-size: 0.95em;
    transition: color 0.2s ease;
  }

  .back-link:hover {
    color: var(--accent-light);
  }


  .project-images img {
    max-width: 100%;
    border-radius: 12px;
    margin-top: 1.5rem;
  }
</style>
