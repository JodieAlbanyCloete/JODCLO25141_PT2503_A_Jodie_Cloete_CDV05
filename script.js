console.log("script.js linked");

const app = document.getElementById("app");

function renderPortfolio(data) {
  app.innerHTML = `
    <header class="hero">
      <div class="hero-text">
        <h1>Hello, I'm <span>${data.hero.name}</span></h1>
        <h2>${data.hero.title}</h2>
        <p>${data.hero.description}</p>
        <button class="btn">View My Work</button>
      </div>
      <div class="hero-img">
        <img src="${data.hero.image}" alt="Profile" />
      </div>
    </header>

    <section class="about">
      <h2>About Me</h2>
      <p>${data.about.text}</p>
    </section>

    <section class="projects">
      <h2>Projects</h2>
      <div class="project-grid">
        ${data.projects
          .map(
            (project) => `
          <div class="project-card">
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <button class="btn">View Project</button>
          </div>
        `
          )
          .join("")}
      </div>
    </section>

    <section class="contact">
      <h2>Contact</h2>
      <p>Get in touch: <strong>${data.contact.email}</strong></p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button class="btn">Send</button>
      </form>
    </section>
  `;
}

renderPortfolio(portfolioData);
