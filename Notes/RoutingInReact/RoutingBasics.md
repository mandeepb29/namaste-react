# Routing

In world of SPAs, it means to match correct component according to the browsers URL. React being a library doesn't have it's own router implementation, but there are many options in react ecosystem we can use. 

## React Router DOM:

**react-router-dom** is the most famous router package available, hence we will be exploring this.

### Implementation:

For routing to work we need two things:

1. Routes Configurations
2. Applying that configurations to our app, so it can render acc to the config.

For both the steps react router dom have provided pre built features.

For defining router config we can use **createBrowserRouter**

For router applying the config to our app, we have **RouterProviderElement**.

Syntax:


```
const router = createBrowserRouter(
    [
    {
        path:"",
        element:<App />,
        errorElement: <ErrorElement />
    },
    {
        path:"/about",
        element:<About />
    },
    {
        path:"/contact",
        element:<Contact />
    }
]);

root.render(<RouterProvider router={router} />);
```

**errorElement** specifies a fallback component, which is displayed in the scenarios where route is incorrect (This is most generic case, the error element is rendered when the loader and actions methods for route fails. Read about it more). Kind of a 404 page.

**path** specify for which url all the properties should applied.

## useRouteError 

hook provided by **react-router-dom**. Gives us the details about the error, which can be used to display on the error component or do further processing like logging.

# Types of routing

### 1. Client-Side Routing
### 2. Server-Side Routing

Server side is our old way of routing. We load the whole new html while when directed to certain route. This html page is provided by the server. 
Flow: Route changed -> Request sent for new page to server -> Server returns the html file -> browser loads that html file

Client-Side routing happens completely on browser, without any intervention of server. We request a new page (component) when route is changed, request loads the corresponsing components into the outlet (placeholder for rendering components based on routes). 

# SPAs (Single Page Applications) and Client Side Routing

SPAs that loads and updates the content without refreshing the entire page. Behind the scenes SPAs uses the client-side-routing to achive this behaviour. SPAs are better for UX as no refresh happens giving the website an APP like experience. Smooth and Fast.

*Note: Client side routing is one part of the SPAs. There are other features of SPAs like dynamically updating the UI, without loading. Updating existing UI with new data without refreshing the page.*

## Link and NavLink

Components provided by **react-router-dom** that can be used to navigate to any paths in our app. It is also part of client side routing. 
If we use traditional ancor tag, then page will reload for rendering new component, which does not happen if Link or NavLink is used.


