<script>
  import { openLightbox } from "$lib/lightbox";

  const awards = [
    {
      title: "First Place",
      subtitle: "Borneo AI Hackathon",
      year: "2025",
      points: [
        "Competed as a team of three to develop FoodXcel, an AI-assisted FSSC 22000 compliance platform for food manufacturers.",
        "Transformed the team’s design into a React frontend and deployed the prototype to Vercel for the final demo.",
        "Integrated a Copilot Studio agent to support chatbot-style assistance for compliance guidance.",
        "Awarded First Place for a well-structured pitch, strong technical integration, and delivery of a tangible, high-fidelity product under tight time constraints."
      ],
      images: [
        "/awards/baih/baih_1.jpeg",
        "/awards/baih/baih_2.png",
        "/awards/baih/baih_3.png"
      ]
    },
    {
      title: "Best Overall Award",
      subtitle: "TARUMT TechTrek: Innovators Pitch Challenge",
      year: "2024",
      points: [
        "Led a team of three to design JomHarvest, an IoT-supported agri-utility and farm-management solution aimed at strengthening food stability in Sabah.",
        "Served as team leader and presenter, aligning the solution with UNSDG 9.",
        "Created a high-fidelity Figma concept outlining dashboards, zoning maps, weather-based cues, and remote-control modules.",
        "Recognised with the Best Overall Award for innovation, problem clarity, and alignment with sustainability goals."
      ],
      images: [
        "/awards/techtrek/techtrek_1.png",
        "/awards/techtrek/techtrek_2.png",
        "/awards/techtrek/techtrek_3.png",
        "/awards/techtrek/techtrek_4.png",
        "/awards/techtrek/techtrek_5.png",
      ]
    },
    {
      title: "Technical Solution Award",
      subtitle: "MYStartup X Elevate 30-Hour Challenge",
      year: "2023",
      points: [
        "Collaborated with a team of three to develop JomGarden, an IoT-based home gardening system with live monitoring and wireless control.",
        "Programmed a working ESP32 prototype integrated with Blynk to simulate real-time sensor behaviour.",
        "Delivered a full pitch including a working hardware demonstration — the only team to showcase a live prototype.",
        "Recognised for practical implementation, prototype completeness, and strong alignment between concept, execution, and presentation."
      ],
      images: [
        "/awards/30hc/30hc_1.jpg",
        "/awards/30hc/30hc_2.jpg",
        "/awards/30hc/30hc_3.png",
        "/awards/30hc/30hc_4.png"
      ]
    }
  ];
</script>

<section class="section section-header">
  <div class="section-header-inner">
    <h2>Awards & Competitions</h2>
    <p class="section-subtitle">
      Recognition earned through hackathons and innovation challenges for delivering
      robust, high-impact technical solutions
    </p>
  </div>

  <div class="awards-list">
    {#each awards as award}
      <article class="award-row">
        <div class="award-text">
          <h3 class="award-title">{award.title}</h3>
          <p class="award-subtitle">{award.subtitle} | {award.year}</p>

          <ul class="award-points">
            {#each award.points as point}
              <li>{point}</li>
            {/each}
          </ul>
        </div>

        <!-- Award image (preview and lightbox-enabled) -->
        <img
          class="award-image"
          src={award.images[0]}
          alt={award.title}
          on:click={() =>
            openLightbox(
              award.images,
              award.images.map(() => award.title),
              0
            )
          }
        />
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

  .awards-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1.5rem;
  }

  .award-row {
    display: flex;
    align-items: center;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 0.75rem;
    padding: 1.25rem;
    gap: 1.5rem;
  }

  .award-title {
    font-size: 1.35rem;
    font-weight: 600;
    margin: 0;
  }

  .award-subtitle {
    margin: 0.15rem 0 0.5rem;
    font-size: 1rem;
    color: var(--text-muted);
  }

  .award-text {
    flex: 1;
  }

  .award-points {
    margin: 0.75rem 0 0;
    padding-left: 1.2rem;
    line-height: 1.55;
  }

  .award-points li {
    margin-bottom: 0.4rem;
  }

  .award-image {
    width: 340px;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    border-radius: 0.5rem;
    cursor: zoom-in;
    flex-shrink: 0;
    transition: transform 0.25s ease;
  }

  .award-image:hover {
    transform: scale(1.03);
  }

  @media (max-width: 750px) {
    .award-row {
      flex-direction: column;
    }
    .award-image {
      width: 100%;
      max-height: 240px;
    }
  }
</style>
