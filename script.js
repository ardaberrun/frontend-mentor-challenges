const challenges = [
  {
    challengeId: 1,
    name: "Stats preview card component",
    link: "./projects/1-stats-preview-card-component/index.html",
    challengeLink: "https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62",
    image: "./projects/1-stats-preview-card-component/design/desktop-preview.jpg",
    techs: ["html","css"]
  },
  {
    challengeId: 2,
    name: "Column preview card component",
    link: "./projects/2-3column-preview-card-component/index.html",
    challengeLink: "https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-",
    image: "./projects/2-3column-preview-card-component/design/desktop-preview.jpg",
    techs: ["css","html"]
  },
  {
    challengeId: 3,
    name: "FAQ accordion card",
    link: "./projects/3-faq-accordion-card/index.html",
    challengeLink: "https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam",
    image: "./projects/3-faq-accordion-card/design/desktop-preview.jpg",
    techs: ["html","css"]
  },
  {
    challengeId: 4,
    name: "Social proof section",
    link: "./projects/4-social-proof-section/index.html",
    challengeLink: "https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA",
    image: "./projects/4-social-proof-section/design/desktop-preview.jpg",
    techs: ["html","css"]
  },
  {
    challengeId: 5,
    name: "Four card feature section",
    link: "./projects/5-four-card-feature-section/index.html",
    challengeLink: "https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK/",
    image: "./projects/5-four-card-feature-section/design/desktop-preview.jpg",
    techs: ["html","css"]
  },
  {
    challengeId: 6,
    name: "Huddle landing page with a single introductory section",
    link: "./projects/6-huddle-landing-page/index.html",
    challengeLink: "https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0",
    image: "./projects/6-huddle-landing-page/design/desktop-preview.jpg",
    techs: ["css","html"]
  },

];

const app = document.getElementById("cards");

challenges.forEach((challenge) => {
  let card = document.createElement("div");

  let techArea = ''

  challenge.techs.forEach(tech => techArea += `<p class="${tech}">${tech.toUpperCase()}</p>`)

  card.innerHTML = `
  <div class="card">
  <div class="card-image">
    <img src="${challenge.image}" alt="" srcset="">
  </div>
  <div class="card-body">
    <div class="card-body-techs">
      ${techArea}
    </div>
    <div class="card-body-title">
    <h3> <a href="${challenge.challengeLink}" target="_blank">${challenge.name}</a></h3>
    </div>
    <div class="card-body-footer">
      <button>
        <a href="${challenge.link}" target="_blank">View My Solution</a>
      </button>
    </div>
  </div>
</div> 
    `;

  app.appendChild(card);
});
