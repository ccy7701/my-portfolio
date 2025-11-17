<script>
  export let data;
</script>

<a href="/projects" class="back-link">← Back to Projects</a>

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
  .back-link {
    text-decoration: none;
    color: var(--accent);
  }

  .project-images img {
    max-width: 100%;
    border-radius: 12px;
    margin-top: 1.5rem;
  }
</style>
