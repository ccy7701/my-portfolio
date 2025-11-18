<!-- src/routes/writing/+page.svelte -->
<script>
  // Automatically import all post metadata from child routes
  const modules = import.meta.glob('./*/+page.js', { eager: true });

  const posts = Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path.split('/')[1];  // folder name = slug

      return {
        slug,
        title: mod.load().meta.title,
        subtitle: mod.load().meta.subtitle,
        date: mod.load().meta.date
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // newest first
</script>

<section class="section section-header">
  <div class="section-header-inner">
    <h2>Writing</h2>
    <p class="section-subtitle">
      I use writing as an outlet to think aloud, record lessons from projects or life transitions, and refine the way I understand the world
    </p>
  </div>

  {#if posts.length === 0}
    <p class="muted">No posts published yet. Check back soon.</p>
  {:else}
    <div class="cards">
      {#each posts as post}
        <a href={`/writing/${post.slug}`} class="writing-card">
          <div class="writing-header">
            <h3 class="writing-title">{post.title}</h3>
            <span class="writing-date">{post.date}</span>
          </div>

          <p class="writing-subtitle">{post.subtitle}</p>
        </a>
        <br>
      {/each}
    </div>
  {/if}
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

  .writing-card {
    display: block;
    padding: 1.25rem 1.5rem;
    border-radius: 12px;
    background: var(--card);
    border: 1px solid var(--card-border);
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .writing-card::before {
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

  .writing-card:hover {
    border-color: rgba(59, 130, 246, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  .writing-card:hover::before {
    height: 100%;
  }

  /* ---- Top: Title (left) | Date (right) ---- */
  .writing-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.4rem;
  }

  .writing-title {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text);
  }

  .writing-date {
    color: var(--text-muted);
    font-size: 0.85rem;
  }

  /* ---- Description below, left-aligned ---- */
  .writing-subtitle {
    margin: 0;
    margin-top: 0.2rem;
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.45;
  }

  @media (max-width: 900px) {
    .section-header-inner {
      margin: 0 auto 3.0rem;
    }
  }
</style>
