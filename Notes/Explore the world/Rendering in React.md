# Rendering in react 

### using skeletons or loaders for better UX

Generally, the data shown in the UI is fetched from an API, which result in delay in availability of data. So, till the data is available, to enhance the user experience it is better to show a skeleton UI/ Loaders on the screen indicating something is happening. This can be done using useEffect Hook.



## useEffect Hook

As useState, useEffect also is a normal js fn, provided as an utilty by react. 

useState is to implement side effects in our react components. Side effects are the operations that executes after rendering and doesn't have any direct affect on render cycle.

### Syntax:

```
 useEffect = (function callbackFn(){
    //...side effect code
 }, [dependency1,dependency2])
```

useEffect can be called by passing 2 arguments:

1. callback fn -> this fn is executed when useEffect is called. Also known as effect function.
2. dependencies array -> list of dependencies ( can be a state or normal variable ). Whenever this dependencies changes between renders, the effect fn is executed. 

- Can be empty **[]** -> will execute effect fn only after first render.
- Can be **null** -> will execute effect fn after first and each subsequent render.

**Note: useEffect is called on every render, independent from dependecy array. the array decides the calling of effect function.**

### useEffect for API calls

calling useEffect with empty dependecy array will trigger the effect fn only once, after the first render, which is ideal for calling an API which brings the intial data for the UI. We can update a state variable after getting the data which will again trigger render and populate the UI with actual data.

### calling APIs in React App

calling apis in react is no different then calling APIs in JS. We can use same fetch API provided by browser to call any API and get the data. Fetch returns a promise that needs to be resolved

```
//normal get request
 var res = fetch("api_endpoint");
 const json = await res.json();
```

## Shimmer UI (skeleton UI)

For displaying the loading state of page we use a mock layout of actual UI. This is done to display a similar UI (at least in layout) until actual data comes. Improves the UX, as user can before hand can see the UI.

## Conditional Rendering

When we display different UI based on some condition. Achived by using conditional statements with JSX. Eg. use ternary operator for returning differnet UIs.

```
 const ListComponent = () => (
   return IsLoading ? <Loader / > : 
   \\actual list JSX
 )
```



## Why we need state variables instead of normal vairables

We already know that state vairables trigger re render whenever they are updated. Hence from this we can figure out, we need to use state variables instead of normal JS variables when we need a rerender on their updation. 

An example of this scenario is showing data on the UI directly from state variables, because it is understood whenever the data changes same should be reflected in the UI, to show updated data. Hence need a rerender.

Another example could be the conditional variable used in conditional rendering like isLoading, whenever isLoading is updated we need a rerender to show/hide loading state.

## How a const state variable is updated in React

```
 const [ isLoading, setIsLoading ] = useState(true)
```

in the above code setIsLoading updates the const isLoading variable, how it is done ? 

**Ans:** The isLoading variable is not actually updated. Whenever we call the state variable method, it updates the reference value of state variable, not the actual variable. 

After this change, rerender happens, which calls the function component method again, in which all state variables are again declared, with the updated values. So no two renders uses the same state variable, just the values of them are updated according to the renders.

This actual reference value of the state variable and their assignments to the corresponsing render const variable is taken care by react.

After this the same cycle of react render runs. The function component code is executed.

1. Function code is executed
2. JSX is returned  as React Element which is an object.
3. React then start comparing the current render's virtual DOM (the jsx formed with the updated state variables), with the previous react's virtual DOM element, aka, process known as **RECONCILATION**
4. After calculating the differences, only the required part of DOM is updated.

code example:

```
const Header = () => {

    const [authActionText,setAuthActionText] = useState("Login")

    return <div className="flex justify-between h-16 bg-white shadow-md items-center px-8">
        <div className="logo h-10 flex items-center">
            <img src={Logo} className='h-12' alt="logo" />
        </div>
        <div className="flex items-center gap-8">
            <p className='mr-4'>
                Home
            </p>
            <p className='mr-4'>
                About
            </p>
            <p className='mr-4'>
                Restaurant
            </p>
            <button type="button" className={`p-3 ${authActionText == "Login" ? "bg-green-500":"bg-red-600"}  text-white`} onClick={() => {
                authActionText == "Login" ? setAuthActionText("Logout") : setAuthActionText("Login")
            }}>
                {authActionText}
            </button>
        </div>
    </div>

        }
```

**Explanation:** Onclick of login button the button's text and class is changed. so according above explanation, the render after click only updates the button element in the DOM Tree.

# Loading cycle

**Components Loads -> Render Skeleton (First Render) -> Get Actual Data from an API (useEffect Callback executed) -> Render Actual Data**