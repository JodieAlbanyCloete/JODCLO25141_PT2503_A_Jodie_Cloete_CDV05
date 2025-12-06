console.log("script.js linked");

const skills = ["HTML", "CSS", "REACT", "JS", "TAILWIND", "GIT", "NPM"];

const projects = [
  {
    img: "images/kanban-board.png",
    title: "Project 1 - Kanban-board",
    description:
      "A simple task management app to organize and track your workflow using a Kanban board - using HTML, CSS and Javascript.",
    link: "https://github.com/JodieAlbanyCloete/JODCLO25141_PT2503_A_Jodie_Cloete_JSLPP",
  },
  {
    img: "images/desktop-view.png",
    title: "Project 2- Podacst Landing Page",
    description:
      "A responsive React podcast landing page showcasing content and interactive components.",
    link: "https://github.com/JodieAlbanyCloete/JODCLO25141_PT2503_A_Jodie_Cloete_DJS03",
  },
];

const contactInfo = {
  email: "cloete.jodie@gmail.com",
  phone: "+27 76 384 1892",
  social: "LinkedIn",
};

// ----- MAIN RENDER FUNCTION -----

const app = document.getElementById("app");

app.innerHTML = `
 
  ${hero()}
  ${about()}
  ${skillsSection()}
  ${portfolioSection()}
  ${contactSection()}
  ${footer()}
`;

function hero() {
  return `
    <section class="hero">
      <div class="hero-text">
        <h1>Hi there! My name is Jodie and<br>I'm a front-end developer </h1>
        <a href="#" class="btn">Download the CV</a>
      </div>
    </section>
  `;
}

function about() {
  return `
    <section id="about" class="about">
      <h2>About me</h2>
      <p>
        Former ESL teacher turned front-end developer — still teaching, just now I teach websites how to behave.
      </p>
    </section>
  `;
}

function skillsSection() {
  return `
    <section id="skills" class="skills">
      <h2>My skills</h2>
      <div class="skills-list">
        ${skills.map((skill) => `<span>${skill}</span>`).join("")}
      </div>
    </section>
  `;
}

function portfolioSection() {
  return `
    <section id="portfolio" class="portfolio">
      <h2>Portfolio</h2>
      <div class="portfolio-container">
        ${projects
          .map(
            (p) => `
              <div class="card">
                <img src="${p.img}" alt="${p.title}">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                  <h3><a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.link}</a></h3>
               
            </div>
            
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function contactSection() {
  return `
    <section id="contact" class="contact">
      <h2>Contacts</h2>
      <div class="contact-grid">
        <div>
          <p class="label">Email</p>
          <p>${contactInfo.email}</p>
        </div>
        <div>
          <p class="label">Telephone</p>
          <p>${contactInfo.phone}</p>
        </div>
        <div>
          <p class="label">Social media</p>
          <p>${contactInfo.social}</p>
        </div>
      </div>
    </section>
  `;
}

function footer() {
  return `
    <footer class="footer">
      <p>Copyright © 2025 JodieC</p>
    </footer>
  `;
}
