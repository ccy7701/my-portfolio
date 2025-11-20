<script>
  import { onMount } from 'svelte';
  import { openLightbox } from '$lib/lightbox';
  
  export let data;
  
  let visible = false;
  let statsVisible = false;
  let theme = 'light';
  
  onMount(() => {
    setTimeout(() => visible = true, 100);
    
    // Get initial theme
    const htmlElement = document.documentElement;
    theme = htmlElement.getAttribute('data-theme') || 'light';
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const newTheme = htmlElement.getAttribute('data-theme') || 'light';
      if (newTheme !== theme) {
        theme = newTheme;
      }
    });
    
    observer.observe(htmlElement, { attributes: true, attributeFilter: ['data-theme'] });
    
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statsVisible = true;
        }
      });
    }, { threshold: 0.3 });
    
    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) intersectionObserver.observe(statsSection);
    
    return () => {
      observer.disconnect();
      intersectionObserver.disconnect();
    };
  });
  
  const features = [
    {
      title: "Stay organised",
      description: "Easily manage your academic schedule, track your progress, and set goals to ensure you stay on top of your studies.",
      icon: "📅"
    },
    {
      title: "Discover campus events",
      description: "Find events, clubs and activities from around campus that match your interests and passions.",
      icon: "🎯"
    },
    {
      title: "Find study partners",
      description: "Use the study partner suggester tool to connect with fellow students that share your characteristics.",
      icon: "🤝"
    },
    {
      title: "Timetable builder",
      description: "Create and customise your academic timetable. Choose your courses, plan your days, and avoid conflicts with the timetable builder.",
      icon: "📊"
    },
    {
      title: "Explore campus clubs",
      description: "Find and join clubs that match your passions. Whether you're into sports, arts, or academics, our club search tool connects you with like-minded peers.",
      icon: "🎭"
    },
    {
      title: "Administrative tools",
      description: "Efficiently manage clubs, events, memberships, and handle administrative duties with tools for committee members and administrators.",
      icon: "⚙️"
    }
  ];
  
  const mobileScreens = [
    {
      img: "/projects/umssacs/umssacs_mobile_home.png",
      title: "Home Dashboard",
      description: "Personalized overview with quick access to all features and upcoming schedule"
    },
    {
      img: "/projects/umssacs/umssacs_mobile_login.png",
      title: "Login Interface",
      description: "Secure authentication with UMS credentials integration"
    },
    {
      img: "/projects/umssacs/umssacs_mobile_acadprog.png",
      title: "Academic Progress",
      description: "Track CGPA, grades, and academic performance with detailed analytics"
    },
    {
      img: "/projects/umssacs/umssacs_mobile_ttb.png",
      title: "Timetable View",
      description: "Weekly schedule display with color-coded classes and location information"
    },
    {
      img: "/projects/umssacs/umssacs_mobile_events.png",
      title: "Events Feed",
      description: "Curated list of campus events with filtering by category and date"
    },
    {
      img: "/projects/umssacs/umssacs_mobile_clubs.png",
      title: "Clubs & Organizations",
      description: "Discover and join student clubs and campus organizations"
    },
    {
      img: "/projects/umssacs/umssacs_mobile_spsres.png",
      title: "Study Partner Results",
      description: "Browse matched students based on shared courses and study preferences"
    },
    {
      img: "/projects/umssacs/umssacs_mobile_profile.png",
      title: "Profile & Settings",
      description: "Manage personal information, preferences, and notification settings"
    }
  ];
  
  const techStack = [
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },
    { name: "SASS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Laravel", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "MySQL", category: "Backend" },
    { name: "Apache", category: "Deployment" },
    { name: "DigitalOcean", category: "Deployment" }
  ];
</script>

<svelte:head>
  <title>{data.project.title} | Chiew Cheng Yi</title>
</svelte:head>

