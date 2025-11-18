<script>
  const publications = [
    {
      title: "Revolutionizing Airline Customer Satisfaction Analysis with Machine Learning Techniques",
      year: "2024",
      venue: "IRICT 2023",
      doi: "https://doi.org/10.1007/978-3-031-59707-7_13",
      authors: "Ibrahim, A. O., Chiew, C. Y., Elsafi, A., Ghaleb, F. A.",
      points: [
        "Explored predictive modelling approaches for assessing customer satisfaction in the airline industry.",
        "Evaluated multiple algorithms to identify effective methods for data-driven insights."
      ]
    },
    {
      title: "An Investigation of the Effect of Weather on Hand-Foot-Mouth Disease Incidence in Sarawak",
      year: "2024",
      venue: "ICACSE 2023",
      doi: "https://doi.org/10.1007/978-981-97-2977-7_25",
      authors: "Ibrahim, A.O., Chen, W.Y., Robert, J.Z., Chiew, C. Y., Majid, M.A.",
      points: [
        "Investigated the relationship between environmental factors and HFMD incidence using machine learning.",
        "Integrated datasets to support data-centric public health analysis."
      ]
    }
  ];
</script>

<section class="section section-header">
  <div class="section-header-inner">
    <h2>Publications</h2>
    <p class="section-subtitle">
      Research papers I helped produce during my studies, guided by my lecturer and centered on applying machine learning to real datasets
    </p>
  </div>

  <div class="pub-grid">
    {#each publications as pub}
      <article class="pub-card">
        <h3 class="pub-title">{pub.title}</h3>
        <p class="pub-year">{pub.year}</p>

        <p class="pub-venue">
          {pub.venue} — 
          <a 
            href={pub.doi} 
            target="_blank" 
            rel="noopener noreferrer"
            class="doi"
          >
            DOI link
          </a>
        </p>

        <p class="pub-authors">{pub.authors}</p>

        <ul class="pub-points">
          {#each pub.points as point}
            <li>{point}</li>
          {/each}
        </ul>
      </article>
    {/each}
  </div>
</section>

<style>
  /* ----- Section Header ----- */
  .section-header-inner {
    text-align: center;
    max-width: 680px;
    margin: 0 auto 3.5rem;
  }

  .section-header h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
    letter-spacing: -0.4px;
  }

  .section-subtitle {
    color: var(--text-muted);
    font-size: 1.05rem;
    line-height: 1.6;
  }

  /* ----- Grid Layout ----- */
  .pub-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 800px) {
    .pub-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* ----- Publication Card ----- */
  .pub-card {
    background: var(--card);
    border: 1px solid var(--card-border);
    padding: 1.4rem 1.6rem;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .pub-card::before {
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

  .pub-card:hover {
    border-color: rgba(59, 130, 246, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  .pub-card:hover::before {
    height: 100%;
  }

  .pub-title {
    margin: 0 0 0.5rem;
    font-size: 1.15rem;
    font-weight: 600;
    line-height: 1.35;
    color: var(--text);
  }

  .pub-year {
    margin: 0 0 0.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-muted);
  }

  .pub-venue {
    margin: 0 0 0.35rem;
    font-size: 0.9rem;
    color: var(--text-muted);
  }

  .doi {
    color: var(--accent-light);
    text-decoration: none;
    font-weight: 600;
  }

  .doi:hover {
    text-decoration: underline;
  }

  .pub-authors {
    margin: 0.5rem 0 0.8rem;
    font-size: 0.9rem;
    color: var(--text);
  }

  .pub-points {
    padding-left: 1.2rem;
    margin: 0;
    color: var(--text);
    line-height: 1.45;
    font-size: 0.9rem;
  }

  .pub-points li {
    margin-bottom: 0.35rem;
  }
</style>
