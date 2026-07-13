// Data lives in its own module, separate from the code that displays it.
// "export" makes this array available to any file that imports it.
export const projects = [
  {
    name: "Personal Website",
    description: "My personal site, the long-term project for this course.",
    tech: "HTML, CSS",
    url: "https://arthurflammia.github.io/"
  },
  {
    name: "Platinum Pools",
    description: "MP1: a website for a real client, a pool services company in Rowley, MA.",
    tech: "HTML, CSS",
    url: "https://arthurflammia.github.io/platinum-pools-site/"
  },
  {
    name: "Tip Splitter",
    description: "MP2: an interactive tip calculator with a saved history and session total.",
    tech: "JavaScript, DOM events, arrays",
    url: "https://arthurflammia.github.io/tip-splitter/"
  },
  {
    name: "Weather Now",
    description: "MP3: a weather app that fetches live forecasts from the Open-Meteo API.",
    tech: "fetch, async/await, JSON, localStorage",
    url: "https://arthurflammia.github.io/weather-now/"
  }
];
