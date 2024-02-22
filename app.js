/* 

<div id="parent">

            <div id="child1">
                    <h1>Kaun hu mai</h1>
                    <h2>tu kaun hai be</h2>
            </div>


            <div id="child2">
                        <h1>mai to child 2 hu bc</h1>
                        <h2>mai tera chota bhai hu child 2 siblings yo</h2>

            </div>
</div>


*/


const structure=React.createElement("div",{id:"parent"},

[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"kaun hu mai"),React.createElement("h2",{},"tu kaun hai be")]),
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"main toh child 2 hu bc"),React.createElement("h2",{},"mai tera chota bhai hu child 2 siblings yo")])]


)


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(structure);

