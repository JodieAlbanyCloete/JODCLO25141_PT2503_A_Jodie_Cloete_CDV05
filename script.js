console.log("script.js linked");

const skills = ["HTML", "CSS", "SASS", "JS", "JQUERY", "GIT", "NPM"];

const projects = [
  { img: "kanban-board.png", title: "Project 1" },
  { img: "desktop-view.png", title: "Project 2" },
];

const contactInfo = {
  email: "cloete.jodie@gmail.com",
  phone: "+27 76 384 1892",
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

// ----- COMPONENT FUNCTIONS -----

// function navbar() {
//   return `
//     <header class="navbar">
//       <nav>
//         <a href="#about">About me</a>
//         <a href="#skills">My skills</a>
//         <a href="#portfolio">Portfolio</a>
//         <a href="#contact">Contacts</a>
//       </nav>
//     </header>
//   `;
// }

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
      <p>Copyright © 2025 Svetlana</p>
    </footer>
  `;
}
