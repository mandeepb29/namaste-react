import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorComponent from "./components/Error";
import Restaurant from "./components/Restaurant";
import UserContext from "./utils/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    
    const [user, setUser]= useState("");

    useEffect(() => {
        setUser("Mandeep");
    },[])
    
   return (<React.StrictMode>
  <UserContext.Provider value={{user:user, setUser}}>
          <div className="app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
    </React.StrictMode>
)};

const router = createBrowserRouter(
    [
        {
            path: "",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path:"restaurant/:resId",
                    element: <Restaurant />
                }
            ],
            errorElement: <ErrorComponent />            
        }
    ]);

root.render(<RouterProvider router={router} />);
