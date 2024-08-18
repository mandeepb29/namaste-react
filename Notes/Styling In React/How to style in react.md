# Different ways to style our React App

1. Normal Plain CSS: A single file containing all the css code which is applied to our React components
2. SASS/SCSS: A better way to write CSS. It is a preprocessor of the CSS, gives us many features on top of plain CSS, like 
    - vairbales, 
    - functions, 
    - mixins (resuable css code), 
    - partials (split css into different files for better stucture), etc
3. Styled Components: A very famous library that let's us create React components with some custom CSS. It basically let's us define html elements with their own css defined to it. We can use these components like normal React components. Many React component libraries like material ui use styled-component to style there components.
This also let's us write CSS in JS (as css is defined in JSX component) and JS in CSS (because of it's template literal code).
4. Use of component libraries: Material UI and Ant Design belongs to these category. These libraries provide us ready-made components which can be modifiable also depending on the library. 
5. CSS frameworks: Bootstrap, Bulma, Tailwind CSS are some examples which provides us ready made classes which we can use in our JSX to apply CSS. 
Now these frameworks have become advanced, have some feature like theming - letting us define our own theme, which lets have multiple themes using same styles, only loading required CSS and not the whole framework code.

## Using tailwind in our React App

Tailwind is a CSS framework that provides us the configurable CSS classes to use into our project.
- It is a utility-first CSS framework, which means we have classes for every style statement in CSS, like display: block we have block class. This small scoped classes - let's us create a large number of styled html elements with the limited set of classes.
- Due to this utility classes we have classes for every css we need, hence tailwind claims that we can accomplish any style directly in html.

### Configuring talwind react with parcel

we need to install tailwind and postcss
postcss it a dependency of tailwind css
then init talwinf config file, this contain the files where tailwind would be use, the theme options, plugins etc
create .postcssrc file to configure tailwindcss for postcss, this is required as Parcel would be using postcss to process tailwind classes
them add the import statements into the main or index.css file. This let the tailwind classes being available for our components use

## Code

```
npm install -D tailwindcss postcss
npx tailwindcss init

.postcssrc

{
  "plugins": {
    "tailwindcss": {}
  }
}

tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

index.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```