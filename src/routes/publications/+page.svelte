<!-- src/routes/publications/+page.svelte -->
<script>
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

<section class="section">
  <h2>Publications</h2>
  <p class="section-intro">
    Conference publications co-authored during my degree, focusing on machine learning
    applications in customer satisfaction analysis and public health.
  </p>
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
