import React from "react";
import ReactDOM from "react-dom/client";

/* 
const structure=React.createElement("div",{id:"parent"},

[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"kaun hu mai"),React.createElement("h2",{},"tu kaun hai be")]),
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"main toh child 2 hu bc"),React.createElement("h2",{},"mai tera chota bhai hu child 2 siblings yo")])]


) */

//component : just some normal js function which returns some jsx code or react object
// componet's first letter must be a capital one
const Title = () => <h1 id="heading">This is my paragraph title</h1>;

const Paragraph = () => (
  <div id="parent">
            <Title />
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, minima
            velit sapiente sunt error, voluptatem, doloribus obcaecati laudantium sint
            saepe odio numquam nesciunt hic tenetur pariatur aliquam maiores!
            Voluptatum, maiores!
            </p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Paragraph />);
