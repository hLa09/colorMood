
## Reflection on the Progress
F2/ and F3:
## Sources:
ColorMind: http://colormind.io/api-access/ 
React dev: https://react.dev/learn/react-developer-tools
Firebase/Firestore: https://firebase.google.com/docs/firestore
w3School: https://www.w3schools.com/react/react_jsx.asp
Youtube watched to learning about React: Sam Meech-Ward, Everything you need to know about React js.
Provide todo app: class example, and setup video.

I tried to attempt include Tailwindcss to my project but I keep having issue of trying to init them, and even though I have npm install them already and it is in the package.json. So I decided to just go with the css style for an easier way to debug them when I need to load function and review them. I even tried to uninstall all the node.js, npm, nvm files and reinstall - still does not work so I decide to just proceed without them. Not just the tailwindcss that I have restriction of access to, but there's an NLP (natural language processor) that I want to implement to the project, to get a more refine mood detection and extraction to color. Given that, I just find another way of implement them so that I can figure out why I can't access them. And yes I did tried to import, force through terminal -- it still show no result.

### Challenges: 

Initially I have in mind were a game project, but consider tight timeline and skill I have. I have to find another project that smaller and more focus on improving my skill rather than trying to do big. I decided to listening to suggestions, and working on the Color generated app based on user input: mood and/or description. I am not familiar with OpenAI api, and could not get the API key to work so I decide to just manually create a word list to extract the matching mood. Which I use Colormind API to both displaying random color palatte and generate color based on user input. It was a rollercoaster to just debug everything, and learning where and how react does. I am glad to find the react.js guide from Sam Meech-Ward, and the setup video offer from the class by instructor Raghav. Though given the compatibility, and number of errors displaying that many files were not supported, causes me to download and re-download number of time before getting to start the project.

With this project I uses react jsx, api, js, css, and vite as well try to use firestore. I still rely on the js files because jsx and js are still the same - jsx just written in a simplier way that unified things. But relying on js, allow me to grapsh the function a little bit better, as my skill in js are not that advance to straight up rely on just jsx. In the project I have uses useState and useEffect part of react hook to get my function running smoothly, I implemented the use state in various components and app.jsx, and useEffect in creating Random color palettes and app.jsx. 




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
