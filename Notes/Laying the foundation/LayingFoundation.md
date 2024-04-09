# Laying the foundation

## Adding our parcel command to npm scripts

Add the command name and corresponding script to be executed. For eg. adding command for dev and prod build we will add start and build commands under scripts

```
"scripts": {
    "start":"parcel HTMLCSS/index.html",
    "build":"parcel build HTMLCSS/index.html",
    "test": "jest"
  }
```

Now we can execute these parcel scripts using npm instead using npx

## JSX 

JSX gives us the syntax to create React Elements using simpler syntax than the one used in React.createElement. JSX provides HTML like syntax in JS. JSX is easy to read and write for developers.

```
const heading = React.createElement("h1",{"id":"heading"},"Namaste React");

const headingJSX = <h1 id="heading">Namsate React using JSX</h1> //jsx syntax
```

JSX is also not pure javascript, as javascript doesn't contain html tags in it. A pure javscript (ECMAScript code) is the code that is understood by browser's JS Engine.

### How JSX replaces the reactCreateElement syntactically?

This is done by a transpiler. Transpiler which is babel in case of Parcel, transpile the JSX written into React.createElement, which gives us ReactElement.

So, we can say JSX is equivalent to the function React.createElement. Also we need to note that JSX is html, there are many syntactical differences between JSX and HTML, like the attribute names in JSX is in camelcase notation and HTML it is small case.

JSX -> React.createElement -> React Object -> root.Render(ReactObject) -> HTML DOM Element.

## React Components

React Components are of two types - **Functional Components (most used)** and **Class Components**

### Functional Components
 
Functional Components are JavaScript Functions that returns JSX or React Element (can be a simple one or nested).

Example:
```
const HeadingComponent = () => {
    return <h1>React Functional Component</h1>
}
```

**Note: The name of React Component should always start with capital letter** 

### Rendering a React Component

Functional components can be rendered by putting the functions name in angular brackets <>.

```
root.render(<HeadingComponent/>);
```

### Creating Component Composition

We can use one React component into another using the same <> syntax round Component Name. This usage of component into another component is known as **Component Composition**

```
const HeadingComponent = () => (
    <div className="container">
        <Title />
        <h1>React Functional Component</h1>
    </div>    
)

root.render(<HeadingComponent/>);
``` 

Behind the scenes: 

1. The component composition is comverted into a React Element that React can understand and render.
2. At the time of rendering the React Elements are converted into DOM elements
3. This DOM elements are then seen in browser.

### Using JavaScript inside JSX

We can write JS code inside JSX inside curly braces {}. Any valid JavaScript code will work here. Infact, we can also put React Elements inside this curly braces as React Element is nothing but **JS Objects**

```
//React Element
const courseName = <span>Namsate React</span>
const title = <h1 id="heading">{courseName} using JSX</h1>

//Functional Component
const HeadingComponent = () => (
    <div className="container">
        {title}
        <h1>React Functional Component</h1>
    </div>    
) 
```

### XSS Attack (Cross Site Scripting) Handling in JSX

JSX by default sanitizes the HTML Markup before rendering. Hence, there could be any type of value inside the Variables we use in {} it will get escaped by the JSX by default, so we don't need to worry about the XSS attacks.

### Different ways of referencing React Components inside JSX.

1. {Title()}
2. <Title />
3. <Title></Title>


