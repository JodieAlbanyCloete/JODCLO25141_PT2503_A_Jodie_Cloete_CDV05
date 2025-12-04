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

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");

  // Set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particlesArray = [];
  const numberOfStars = 150; // adjust how many stars

  // Particle / Star class
  class Star {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1; // small size
      this.speedX = Math.random() * 0.3 - 0.15;
      this.speedY = Math.random() * 0.3 - 0.15;
      this.opacity = Math.random();
      this.delta = Math.random() * 0.02 + 0.01; // opacity change speed
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // bounce off edges
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

      // twinkling effect
      this.opacity += this.delta;
      if (this.opacity <= 0 || this.opacity >= 1) this.delta *= -1;
    }

    draw() {
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.shadowBlur = 5;
      ctx.shadowColor = "#fff";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Initialize stars
  function initStars() {
    for (let i = 0; i < numberOfStars; i++) {
      particlesArray.push(new Star());
    }
  }
  initStars();

  // Animate stars
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach((star) => {
      star.update();
      star.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();

  // Handle window resize
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
