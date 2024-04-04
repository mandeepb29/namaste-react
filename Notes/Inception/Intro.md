# Inception (React:Behind the scenes)

React is a JavaScript Library used to build web components. It's code is written in JS, hence after adding that into our project we get many JavaScript methods and properties which help us to create dynamic web components much faster, easier and with less code.

## Adding React to your project

### Using CDN

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

Add script tags of react and react DOM cdn.

React.js is the common file that contains the core code of react library, which is used in creating mobile apps, websites,etc. Simply, this file contains common code of react used in it's different variants.

React DOM js is the js file that contains the code related to DOM manipulation used by the react library. 

## Rendering the first DOM element using React

After we have imported the React CDN links and have access to the React methods

```
//create a React Element Object using createElemet method, 
//--takes the tagname, attributes object and children as parameters and returns react element
//--children can be the text content (no children), a react element (1 children), array of react elements (siblings)
const heading = React.createElement("h1",{},"Hello World from React!");
//create a root from a exisiting DOM element. In this root element, React renders it's all elements
//--takes a dom element and returns a ReactDOMRoot object.
const root = ReactDOM.createRoot(document.getElementById("root"));
//call render method and render the newly created heading tag into the root
//--takes a react element and convert into a DOM element and render it into root
root.render(heading);
//--whenever we call render method on root, the old content is replaced with the newly created dom element.
//--Note: it replaces the content while rendering not append!
```

