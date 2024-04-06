import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{"id":"heading"},"Hello World from React!");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(heading);

const parent = React.createElement(
    "div",{"id":"parent"}, 
    [React.createElement("div",{"id":"children1"},
[React.createElement("h1",{},"I'm and h1 tag!"),
React.createElement("h2",{},"I'm and h2 tag!")]),
React.createElement("div",{"id":"children2"},
[React.createElement("h1",{},"I'm and h1 tag!"),
React.createElement("h2",{},"I'm and h2 tag!")])]
);
console.log(parent);
root.render(parent);


