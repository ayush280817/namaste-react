// let heading =document.createElement("h1");
// let root=document.querySelector("#root");
// heading.textContent="Jai Shree ram"
// root.appendChild(heading);
// const heading = React.createElement("h1",{id:"heading"},"Jai Shree Ram");

// const root = ReactDOM.createRoot(document.querySelector("#root"))

// root.render(heading);


//how to create this nested tag using react

// <div id="parent">

// <div id="#child">

// <h1></h1>

// </div>

// </div>
// jyhgfdsrgthygbvfdghynjgf

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{id:"heading1"},"i am h1 tag"),
        React.createElement("h2",{id:"heading2"},"i am h2 tag")]),
        React.createElement("div",{id:"child"},[
            React.createElement("h1",{id:"heading1"},"i am h1 tag"),
            React.createElement("h2",{id:"heading2"},"i am h2 tag")])
])

const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
