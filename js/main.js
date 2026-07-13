// "import" pulls the array in from data.js.
// This file only displays the data, it does not store any.
import { projects } from "./data.js";

const app = document.getElementById("app");

for (const project of projects) {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h2");
  title.textContent = project.name;

  const description = document.createElement("p");
  description.textContent = project.description;

  const tech = document.createElement("p");
  tech.textContent = "Built with: " + project.tech;

  const link = document.createElement("a");
  link.href = project.url;
  link.textContent = "View live";

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(tech);
  card.appendChild(link);
  app.appendChild(card);
}
