<!-- src/routes/writing/+page.svelte -->
<script>
  const posts = [
    // You can fill these with real posts later, or keep as "coming soon"
    // { title: "On switching from pure science to computer science", status: "Draft" }
  ];
</script>

<section class="section">
  <h2>Writing</h2>
  <p class="section-intro">
    I write occasionally about learning, software engineering, and transitions in study or
    career. This space will be updated with selected pieces over time.
  </p>

  {#if posts.length === 0}
    <p class="muted">No posts published yet. Check back soon.</p>
  {:else}
    <div class="cards">
      {#each posts as post}
        <article class="card">
          <h3>{post.title}</h3>
          <p class="muted">{post.status}</p>
        </article>
      {/each}
    </div>
  {/if}
</section>
