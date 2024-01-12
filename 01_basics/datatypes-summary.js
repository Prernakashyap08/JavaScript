//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions   these return object

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack => primitive     heap => non primitive

let myName = "prernarani"

let anotherName = myName       // in this it is a primitive data type so it took a copy a original data type i.e myName to anotherName
anotherName = "prani"

console.log(myName)
console.log(anotherName);



let userOne =
{
    email : "user@google.com",
    upi: "user@ybl"
}


let userTwo = userOne
userTwo.email = "prerna@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// heap take the reference of the data 