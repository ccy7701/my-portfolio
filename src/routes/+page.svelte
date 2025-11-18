<script>
  export const hideFooter = true;
</script>

<section class="hero-pro">
  <div class="hero-grid">

    <!-- Left: Text -->
    <div class="hero-text-block">
      <h1>Hi, I'm Chiew Cheng Yi</h1>
      <h2 class="subtitle">Software Engineering Graduate</h2>

      <p class="intro">
        I’m a Software Engineering graduate from Universiti Malaysia Sabah (UMS) with experience in
        full-stack development, hackathons, and research projects. I build clean, scalable, and
        user-focused systems that solve real problems with clarity and precision.
      </p>

      <!-- Social Links -->
      <div class="social-links">
        <a href="mailto:chiewccy1@gmail.com" class="icon-link">
          <svg viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2
          2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4l-8 5l-8-5V6l8 5l8-5v2Z"/></svg>
          Email
        </a>

        <a href="https://github.com/ccy7701" target="_blank" rel="noopener noreferrer" class="icon-link">
          <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34A2.64 2.64 0 0 0 5
          16.5c-.91-.62.07-.6.07-.6A2.1 2.1 0 0 1 7 17.34a2.15 2.15 0 0 0 3 .84a2.17 2.17 0 0 1 .63-1.35c-2.22-.26-4.56-1.12-4.56-4.94A3.86 3.86 0 0 1
          7.12 8.1a3.58 3.58 0 0 1 .1-2.64s.84-.27 2.75 1a9.4 9.4 0 0 1 5 0c1.9-1.27 2.74-1 2.74-1a3.58 3.58 0 0 1 .1 2.64a3.86 3.86 0 0 1
          1.07 2.7c0 3.84-2.34 4.67-4.57 4.93A2.4 2.4 0 0 1 15 18v3c0 .27.18.59.69.48A10 10 0 0 0 12 2Z"/></svg>
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/chiew-cheng-yi-165abb222"
           target="_blank" rel="noopener noreferrer" class="icon-link">
          <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2
          2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14M8.34 17.34V9.5H6v7.84h2.34M7.17 8.39A1.39 1.39 0 1 0 7.17 5.6a1.39 1.39 0 0 0 0
          2.79m10.17 8.95v-4.56c0-2.45-1.31-3.6-3.06-3.6c-1.41 0-2.05.78-2.41 1.33v-1.11H9.5v7.94h2.37v-4.4c0-1.16.22-2.28
          1.65-2.28c1.41 0 1.43 1.32 1.43 2.35v4.33h2.39Z"/></svg>
          LinkedIn
        </a>
      </div>

      <div class="download-buttons">
        <a class="download-btn" href="/documents/Resume_17112025.pdf" download>
          Download Résumé
        </a>
        <a class="download-btn" href="/documents/CV_17112025.pdf" download>
          Download CV
        </a>
      </div>
    </div>

    <!-- Right: Photo -->
    <div class="hero-photo-wrapper">
      <img src="./profile.jpg" alt="Profile photo" class="hero-photo" />
    </div>
  </div>
</section>

<style>
  .hero-pro {
    margin-top: 4rem;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 3rem;
  }

  /* Mobile */
  @media (max-width: 800px) {
    .hero-grid {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .hero-photo-wrapper {
      justify-content: center;
      display: flex;
    }
  }

  .hero-text-block h1 {
    font-size: 2.4rem;
    margin: 0;
    font-weight: 700;
    color: var(--text);
  }

  .subtitle {
    font-size: 1.3rem;
    margin-top: 0.4rem;
    color: var(--accent);
    font-weight: 600;
  }

  .intro {
    margin-top: 1rem;
    line-height: 1.6;
    font-size: 1.05rem;
    color: var(--text-muted);
    max-width: 42rem;
  }

  .social-links {
    margin-top: 1.25rem;
    display: flex;
    gap: 1.2rem;
    flex-wrap: wrap;
  }

  .icon-link {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.95rem;
    color: var(--accent-light);
    transition: opacity 0.2s ease;
  }

  .icon-link svg {
    width: 18px;
    height: 18px;
  }

  .icon-link:hover {
    opacity: 0.7;
  }

  .download-buttons {
    margin-top: 1.6rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .download-btn {
    display: inline-block;
    padding: 0.65rem 1.3rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    background: var(--accent);
    color: white;
    text-decoration: none;
    transition: background 0.2s ease, transform 0.15s ease;
  }

  .download-btn:hover {
    background: var(--accent-light);
    transform: translateY(-2px);
  }

  .download-btn:active {
    transform: translateY(0);
  }

  .hero-photo-wrapper {
    display: flex;
  }

  .hero-photo {
    width: 280px;
    height: 280px;
    object-fit: cover;
    border-radius: 14px;
    box-shadow: 0 6px 16px rgba(0,0,0,0.18);
    border: 2px solid var(--border);
  }
</style>
