<script>
  export let data;
  import image from './image_1.jpg';
</script>

<div class="back-link-container">
  <a href="/writing" class="back-link">← Back to Writings</a>
</div>

<article class="writing-article">
  <div class="title-section">
    <h1>{data.meta.title}</h1>
    <div class="subtitle-date">
      <p class="subtitle">{data.meta.subtitle}</p>
      <p class="muted date">{data.meta.date}</p>
    </div>
  </div>

  <hr class="divider" />

  <div class="content" style="text-align: justify;">
    <div class="image-container">
      <img src={image} alt="description" />
    </div>

    <p>
      A dear friend of mine wrote a beautiful poem for her graduation day. In it, she hoped that her university, UUM, could grow better, that the students could grow better, that she herself could grow better. These are all noble outward-facing sentiments. In contrast, I like to be inward-facing. I’d like to write about how my university, UMS, has shaped me as a person.
    </p>

    <p>
      &emsp;&emsp;Four years ago, I entered with fear. I was set on becoming a civil engineer up until the final moment because I thought to myself, being the ignoramus I was – I think SWE is something I can be decent at because I like computers. However, I had nary any exposure to computer science (CS) outside of hobbyist pursuits. My fear was that the lack of a formal foundation to CS would make me fall behind.
    </p>

    <p>
      &emsp;&emsp;That’s why when I first started the degree, I was very attentive. I took notes, recorded lectures, watched online tutorials and played with code in my free time. When my first semester results came in and I got an SGPA of 3.96, I honestly thought it was a fluke. The next semester I got a 3.92, then a 3.96 after that, after which I figured “oh my, I must be on to something”. So, I kept studying. I didn’t want to look like an impostor.
    </p>

    <p>
      &emsp;&emsp;I felt my first year was robbed from me. In contrast to my sister who will experience four full years of the physical campus experience, I lost one year to the pandemic. It is a firm belief of mine that if I got that time, I could know my peers way better than I do now. That said, I’m grateful for the opportunity to make the friends I’ve made along the way. Friends who’ve accepted me for my quirks and oddities.
    </p>

    <p>
      &emsp;&emsp;Several places around the campus are burned into my mind for I’ve made fond memories there. I’m grateful that these memories I’ve made, I’ve made with my friends. The library, where I’ve grinded assignments, exam prep, and killed time. The padang kawad, where we go for tamu to eat snacks after evening classes (some of these classes we join together with due reluctance). The ODEC beach, where we took in the warm sea breeze and salty scent of the air. The lecture halls, where we almost always sat to the middle-left. During the large gaps of time between lectures, we would drive wherever we desired.
    </p>

    <p>
      &emsp;&emsp;Of course, being the introvert I am, I appreciate being able to recharge by myself. I find driving around the campus alone therapeutic. I’ve done so often. I’ve walked many of the concrete paths as well. The pink mosque and chancellery offer a splendid view in the day. The yellowish hue from the streetlights makes the roads look very pretty at night. To me, all of this would always be a welcome respite from the hell that the course inflicted on me.
    </p>

    <p>
      &emsp;&emsp;I anticipate graduation day with a due sense of sorrow. Perilous as it was, my degree life was systematic. Chaotic yet still foreseeable. I will be walking out of that Chancellor’s hall into an unpredictable future.
    </p>

    <p>
      &emsp;&emsp;At the same time, I look forward to graduation day with a right sense of happiness. A tempered happiness. I made it through my perilous four years. Instead of a blue book, I’ll be getting a black book when I step on that stage. At least on that day, I can feel that my efforts were worth it.
    </p>

    <p>
      &emsp;&emsp;Perhaps more important than that, I see graduation day as a day of commemoration. “It takes a village to raise a child”; I use this proverb loosely. For if it weren’t for the institution and the people that raised this person – a participant in the adult world with just the slightest tinge of childlike wonder – I wouldn’t be here today.
    </p>
  </div>
</article>

<style>
  .back-link-container {
    margin-bottom: 1.5em;
    display: block;
  }

  .back-link {
    text-decoration: none;
    color: var(--text);
    font-weight: 500;
    font-size: 0.95em;
    transition: color 0.2s ease;
  }

  .back-link:hover {
    color: var(--accent-light);
  }

  .title-section h1 {
    margin-bottom: 0.25em;
    color: var(--text);
  }

  .subtitle-date {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
  }

  .subtitle {
    margin: 0;
    font-style: italic;
    color: var(--text-muted);
  }

  .date {
    margin: 0;
    color: var(--text-muted);
  }

  .content p {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 900px) {
    .subtitle-date {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5em;
    }

    .date {
      font-size: 0.85em;
    }
  }

  .divider {
    border: 0;
    height: 1px;
    background: var(--border);
    margin: 1.5em 0;
  }

  .image-container {
    text-align: center;
    margin: 2rem 0 1.5rem 0;
  }

  .image-container img {
    max-width: 50%;
    border-radius: 12px;
  }

  .content {
    text-align: justify;
    line-height: 1.6;
    color: var(--text);
  }

  @media (max-width: 768px) {
    .image-container img {
      max-width: 75%;
    }
  }
</style>
