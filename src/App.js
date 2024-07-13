import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));




const App = () => {
    console.log(<Body />)
    console.log(document.getElementsByTagName("body"));
    return (<div className="app">
    <Header />
    <Body />
    </div>)
    
}


root.render(<App/>);


