# folder stucture

React doesn't have any specified way gor folder stucture. Generally, we keep a feature related files into a folder into src folder, for eg. login folder will have files like login.js, login.css, loginUtils.js, etc.

for this project ue basic stucture and create a components folder to store all react components files, as we don't have much features as of now.

so we will have all the react components into the component folder
we also makes utils folder where we keep the utility related code. for eg. helper fns, mock data, constants 

## default and named exports

we can export any fn or variable from a ES6 Module/Js file. we can perform export in two ways default and named.

**named exports:** when we use export keyword before the name of entity we are exporting. this type of exports needs to be explicitly defined  the name of export during importing using "{....}"

```
export const mockData = []

import {mockData} from "module_path"
```

**default exports:** when we use export keyword with default before the name of entity we are exporting. this type of export doesn't need to be specified between "{....}". default export is meant to be used when exporting one thing, or exporting a container from which we can access all the vars/fns from it.

```
export default const mockData = []

import mockData from "module_path"
```
## Hooks in React

Hooks are normal JS functions which are provided as utility by REACT. These functions are used in specific cases. We will see the 2 of the most used hooks in react.

### useState:

this is used to create a state variable. A state variable is a special kind of variable, which is when updated the react re-renders the UI. OR we can say when state variable changes react re-renders the UI. 

**Note: React is very optimized in rerendering the DOM, it uses virtual DOM, but the main power of react comes due to this very fast rendering algorithm (React Fiber).**


**Fun fact: The react name is based on being reactive to the changes in the data. The UI should be reactive to the data it displays**

The syntax of useState:

```
const [myStateVariable,setMyStateVariable] = useState("default_value");

first returned thing is the state variable with default variable
second is the function which we must use to change the value of this variable
```

REACT MAIN SELLING POINT - OPTMIZED RERENDERING USING REACT FIBER ALGORITHM.

- On every state change react rerenders the dom. 
- React does this using Virtual DOM.
- Virtual DOM is a Object Representation of Actual DOM. 
- Whenever the state changes a new virtual dom is generated as per the new state.
- Then react compares the difference between the old and new virtual DOM. This step is done in very optmized way in react.
- After calculating the differences, React changes the actual DOM according to it. So, not the whole DOM is scrapped and updated, just the existing one is modified as per differences calculated.

** Things to keep in mind while using useState:

- Dont use useState ->

1. outside functioncal component : purpose of useState is to create a state variable for the func component. declaring outside gives us the error.
2. inside a loop -> same state variable cannot be created again and again by same name, even if name changes, state dynamically created by code can be difficult to maintain in component's life cycle
3. inside conditional statements -> state variable creted conditionally, can lead to a inconsistent component state, leading to more errors. For eg. A state variables used in code, but not created.
