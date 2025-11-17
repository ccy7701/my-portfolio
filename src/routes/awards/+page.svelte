<!-- src/routes/awards/+page.svelte -->
<script>
  const awards = [
    {
      title: "First Place — Borneo AI Hackathon",
      year: "2025",
      details:
        "FoodXcel: AI-assisted FSSC 22000 compliance platform for food manufacturers. React frontend on Vercel with Copilot Studio chatbot integration."
    },
    {
      title: "Best Overall Award — TARUMT TechTrek: Innovators Pitch Challenge",
      year: "2024",
      details:
        "JomHarvest: IoT-supported agri-utility and farm-management concept focused on food stability in Sabah, aligned with UNSDG 9."
    },
    {
      title: "Technical Solution Award — MYStartup X Elevate 30-Hour Challenge",
      year: "2023",
      details:
        "JomGarden: IoT-based home gardening prototype using ESP32 and Blynk for wireless control and live monitoring."
    }
  ];
</script>

<section class="section">
  <h2>Awards &amp; Competitions</h2>
  <p class="section-intro">
    Recognition from hackathons and innovation challenges for practical, impactful technical
    solutions.
  </p>
  <div class="cards">
    {#each awards as award}
      <article class="card">
        <h3>{award.title}</h3>
        <p class="muted">{award.year}</p>
        <p>{award.details}</p>
      </article>
    {/each}
  </div>
</section>
