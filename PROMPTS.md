# PROMPTS.md

# ABTalks Student Experience Redesign

## AI Usage Log

This document records the major AI prompts and development workflow used while building this project during the hackathon.

The project was developed iteratively using AI-assisted development. AI was used to accelerate planning, implementation, debugging, UI refinement, and code review. Every generated change was reviewed, tested, and integrated by the team before being committed.

---

# AI Tools Used

## ChatGPT (OpenAI)

Used for:

- Project planning
- React architecture
- Component design
- Dashboard implementation
- Challenge flow planning
- Certificate design ideas
- UI/UX improvements
- Accessibility suggestions
- Responsive design
- Git workflow guidance
- Debugging
- ESLint fixes
- Build troubleshooting
- Code review

---

## Cursor AI

Used for:

- AI-assisted code editing
- Refactoring
- Component generation
- Code completion
- Productivity improvements

---

## Grok (xAI)

Used for:

- Dashboard UI improvements
- Certificate page improvements
- Premium UI polish
- Code cleanup
- Visual consistency review
- Accessibility suggestions

---

# Development Workflow

The application was built incrementally instead of generating the entire project at once.

Typical workflow followed during development:

1. Plan the feature.
2. Generate an initial implementation using AI.
3. Review and modify the generated code manually.
4. Test locally.
5. Fix issues and refactor where necessary.
6. Commit the completed feature.
7. Repeat for the next feature.

---

# Major Prompts Used

## Prompt 1 — Project Planning

Design a modern student experience platform for ABTalks.

Requirements:

- 60-Day coding challenge
- Daily missions
- Student dashboard
- Progress tracking
- Portfolio
- Certificate
- Responsive design
- Modern UI

---

## Prompt 2 — Application Structure

Create a React + Vite application structure using reusable components.

Organize the project with:

- Pages
- Components
- Context
- Routing
- Shared data

Keep the structure clean and maintainable.

---

## Prompt 3 — Landing Experience

Design a modern landing page for students.

Focus on:

- Hero section
- Features
- Testimonials
- Call to action
- Responsive layout
- Modern gradients
- Smooth animations

---

## Prompt 4 — Dashboard

Create a premium student dashboard.

Include:

- Current mission
- Progress
- XP
- Streak
- Projects
- Achievements
- Leaderboard
- Weekly activity

Use responsive layouts and modern UI.

---

## Prompt 5 — Challenge Flow

Implement the challenge experience.

Requirements:

- Continue challenge
- Daily missions
- Progress updates
- Mission completion
- Challenge navigation

---

## Prompt 6 — Challenge Context

Implement a ChallengeContext to manage:

- Current day
- Completed days
- XP
- Streak
- Projects
- Progress

without changing routing.

---

## Prompt 7 — Dynamic Dashboard

Replace static values with ChallengeContext data.

Update:

- XP
- Streak
- Projects
- Progress
- Current mission

---

## Prompt 8 — Mission System

Create dynamic mission information.

Display:

- Mission title
- Description
- Difficulty
- Estimated time
- Focus area

based on the current challenge day.

---

## Prompt 9 — Portfolio

Improve project cards.

Include:

- GitHub repository
- Live demo
- Skills used
- XP earned
- Completion date
- Better badges
- Responsive layout

---

## Prompt 10 — Achievements

Create dynamic achievements based on:

- XP
- Completed challenges
- Projects
- Streak

---

## Prompt 11 — Activity & Leaderboard

Improve the activity timeline and leaderboard.

Focus on:

- Better hierarchy
- Cleaner spacing
- Responsive layout
- Improved visual presentation

---

## Prompt 12 — Dashboard UI Polish

Improve the existing dashboard.

Focus on:

- Glassmorphism
- Better typography
- Better spacing
- Better cards
- Hover effects
- Better animations
- Responsive layouts
- Accessibility

Do not change application logic.

---

## Prompt 13 — Certificate Experience

Continue working on the same branch.

Improve only the Certificate page and remaining UI polish.

Create a premium certificate experience.

Requirements:

- Elegant certificate layout
- Gold accent styling
- Better typography
- Certificate border
- Glass effect
- Certificate ID
- Completion date
- User name
- Signature section
- Print-friendly layout
- Better success state
- Better locked state
- Better animations
- Responsive on mobile and desktop
- Improve accessibility

Do NOT change application logic.

Run lint.

Run production build.

Fix every issue.

Commit:

feat: certificate experience and final UI polish

---

## Prompt 14 — Dashboard Improvements

Continue working on the same branch.

Improve only the dashboard UI.

Focus on:

- Premium glassmorphism
- Better spacing
- Empty portfolio state
- Locked certificate toast
- Improved responsiveness
- Better hover effects
- Better card layouts
- Accessibility improvements

Do not change ChallengeContext or routing.

---

## Prompt 15 — Final Review

Review the complete application.

Improve:

- Accessibility
- Responsiveness
- Performance
- UI consistency
- Code quality

Remove:

- Dead code
- Unused imports
- Unused variables

Run:

```bash
npm run lint
npm run build
```

Fix all issues before committing.

---

## Prompt 16 — Debugging & Git

Use AI assistance to resolve:

- ESLint issues
- Build failures
- React warnings
- Import issues
- Merge guidance
- Git workflow
- Deployment preparation

---

# Validation

The application was repeatedly tested during development using:

```bash
npm run dev
npm run lint
npm run build
```

Git was used throughout development with multiple incremental commits documenting the evolution of the project.

---

# Final Notes

AI was used as a collaborative development assistant for planning, implementation, debugging, refactoring, and UI improvements.

The team reviewed all AI-generated output, integrated the final implementation, verified functionality locally, managed the Git history, prepared the deployment, and completed the final submission.