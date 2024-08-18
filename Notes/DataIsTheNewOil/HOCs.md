# Higher Order Components in React (HOCs)

A higher-order component (HOC) is an advanced element for reusing logic in React components. Components take one or more components as arguments, and return a new upgraded component.

### Facts About HOCs #
1. We don’t modify or mutate components. We create new ones.
2. A HOC is used to compose components for code reuse.
3. A HOC is a pure function. It has no side effects, returning only a new component.

## In summary:
The HOC creates a new component that receives props.
The new component handles additional functionality (like click tracking) and passes the props down to the wrapped component.
When you render the enhanced component (TrackedComponent), it receives props just like any other React component, and these props are then passed down to the original component (MyComponent).

## When to use HOC
HOC can be used when we need to implement some common functionality into various components. We can extract that logic into HOC to make it available to multiple components. Promotes the **DRY** principle of software development.

### Examples
1. Show loader when component's data is not present
2. Show data only when user is authenticated (conditional rendering)
3. Show a component with special styles or additional UI components
4. Have some common props into various components

# Lifting the state up in react

moving the state of child components to their closest common parent. This is done to control the child components behaviour from the parent itself.

steps to lift the state up:

1. Remove state from the child components.
2. Pass hardcoded data from the common parent.
3. Add state to the common parent and pass it down together with the event handlers.
4. In this event handlers we manage the updation of parent's state

# Props Drilling in React

Props drilling is a phenomenon that occurs when props are passed down to multiple compoenents in a component tree. This is usually done to pass the data to a component that which is not the direct child. 

This is not a good practice has we add unneccessary props to the intermiediate components...increase in component's data and makes the code hard to debug.

# context API

Context API lets us create, modify and accessed **Contexts**. Contexts are the app data that can be accessed from anywhere in the app. They let us store and access data from any component of our app.

Features of context API;

1. CreateContext fn -> createContext is used to create Context in which we can pass the default value.
2. useContext hook ->  use to get the value inside the context. Need to pass the context name inside it.
3. Provider -> We can create a Provider Element of any context using context_name.Provider syntax. this lets us pass a updated value of the context to the elements that comes under them. 

Note: If there is no provider in the above tree of the component rendering the context than it uses the default value we gave while creating the context.

We can also update the context values dyncamically by passing a function for updating that value itself in context. Just like we do to update props from the child components. This is kind of a hack, but this does the job effectively.


## solve props drilling issue using context API


