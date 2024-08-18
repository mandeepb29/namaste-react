# Principle of writing more optmized code

## Single Responsibility Principle

This suggest that each part of a code in React it is a Class or Functional Component, Or it can be a seperate JS file like a service, etc.  should always have one responsibility.

For eg. A component to display user rating should only deal with UI of the the rating, and nothing else. We should not add the code to calculate or fetch user rating after user interaction. This should be done at some another place, probably a service file. Same is true for the service file it should only concern with fetching the data and nothing else. Processing the raw data and be places at some other place.

Following SRA makes our code: 

1. Maintainable
2. Reusable
3. Testable

## Custom Hooks

- We can create even our own custom hooks similar to the one that react and other packages provide. 
- Hooks are nothing but utility function, so we can extract any code that perform one responsibiltiy for example fetching the data.
- Custom hooks work same as a react component, which means we can use useState and useEffect also in them. This happens because react tracks them as well similar to other components.

### Things to keep in mind while creating a hook
1. A single file should have single hook function
2. The filename and hookname should be same
3. Name of hook function should start with use keyword. This help react identify the function as a hook.

Example of custom hook to fetch restaurant details based on ID

```
const useRestaurantDetails = (resId) => {

    const [resInfo,setResInfo]= useState(null);
    console.log("useRestaurantDetails called resinfo - "+resInfo)

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        console.log("fetchData called")
        const res = await fetch(RESTAURANT_URL + resId);
        const json = await res.json();
        setResInfo(json.data);
    }

    return resInfo;
}
```

## Lazy Loading

Lazy loading refers to downloading module (ES6 module/React components code in context of React) code on-demand and not eargarly which is a standard behaviour. 
This is done to decrease the size of initial bundle js file to decrease the loading time.
For large scale applications loading all the modules, when user enters the application is not neccessary hence lazy loading is used.
Lazy loading is also referred with other names, as listed below - 

- Chunking
- Code Splitting
- Dynamic Bundling
- OnDemand loading
- Dynamic imports

### How to achieve lazy loading in React ?

React provides us lazy function, which returns a react component. 
- Takes a callback method known as load, which returns a promise which should resolve and return a object of React Component Type. 
- This load function is only executed when the React component is rendered.

So, lazy basically is a method, which lets you defer the loading component until it is rendered for the first time. 
- The component given by lazy is cached so it is not loaded second time.

### Using Suspense with lazy 

We can wrap the lazy loaded components with <Suspense> tag. This method takes a fallback prop. which is the component to render, until the actual lazy component is being loaded. This is needed to tell react to wait and render a placeholder, until we get the code for actual component.

## Code example

```
import ComponentA from "./path/componentA" //general component import
const ComponentB = lazy(() => import("./path/componentB")

const routes = createBrowserRouter(
    [
        {
            path:"",
            component: <ComponentA />
        },
        {
            path:"pageB",
            component: <Suspense fallback="<Loading />"> <ComponentB /> </Suspense>
        }
    ]
)
```

In the above example, we are lazy loading ComponentB, which is laoded when we redirect to path "pageB". And the componentB is wrapped between suspense tag, which make sure we to render out <Loading> component, a placeholder until actual component code is available.