<div class="umssacs-container" class:visible>
  <div class="back-link-container">
    <a href="/projects" class="back-link">← Back to Projects</a>
  </div>

  <!-- Hero Section with Logo -->
  <section class="hero-section">
    <div class="logo-container">
      <img src={theme === 'dark' ? '/projects/umssacs/umssacs_logo_darkmode.png' : '/projects/umssacs/umssacs_logo_lightmode.png'} alt="UMSSACS Logo" class="project-logo" />
    </div>
    <h1 class="project-title">UMS Student Academic Companion System (UMSSACS)</h1>
    <p class="project-description">{data.project.description}</p>
  </section>

  <!-- Overview Section -->
  <section class="overview-section">
    <h2 class="section-title">Project Overview</h2>
    <div class="overview-content">
      <p>
        UMSSACS is a comprehensive web-based platform designed to enhance the academic experience 
        of students at Universiti Malaysia Sabah. The system integrates essential academic tools 
        into a unified platform, addressing common challenges students face in organizing their 
        studies and connecting with peers.
      </p>
      <p>
        Built as a Final Year Project, UMSSACS demonstrates practical application of full-stack 
        web development principles combined with machine learning to create a meaningful solution 
        for the UMS student community.
      </p>
    </div>
  </section>

  <!-- Key Features Grid -->
  <section class="features-section">
    <h2 class="section-title">Key Features</h2>
    <div class="features-grid">
      {#each features as feature, i}
        <div class="feature-card" style="--delay: {i * 0.1}s">
          <div class="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Mobile Screenshots Section -->
  <section class="mobile-section">
    <h2 class="section-title">Mobile Interface</h2>
    <p class="section-intro">
      Responsive design optimized for mobile devices, ensuring students can access their 
      academic tools anywhere, anytime.
    </p>
    <div class="mobile-screens-grid">
      {#each mobileScreens as screen, i}
        <div class="mobile-screen-card" style="--delay: {i * 0.05}s">
          <div class="phone-frame">
            <img 
              src={screen.img} 
              alt={screen.title}
              on:click={() => openLightbox(
                mobileScreens.map(s => s.img),
                mobileScreens.map(s => s.title),
                i
              )}
            />
          </div>
          <div class="screen-info">
            <h4>{screen.title}</h4>
            <p>{screen.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Technical Implementation -->
  <section class="tech-section">
    <h2 class="section-title">Technical Stack</h2>
    
    <div class="tech-categories">
      <div class="tech-category-card">
        <div class="tech-category-header">
          <h3 class="tech-category-name">Frontend</h3>
        </div>
        <div class="tech-items">
          <div class="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" class="tech-item-icon" />
            <span>HTML5</span>
          </div>
          <div class="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" class="tech-item-icon" />
            <span>CSS3</span>
          </div>
          <div class="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" class="tech-item-icon" />
            <span>Bootstrap</span>
          </div>
          <div class="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SASS" class="tech-item-icon" />
            <span>SASS</span>
          </div>
          <div class="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="tech-item-icon" />
            <span>JavaScript</span>
          </div>
        </div>
      </div>

      <div class="tech-category-card">
        <div class="tech-category-header">
          <h3 class="tech-category-name">Backend</h3>
        </div>
        <div class="tech-items">
          <div class="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" class="tech-item-icon" />
            <span>Laravel</span>
          </div>
          <div class="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" class="tech-item-icon" />
            <span>PHP</span>
          </div>
          <div class="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="tech-item-icon" />
            <span>Python</span>
          </div>
          <div class="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" class="tech-item-icon" />
            <span>MySQL</span>
          </div>
        </div>
      </div>

      <div class="tech-category-card">
        <div class="tech-category-header">
          <h3 class="tech-category-name">Deployment</h3>
        </div>
        <div class="tech-items">
          <div class="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original-wordmark.svg" alt="Apache" class="tech-item-icon" />
            <span>Apache</span>
          </div>
          <div class="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" alt="DigitalOcean" class="tech-item-icon" />
            <span>DigitalOcean</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="implementation-details">
      <h3>Implementation Highlights</h3>
      <ul>
        <li>
          <strong>kNN Machine Learning Integration:</strong> Implemented a k-Nearest Neighbors (kNN) 
          algorithm using Python to match students with compatible study partners based on shared courses, 
          academic programs, and learning characteristics.
        </li>
        <li>
          <strong>Database Design:</strong> Structured MySQL database with normalized tables for 
          users, courses, timetables, grades, events, clubs, and memberships, ensuring data integrity and efficient queries.
        </li>
        <li>
          <strong>MVC Architecture:</strong> Laravel backend with clean Model-View-Controller pattern, 
          implementing secure authentication, authorization, and role-based access control for students, 
          committee members, and administrators.
        </li>
        <li>
          <strong>Responsive Design:</strong> Mobile-first approach using Bootstrap, SASS, and Blade templates, 
          ensuring seamless experience across all device sizes from smartphones to desktops.
        </li>
        <li>
          <strong>Cloud Deployment:</strong> Production deployment on DigitalOcean with Apache web server, 
          configured for optimal performance and security.
        </li>
      </ul>
    </div>
  </section>

  <!-- Results & Validation Section -->
  <section class="results-section">
    <h2 class="section-title">System Usability Study</h2>
    <p class="section-intro">
      Conducted comprehensive usability testing with UMS students using the System Usability 
      Scale (SUS) methodology to validate the platform's effectiveness and user experience.
    </p>
    
    <div class="stats-grid" class:visible={statsVisible}>
      <div class="stat-card">
        <div class="stat-number">79.58</div>
        <div class="stat-label">SUS Score</div>
        <div class="stat-description">Above Industry Average</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">12</div>
        <div class="stat-label">Students Tested</div>
        <div class="stat-description">Diverse User Group</div>
      </div>
    </div>

    <div class="results-images">
      <div class="result-image-card">
        <img 
          src="/projects/umssacs/umssacs_sus_1.png" 
          alt="SUS Score Distribution"
          on:click={() => openLightbox(
            ['/projects/umssacs/umssacs_sus_1.png', '/projects/umssacs/umssacs_sus_2.png'],
            ['SUS Score Distribution', 'User Feedback Analysis'],
            0
          )}
        />
        <p class="image-caption">SUS Score Distribution Analysis</p>
      </div>
      <div class="result-image-card">
        <img 
          src="/projects/umssacs/umssacs_sus_2.png" 
          alt="User Feedback Analysis"
          on:click={() => openLightbox(
            ['/projects/umssacs/umssacs_sus_1.png', '/projects/umssacs/umssacs_sus_2.png'],
            ['SUS Score Distribution', 'User Feedback Analysis'],
            1
          )}
        />
        <p class="image-caption">Detailed User Feedback and Insights</p>
      </div>
    </div>
  </section>

  <!-- Challenges & Learnings -->
  <section class="learnings-section">
    <h2 class="section-title">Key Challenges & Learnings</h2>
    <div class="learnings-grid">
      <div class="learning-card challenge">
        <h3>Challenges Overcome</h3>
        <ul>
          <li>Designing an effective ML matching algorithm with limited training data</li>
          <li>Ensuring data privacy and security for student information</li>
          <li>Balancing feature richness with system performance</li>
          <li>Creating an intuitive UX for complex academic data</li>
        </ul>
      </div>
      <div class="learning-card insight">
        <h3>Key Insights</h3>
        <ul>
          <li>Importance of user-centered design in academic tools</li>
          <li>Value of iterative testing with real student feedback</li>
          <li>Effective integration of ML models in web applications</li>
          <li>Database optimization for complex relational queries</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Future Enhancements -->
  <section class="future-section">
    <h2 class="section-title">Future Enhancements</h2>
    <div class="future-grid">
      <div class="future-item">
        <div class="future-number">01</div>
        <h4>Mobile App Development</h4>
        <p>Native iOS and Android applications for enhanced mobile experience</p>
      </div>
      <div class="future-item">
        <div class="future-number">02</div>
        <h4>Real-time Notifications</h4>
        <p>Push notifications for schedule changes, upcoming events, and study partner matches</p>
      </div>
      <div class="future-item">
        <div class="future-number">03</div>
        <h4>Integration with UMS Systems</h4>
        <p>Direct integration with official university academic management systems</p>
      </div>
      <div class="future-item">
        <div class="future-number">04</div>
        <h4>Advanced Analytics</h4>
        <p>Predictive analytics for academic performance and personalized study recommendations</p>
      </div>
    </div>
  </section>
</div>

<style>
  .umssacs-container {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  .umssacs-container.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .back-link-container {
    margin-bottom: 2rem;
  }

  .back-link {
    text-decoration: none;
    color: var(--text);
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .back-link:hover {
    color: var(--accent-light);
  }

  /* Hero Section */
  .hero-section {
    text-align: center;
    padding: 0 0 1rem;
    animation: fadeInUp 0.6s ease;
  }

  .logo-container {
    margin-bottom: 2rem;
  }

  .project-logo {
    max-width: 300px;
    height: auto;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
  }

  .project-title {
    font-size: 2.2rem;
    font-weight: 700;
    margin: 0 0 0.75em;
    line-height: 1.2;
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .project-subtitle {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-muted);
    margin: 0 0 0.5rem;
  }

  .project-period {
    font-size: 1rem;
    color: var(--text-muted);
    margin: 0 0 1.5rem;
  }

  .project-description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--text);
    max-width: 750px;
    margin: 0 auto;
  }

  /* Sections */
  section {
    margin: 4rem 0;
  }

  .section-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.75rem;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--accent), var(--accent-light));
    border-radius: 2px;
  }

  .section-intro {
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--text-muted);
    margin-bottom: 2rem;
    max-width: 700px;
  }

  /* Overview */
  .overview-content p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--text);
    margin-bottom: 1.2rem;
  }

  /* Features Grid */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .feature-card {
    background: var(--card);
    border: 1px solid var(--card-border);
    padding: 2rem 1.75rem;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    animation: slideInUp 0.6s ease forwards;
    animation-delay: var(--delay);
    position: relative;
    overflow: hidden;
  }

  .feature-card::before {
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

  .feature-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    border-color: rgba(59, 130, 246, 0.3);
  }

  .feature-card:hover::before {
    height: 100%;
  }

  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .feature-card h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0 0 0.75rem;
    color: var(--text);
  }

  .feature-card p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--text-muted);
    margin: 0;
  }

  /* Mobile Screens */
  .mobile-screens-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 2.5rem;
  }

  .mobile-screen-card {
    opacity: 0;
    animation: fadeInUp 0.5s ease forwards;
    animation-delay: var(--delay);
  }

  .phone-frame {
    background: var(--card);
    border-radius: 16px;
    padding: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    transition: all 0.3s ease;
    border: 1px solid var(--card-border);
  }

  .phone-frame:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .phone-frame img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    cursor: zoom-in;
    display: block;
  }

  .screen-info h4 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
    color: var(--text);
  }

  .screen-info p {
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--text-muted);
    margin: 0;
  }

  /* Tech Stack */
  .tech-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 2.5rem;
  }

  .tech-category-card {
    background: var(--card);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    padding: 1.75rem;
  }

  .tech-category-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--border);
  }

  .tech-category-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text);
    margin: 0;
  }

  .tech-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .tech-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    transition: all 0.2s ease;
  }

  .tech-item:hover {
    background: var(--card);
    border-color: var(--accent-light);
    transform: translateX(4px);
  }

  .tech-item-icon {
    width: 32px;
    height: 32px;
    object-fit: contain;
    flex-shrink: 0;
  }

  .tech-item span {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text);
  }

  .implementation-details {
    background: var(--card);
    border: 1px solid var(--card-border);
    padding: 2rem;
    border-radius: 12px;
    margin-top: 2rem;
  }

  .implementation-details h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0 0 1.5rem;
    color: var(--text);
  }

  .implementation-details ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .implementation-details li {
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border);
    line-height: 1.7;
    color: var(--text);
  }

  .implementation-details li:last-child {
    border-bottom: none;
  }

  .implementation-details strong {
    color: var(--accent-light);
    font-weight: 600;
  }

  /* Results Section */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin: 2.5rem 0;
  }

  .stat-card {
    background: linear-gradient(135deg, var(--card) 0%, var(--card) 100%);
    border: 1px solid var(--card-border);
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.5s ease;
  }

  .stats-grid.visible .stat-card {
    transform: translateY(0);
    opacity: 1;
  }

  .stats-grid.visible .stat-card:nth-child(1) {
    transition-delay: 0.1s;
  }

  .stats-grid.visible .stat-card:nth-child(2) {
    transition-delay: 0.2s;
  }

  .stat-number {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.25rem;
  }

  .stat-description {
    font-size: 0.9rem;
    color: var(--text-muted);
  }

  .results-images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .result-image-card {
    background: var(--card);
    border: 1px solid var(--card-border);
    padding: 1.5rem;
    border-radius: 12px;
    transition: all 0.3s ease;
  }

  .result-image-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  .result-image-card img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    cursor: zoom-in;
    transition: transform 0.3s ease;
  }

  .result-image-card img:hover {
    transform: scale(1.02);
  }

  .image-caption {
    margin: 1rem 0 0;
    font-size: 0.95rem;
    color: var(--text-muted);
    text-align: center;
  }

  /* Learnings Grid */
  .learnings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .learning-card {
    background: var(--card);
    border: 1px solid var(--card-border);
    padding: 2rem;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .learning-card::before {
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

  .learning-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    border-color: rgba(59, 130, 246, 0.3);
  }

  .learning-card:hover::before {
    height: 100%;
  }

  .learning-card h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0 0 1.25rem;
    color: var(--text);
  }

  .learning-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .learning-card li {
    padding: 0.75rem 0 0.75rem 1.5rem;
    position: relative;
    line-height: 1.6;
    color: var(--text);
  }

  .learning-card li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--accent-light);
    font-weight: bold;
  }

  /* Future Enhancements */
  .future-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .future-item {
    background: var(--card);
    border: 1px solid var(--card-border);
    padding: 1.75rem;
    border-radius: 12px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .future-item::before {
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

  .future-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    border-color: rgba(59, 130, 246, 0.3);
  }

  .future-item:hover::before {
    height: 100%;
  }

  .future-number {
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent-light);
    margin-bottom: 1rem;
    opacity: 0.3;
  }

  .future-item h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0.75rem;
    color: var(--text);
  }

  .future-item p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--text-muted);
    margin: 0;
  }

  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .project-title {
      font-size: 1.75rem;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .features-grid {
      grid-template-columns: 1fr;
    }

    .mobile-screens-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1.5rem;
    }

    .stat-number {
      font-size: 2.5rem;
    }

    .future-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
