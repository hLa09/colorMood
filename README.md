
## Reflection on the Progress
F2/ and F3:
## Sources:
ColorMind: http://colormind.io/api-access/ 
React dev: https://react.dev/learn/react-developer-tools
Firebase/Firestore: https://firebase.google.com/docs/firestore
w3School: https://www.w3schools.com/react/react_jsx.asp
Youtube watched to learning about React: Sam Meech-Ward, Everything you need to know about React js.
Provide todo app: class example, and setup video.

When I started building the mood-based color palette generator in React, I thought it would be pretty simple—just use hooks and APIs. But I quickly hit a wall. Tailwind CSS wouldn’t initialize no matter how many times I reinstalled Node, npm, and NVM. I was frustrated, so I switched to plain CSS just so I could keep making progress. Then, when I tried to use OpenAI’s NLP for mood detection, I got stuck again because of API key issues. Instead of giving up, I created a manual keyword-matching system and used the Colormind API to generate palettes.

Working with useState and useEffect during this process wasn’t just about writing code—it was part of my learning journey. I used state to manage moods, inline editing, and saved palettes, and effects to fetch color palettes only when needed. It felt good to see how hooks could keep the UI responsive and efficient.

Debugging in Vite, React, and Firestore taught me the value of starting simple. I began with plain JS before moving to JSX, which helped me understand component logic better. My project might seem small, but it gave me a real taste of building user interfaces, managing APIs, and adapting when things don’t go as planned. Most importantly, I learned that reflecting on what went wrong and why helped me build a stronger app—and become a more thoughtful developer.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
