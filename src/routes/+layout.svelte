<!-- src/routes/+layout.svelte -->
<script>
  import { onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import { page } from "$app/stores";
  import { fly, fade } from "svelte/transition";
  import { lightboxImage, showLightbox } from "../lib/lightbox";

  $: visible = $showLightbox;
  $: image = $lightboxImage;

  let theme = "light";

  afterNavigate(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  });

  onMount(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      theme = stored;
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  });

  function toggleTheme() {
    theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }
</script>

<main class="shell">
  <header class="nav">
    <div class="nav-left">
      <a href="/" class="logo">CHIEW CHENG YI</a>
    </div>
    <nav class="nav-right">
      <a href="/#about" class:active={$page.url.hash === "#about"}>About</a>
      <a href="/projects" class:active={$page.url.pathname === "/projects"}>Projects</a>
      <a href="/awards" class:active={$page.url.pathname === "/awards"}>Awards</a>
      <a href="/publications" class:active={$page.url.pathname === "/publications"}>Publications</a>
      <a href="/writing" class:active={$page.url.pathname === "/writing"}>Writing</a>

      <button class="theme-toggle" on:click={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  </header>

  <!-- <div class="content">
    <slot />
  </div> -->

  {#key $page.url.pathname}
    <div class="page page-enter">
      <slot />
    </div>
  {/key}

  <footer class="footer">
    <div class="footer-inner">
      <div>
        <strong>Contact</strong>
        <ul>
          <li>
            Email:
            <a href="mailto:chiewccy1@gmail.com">chiewccy1@gmail.com</a>
          </li>
          <li>
            GitHub:
            <a
              href="https://github.com/ccy7701"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/ccy7701
            </a>
          </li>
          <li>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/chiew-cheng-yi-165abb222"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/chiew-cheng-yi-165abb222
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-meta">
        <small>© {new Date().getFullYear()} Chiew Cheng Yi</small>
      </div>
    </div>
  </footer>
</main>

<!-- GLOBAL LIGHTBOX -->
{#if visible}
  <div class="lb-overlay" on:click={() => showLightbox.set(false)}>
    <button class="lb-close" on:click={() => showLightbox.set(false)}>×</button>
    <img class="lb-image" src={image} alt="Preview" on:click|stopPropagation />
  </div>
{/if}

<style>
  /* =========================================================
    THEME VARIABLES
    ========================================================= */
  :global(:root) {
    /* Light mode (default) */
    --bg: #ffffff;
    --text: #0a0a0a;
    --text-muted: #6c757d;

    --nav-bg: rgba(255, 255, 255, 0.75);
    --border: rgba(0, 0, 0, 0.12);

    --card: #f7f7f7;
    --card-border: rgba(0, 0, 0, 0.15);

    /* BLUE */
    --accent: #2563eb;           /* main blue */
    --accent-hover: #1d4ed8;     /* darker blue */
    --accent-light: #60a5fa;     /* link/hover light blue */

    --btn-text-on-accent: #ffffff;
  }

  :global(html[data-theme="dark"]) {
    --bg: #0a0f1a;               /* deep navy background */
    --text: #e8eef5;
    --text-muted: #9aa5b5;

    --nav-bg: rgba(10, 15, 26, 0.75);  /* frosted dark blue */
    --border: rgba(148, 163, 184, 0.25);

    --card: #111827;             /* slate/dark card */
    --card-border: rgba(148, 163, 184, 0.25);

    /* BLUE (dark variant) */
    --accent: #3b82f6;           /* blue-500 */
    --accent-hover: #2563eb;     /* blue-600 */
    --accent-light: #60a5fa;     /* same light blue for links */

    --btn-text-on-accent: #ffffff;
  }

  /* =========================================================
    GLOBAL ELEMENTS
    ========================================================= */
  :global(body) {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    transition: background 0.25s ease, color 0.25s ease;
  }

  :global(a) {
    color: inherit;
    text-decoration: none;
  }

  /* =========================================================
    LAYOUT WRAPPER
    ========================================================= */
  .shell {
    max-width: 960px;
    margin: 0 auto;
    padding: 6rem 1.5rem 4rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .page-enter {
    animation: slideFadeIn 220ms ease forwards;
  }

  @keyframes slideFadeIn {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* =========================================================
    NAVBAR
    ========================================================= */
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    backdrop-filter: blur(10px);
    background: var(--nav-bg);
    border-bottom: 1px solid var(--border);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.9rem 1.5rem;
    z-index: 999;
  }

  /* Left + right aligned properly */
  .nav-left,
  .nav-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    font-weight: 700;
    letter-spacing: 0.12em;
    font-size: 0.9rem;
  }

  .nav-right a.active {
    font-weight: bold;
    color: var(--accent-light);
    opacity: 1 !important;
  }

  .nav-right a:hover {
    opacity: 1;
    text-decoration: underline;
  }

  /* Theme toggle */
  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    color: var(--text);
    opacity: 0.75;
    transition: opacity 0.2s ease;
  }

  .theme-toggle:hover {
    opacity: 1;
  }

  /* =========================================================
    MAIN CONTENT AREA
    ========================================================= */
  .content {
    flex: 1 0 auto;
  }

  .lb-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    z-index: 99999;
    animation: fadeIn 0.25s ease;
  }

  .lb-close {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    font-size: 3rem;
    background: none;
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0.9;
  }

  .lb-image {
    max-width: 95vw;
    max-height: 90vh;
    border-radius: 10px;
    animation: zoomIn 0.25s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes zoomIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }

  /* =========================================================
    FOOTER
    ========================================================= */
  .footer {
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
    color: var(--text-muted);
    font-size: 0.85rem;
  }

  .footer-inner {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .footer ul {
    list-style: none;
    padding: 0;
    margin: 0.25rem 0 0;
  }

  .footer li {
    margin-bottom: 0.25rem;
  }

  .footer a {
    color: var(--accent-light);
  }

  .footer a:hover {
    text-decoration: underline;
  }

  /* =========================================================
    HERO
    ========================================================= */
  .hero {
    margin-bottom: 2.5rem;
  }

  .hero h1 {
    font-size: 2.3rem;
    margin-bottom: 0.75rem;
  }

  .hero p {
    max-width: 40rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
    color: var(--text-muted);
  }

  .hero-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  /* =========================================================
    BUTTONS
    ========================================================= */
  .btn {
    font-size: 0.9rem;
    padding: 0.5rem 0.95rem;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  }

  .btn.ghost {
    border: 1px solid var(--border);
    background: transparent;
  }

  .btn.ghost:hover {
    border-color: var(--text);
    background: rgba(0, 0, 0, 0.08);
  }

  .btn.solid {
    background: var(--accent);
    border: 1px solid var(--accent);
    color: var(--btn-text-on-accent);
  }

  .btn.solid:hover {
    background: var(--accent-hover);
    border-color: var(--accent-hover);
  }

  /* =========================================================
    SECTIONS
    ========================================================= */
  .section {
    margin-top: 2.5rem;
  }

  .section h2 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .section-intro {
    max-width: 36rem;
    color: var(--text-muted);
    margin-bottom: 1.25rem;
  }

  /* =========================================================
    CARDS
    ========================================================= */
  .cards {
    display: grid;
    gap: 1rem;
  }

  .card {
    border-radius: 0.75rem;
    padding: 1rem 1.25rem;
    background: var(--card);
    border: 1px solid var(--card-border);
    transition: background 0.25s ease;
  }

  .card h3 {
    margin: 0 0 0.3rem;
    font-size: 1.05rem;
  }

  .muted {
    color: var(--text-muted);
    font-size: 0.85rem;
    margin-bottom: 0.4rem;
  }

  .tech {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color: var(--accent-light);
  }

  /* =========================================================
    PUBLICATIONS
    ========================================================= */
  .pub-list {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 1rem;
  }

  .pub-list a {
    font-size: 0.85rem;
    color: var(--accent-light);
  }

  .pub-list a:hover {
    text-decoration: underline;
  }

  /* =========================================================
    SKILLS GRID
    ========================================================= */
  .skills-grid {
    display: grid;
    gap: 1rem;
  }

  .skills-grid h3 {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }

  /* =========================================================
    RESPONSIVE
    ========================================================= */
  @media (min-width: 768px) {
    .cards {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .skills-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
