import React from "react";
import ReactDOM from "react-dom/client";

const heading =  React.createElement("h1",{"id":"heading"},"Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));

//React Element
const courseName = <span>Namsate React</span>
const Title = () => <h1 id="heading">{courseName} using JSX</h1>

//Functional Component
const HeadingComponent = () => (
    <div className="container">
        {Title()}
        <Title />
        <Title></Title>
        <h1>React Functional Component</h1>
    </div>    
)


root.render(<HeadingComponent/>);

