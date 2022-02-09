/*
3 ways to create Components:
- createClass >>> used only for demonstration, its an old way,
- ES6 Classes,
- stateless functional components.
*/

//React.createClass - OLD WAY vvv

const IngredientsList = React.createClass({
    displayName: "IngredientsList",
    render() {
        return React.createElement("ul", {
            "className": "ingredients"
        },
            React.createElement("li", null, "1 Apple"),
            React.createElement("li", null, "1 Banana"),
        )
    }
})


//React.Component is an abstract class that we can use to build new React components. Create custom components through inheritance by extending this class with ES6 syntax

class IngredientsList extends React.Component {
    renderListItem(ingredient, i) {
        return React.createElement("li", { key: i }, ingredient)
    }
    render() {
        return React.createElement(
            "ul",
            { className: "ingredients" },
            this.props.items.map(this.renderListItem))
    }
}



//Functional components are functions, not objects. They do not have a "this" scope. Use them as much as possible in our applications. Functional components are functions that take in properties and return a React element. 

//We combine the functionality of renderListItem and render into a single function:

const IngredientsList = props => (
    React.createElement("ul", { className: "ingredients" },
        props.items.map((ingredient, i) =>
            React.createElement("li", { key: i }, ingredient)
        )
    )
)

//Every user interface is made up of parts. In React, we describe each of these parts as a COMPONENT. When considering a user interface that you want to build, look for opportunities to BREAK DOWN ELEMENTS INTO REUSABLE PIECES.


/*JSX - An alternative to typing out verbose React.createElement calls is JSX. JavaScript extension that allows us to define React elements using syntax that looks similar to HTML.

In JSX, an elements type is specified with a tag.
The tags attributes represent the properties.
The elements children can be added between the opening and closing tags.
You can also add other JSX elements as children.

JSX allows you to add components as children of other components - nested components.

JavaScript Expressions are wrapped in curly braces and indicate where variables shall be evaluated and their resulting values returned:
<h1> {this.props.title}</h1>

The JavaScript that is added in between the curly braces will get evaluated:
<h1> { `Hello ${this.props.title}` }</h1>

<h1> { props.title.toLowerCase() }</h1>


Since "for" and "class" are reserved words in JavaScript, please note that in React elements you have to use "htmlFor" and "className" respectively instead.

JSX is JavaScript, so you can incorporate JSX directly inside of JavaScript functions.

<ul>
    bthis.props.ingredients.map((ingredient, i) =>
        <li key={i}>ingredient}</li>
    )}
</ul>


FUNCTIONAL COMPONENT - JSX

var SampleComponent = function(props){
    return(
        <h1>Hi again!</h1>
    )
}

or in ES6:

const SampleComponent = props => <h1>Hi again!</h1>



CLASS COMPONENT - JSX
Extends React.Component:

class SampleComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <h1>Hi again!</h1>
        )
    }
}

JSX should be wrapped in braces if spread across multiple lines.


JSX Sample:

    <h1>Sample</h1>
transforms to:
    React.createElement("h1", null, "Sample");

    <Sample name={getName()}>Sample text</Sample>
transforms to:
    React.createElement(Sample, { name: getName() }, "Sample text");

*/