<!-- src/routes/about/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  
  let visible = false;
  
  onMount(() => {
    setTimeout(() => visible = true, 50);
  });

  // Icon mapping for technologies
  const techIcons = {
    // Programming languages
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    
    // Frameworks & Tools
    'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    'WordPress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
    'Jupyter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
    
    // Databases & Deployment
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    'Apache': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
    'XAMPP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
    'DigitalOcean': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'Trello': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg',
    
    // Design & Productivity
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'Canva': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
    'DaVinci Resolve': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png',
    'Microsoft Office': 'https://img.icons8.com/color/48/microsoft-office-2019.png',
    'Google Workspace': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
  };
</script>

<svelte:head>
  <title>About | Chiew Cheng Yi</title>
</svelte:head>

<div class="about-container" class:visible>
  <!-- Hero Section -->
  <section class="hero-about">
    <p class="page-label">About</p>
    <h1 class="hero-title">
      Building Digital Solutions<br />
      <span class="gradient-text">From Sabah to the World</span>
    </h1>
    <p class="hero-description">
      I'm based in Kota Kinabalu, Sabah, and recently completed my Bachelor of Computer Science
      (Software Engineering) at Universiti Malaysia Sabah. My interests span full-stack web
      development, AI-assisted tools, and IoT solutions that solve practical, real-world problems.
    </p>
  </section>

  <!-- Skills Section -->
  <section class="skills-section section-header">
    <div class="section-header-inner">
      <h2>Skills & Expertise</h2>
      <p class="section-subtitle">A comprehensive toolkit for modern software development</p>
    </div>

    <div class="skills-grid">
      <div class="skill-card" style="--delay: 0.1s">
        <h3>Programming Languages</h3>
        <div class="skill-list">
          {#each ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'Java', 'Kotlin', 'C', 'C++'] as tech}
            <div class="skill-item">
              <img src={techIcons[tech]} alt={tech} class="tech-icon" />
              <span>{tech}</span>
            </div>
          {/each}
        </div>
      </div>

      <div class="skill-card" style="--delay: 0.2s">
        <h3>Frameworks & Tools</h3>
        <div class="skill-list">
          {#each ['Laravel', 'Bootstrap', 'WordPress', 'Jupyter'] as tech}
            <div class="skill-item">
              <img src={techIcons[tech]} alt={tech} class="tech-icon" />
              <span>{tech}</span>
            </div>
          {/each}
        </div>
      </div>

      <div class="skill-card" style="--delay: 0.3s">
        <h3>Databases & Deployment</h3>
        <div class="skill-list">
          {#each ['MySQL', 'SQLite', 'Apache', 'XAMPP', 'DigitalOcean', 'Git', 'GitHub', 'Trello'] as tech}
            <div class="skill-item">
              <img src={techIcons[tech]} alt={tech} class="tech-icon" />
              <span>{tech}</span>
            </div>
          {/each}
        </div>
      </div>

      <div class="skill-card" style="--delay: 0.4s">
        <h3>Design & Productivity</h3>
        <div class="skill-list">
          {#each ['Figma', 'Canva', 'DaVinci Resolve', 'Microsoft Office', 'Google Workspace'] as tech}
            <div class="skill-item">
              <img src={techIcons[tech]} alt={tech} class="tech-icon" />
              <span>{tech}</span>
            </div>
          {/each}
        </div>
      </div>

      <div class="skill-card wide" style="--delay: 0.5s">
        <h3>Spoken Languages</h3>
        <div class="language-list">
          <div class="language-item">
            <div class="lang-content">
              <span class="lang-name">English</span>
              <span class="lang-level fluent">Fluent</span>
            </div>
          </div>
          <div class="language-item">
            <div class="lang-content">
              <span class="lang-name">Bahasa Malaysia</span>
              <span class="lang-level fluent">Fluent</span>
            </div>
          </div>
          <div class="language-item">
            <div class="lang-content">
              <span class="lang-name">Mandarin</span>
              <span class="lang-level proficient">Proficient</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .about-container {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .about-container.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Hero Section */
  .page-label {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    margin: 0 0 1rem 0;
  }

  .hero-title {
    font-size: 2.75rem;
    font-weight: 800;
    line-height: 1.2;
    margin: 0 0 1.5rem 0;
    letter-spacing: -0.02em;
  }

  .gradient-text {
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-description {
    font-size: 1.15rem;
    line-height: 1.7;
    color: var(--text-muted);
    max-width: 42rem;
    margin: 0;
  }

  /* Section Header */
  .skills-section {
    margin-top: 3rem;
  }

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

  /* Skills Grid */
  .skills-grid {
    display: grid;
    gap: 1.25rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .skill-card.wide {
      grid-column: 1 / -1;
    }
  }

  /* Skill Cards */
  .skill-card {
    background: var(--card);
    border: 1px solid var(--card-border);
    border-radius: 1rem;
    padding: 1.75rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: translateY(20px);
    animation: slideInUp 0.6s ease forwards;
    animation-delay: var(--delay, 0s);
    position: relative;
    overflow: hidden;
  }

  .skill-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background: linear-gradient(180deg, var(--accent), var(--accent-light));
    transition: height 0.3s ease;
    border-radius: 1rem 0 0 1rem;
  }

  .skill-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    border-color: rgba(59, 130, 246, 0.3);
  }

  .skill-card:hover::before {
    height: 100%;
  }

  .skill-card h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 1.25rem 0;
    color: var(--text);
  }

  /* Skill List */
  .skill-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 0.75rem;
  }

  .skill-item {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem 0;
    color: var(--text);
    font-size: 0.95rem;
    transition: all 0.2s ease;
    border-radius: 0.375rem;
    margin: 0 -0.25rem;
    padding-left: 0.25rem;
  }

  .skill-item:hover {
    background: rgba(59, 130, 246, 0.05);
    padding-left: 0.5rem;
  }

  .tech-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
    flex-shrink: 0;
  }

  /* Language List */
  .language-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .language-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.25rem 1rem;
    background: rgba(59, 130, 246, 0.05);
    border-radius: 0.75rem;
    border: 1px solid rgba(59, 130, 246, 0.15);
    text-align: center;
    transition: all 0.25s ease;
  }

  .language-item:hover {
    background: rgba(59, 130, 246, 0.1);
    border-color: rgba(59, 130, 246, 0.3);
    transform: translateY(-2px);
  }

  .lang-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .lang-name {
    font-weight: 600;
    color: var(--text);
    font-size: 1rem;
  }

  .lang-level {
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .lang-level.fluent {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
  }

  .lang-level.proficient {
    background: linear-gradient(135deg, var(--accent), var(--accent-hover));
    color: white;
  }

  /* Animations */
  @keyframes slideInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive */
  @media (max-width: 767px) {
    .hero-title {
      font-size: 2rem;
    }

    .hero-description {
      font-size: 1rem;
    }

    .section-header h2 {
      font-size: 1.5rem;
    }

    .skill-card {
      padding: 1.25rem;
    }

    .language-list {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }

    .language-item {
      padding: 1rem;
    }
  }
</style>
