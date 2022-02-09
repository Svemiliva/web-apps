/* With Ivan Balic 03.08.2021. 18:00

In Functional Programming functions are basic units of work, which means everything centers around them. 

A FUNCTION IS any callable expression that can be evaluated. Functions can return either a computed value or undefined back to the caller.

Functional Programming is part of a bigger paradigm called DECLARATIVE PROGRAMMING.

DECLARATIVE PROGRAMMING is a style of programming where applications are structured in a way that prioritizes describing what should happen over defining how it should happen.

IMPERATIVE PROGRAMMING is a style of pgrogramming that is only concerned with how to achieve results with code. 
*/

//IMPERATIVE PROGRAMMING

const array = [];

for (let i = 0; i < 10; i++) {
    array.push(i);
}



//DECLARATIVE PROGRAMMING >>> GOOD PRACTICE

const range = (from, to) => {
    const array = [];
    for (let from = 0; from < to; from++) {
        array.push(from);
    }
    return array;
}

const array = range(0, 10);


/* Functional Concepts:

1. Immutability,
2. Pure Functions,
3. Data Transformations,
4. Higher-Order Functions,
5. Recursion,
6. Composition.
*/

//IMMUTABILITY - to be unchangeable. In a functional program, data is immutable. It never changes. Instead of changing the original data structures, we build changed copies of those data structures and use them instead.

//MUTABLE

const book = {
    title: "Game of Thrones",
    author: "George R. R. Martin",
    rating: 4
};

const rate = (book, rating) => {
    book.rating = rating;
    return book;
};




//IMMUTABLE

const book = {
    title: "Game of Thrones",
    author: "George R. R. Martin",
    rating: 4
};

const rate = (book, rating) => {
    return { ...book, rating }
};



//PURE FUNCTION is a function that returns a value that is computed based on its arguments. Pure functions take at least one argument and always return a value or another function. They do not cause side effects, set global variables, or change anything about application state. Pure functions treat their arguments as immutable data.


//Impure function

const johnDoe = {
    name: "John Doe",
    canRead: false,
    canWrite: false
};

const selfEducate = () => {
    johnDoe.canRead = true;
    johnDoe.canWrite = true;

    return johnDoe;
};




//PURE but mutable


const johnDoe = {
    name: "John Doe",
    canRead: false,
    canWrite: false
};

const selfEducate = person => {
    person.canRead = true;
    person.canWrite = true;

    return person;
};


//REAL PURE FUNCTION

const johnDoe = {
    name: "John Doe",
    canRead: false,
    canWrite: false
};

const selfEducate = person => ({
    ...person,
    canRead = true,
    canWrite = true
});



//DATA TRANSFORMATIONS - Functional programming is all about transforming data from one form to another. We will produce transformed copies using functions. These functions make our code less imperative and thus reduce complexity.

const users = ["John", "Jack", "Michael", "Tom", "Nicholas"];

const usersLowerCase = users.map(user => user.toLocaleLowerCase());

const usersWhoseNameStartWithJ = users.filter((user) => {
    return user.startsWith("J")
})

const uniqueUsers = users.filter((user, index, array) => {
    return array.indexOf(user) === index
});




//Higher-Order Functions are functions that can manipulate other functions. They can take functions in as arguments, return functions or do both. checkLogin is a Higher-Order function in this example vvv

const checkLogin = (isLoggedIn, fnTrue, fnFalse) => {
    return isLoggedIn ? fnTrue() : fnFalse();
}

const showWelcome = () => {
    console.log("Welcome!")
}

const showUnauthorized = () => {
    console.log("Unauthorized!")
}

checkLogin(true, showWelcome, showUnauthorized);
checkLogin(false, showWelcome, showUnauthorized);





//RECURSION is a technique that involves creating functions that recall themselves. Often when faced with a challenge that involves a loop, a recursive function can be used instead. Recursion is another functional technique that works well with asynchronous processes. Functions can recall themselves when they are ready. Recursion is a good technique for searching data structures. You can use recursion to iterate through subfolders until a folder that contains only files is identified. You can also use recursion to iterate through the HTML DOM until you find an element that does not contain any children.


const countdown = (value, fn) => {
    fn(value)
    return (value > 0) ? countdown(value - 1, fn) : value
}
countdown(10, value => console.log(value)); 



function recursiveSum(num, sum) {
    console.log(num);
    const currentSum = num + sum;
    return num > 0 ? recursiveSum(num - 1, currentSum) : currentSum;
}

console.log(recursiveSum(5, 0));