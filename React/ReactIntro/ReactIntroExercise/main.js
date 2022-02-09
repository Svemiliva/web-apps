const selectRoot = document.getElementById("root");

let orderedlist = React.createElement("ol", { className: "listElements" },
    "Ordered List",
    React.createElement("li", { className: "element" }, "List item 1"),
    React.createElement("li", { className: "element" }, "List item 2"),
    React.createElement("li", { className: "element" }, "List item 3"),
);


let items = [
    "1 cup Fresh Basil",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
];

let ingredientsList = React.createElement(
    "ul",
    { className: "ingredients" },
    items.map((ingredient, i) => React.createElement("li", { id: i }, ingredient))
);


let rootElement = React.createElement("div", null, orderedlist, ingredientsList)

ReactDOM.render(rootElement, selectRoot);       //we can RENDER only once in react >>> here we append rootElement to the selectRoot element