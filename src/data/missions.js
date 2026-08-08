export const MISSIONS = [
  {
    day: 1,
    title: "Build a Personal Portfolio",
    description:
      "Create your personal portfolio using HTML and CSS. Include your introduction, skills, projects and contact section.",
    difficulty: "Easy",
    time: "2 Hours",
    focus: "HTML & CSS",
    resources: [
      "https://developer.mozilla.org/",
      "https://www.freecodecamp.org/",
    ],
  },

  {
    day: 2,
    title: "Responsive Layout",
    description:
      "Convert yesterday's portfolio into a fully responsive website using Flexbox and Grid.",
    difficulty: "Easy",
    time: "1 Hour",
    focus: "Responsive Design",
  },

  {
    day: 3,
    title: "Navigation Bar",
    description:
      "Create a professional responsive navbar with mobile menu.",
    difficulty: "Easy",
    time: "45 Minutes",
    focus: "CSS",
  },

  {
    day: 4,
    title: "Landing Page",
    description:
      "Design a modern landing page with hero section and CTA.",
    difficulty: "Easy",
    time: "1 Hour",
    focus: "UI Design",
  },

  {
    day: 5,
    title: "JavaScript Basics",
    description:
      "Add DOM interactions and event handling.",
    difficulty: "Medium",
    time: "1 Hour",
    focus: "JavaScript",
  },

  {
    day: 6,
    title: "Calculator App",
    description:
      "Build a calculator using JavaScript.",
    difficulty: "Medium",
    time: "1.5 Hours",
    focus: "JavaScript",
  },

  {
    day: 7,
    title: "To-Do App",
    description:
      "Create a task manager with LocalStorage.",
    difficulty: "Medium",
    time: "2 Hours",
    focus: "LocalStorage",
  },

  {
    day: 8,
    title: "Weather App",
    description:
      "Use Weather API to fetch live weather.",
    difficulty: "Medium",
    time: "2 Hours",
    focus: "API",
  },

  {
    day: 9,
    title: "Movie Search",
    description:
      "Search movies using TMDB API.",
    difficulty: "Medium",
    time: "2 Hours",
    focus: "REST API",
  },

  {
    day: 10,
    title: "React Basics",
    description:
      "Build your first React project.",
    difficulty: "Medium",
    time: "2 Hours",
    focus: "React",
  },
];

for (let day = 11; day <= 60; day++) {
  MISSIONS.push({
    day,
    title: `Project Challenge ${day}`,
    description: `Complete today's development challenge and upload your project.`,
    difficulty:
      day <= 20
        ? "Medium"
        : day <= 40
        ? "Hard"
        : "Advanced",
    time: "1-2 Hours",
    focus:
      day <= 20
        ? "React"
        : day <= 40
        ? "Frontend"
        : "Full Stack",
  });
}