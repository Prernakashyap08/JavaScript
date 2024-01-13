// singleton is on object creation like in constructor
// Object.create  through constructor method

// object literals

const mySym = Symbol("key1")   //symbol 

// jsUser is a object
const JsUser = {
    name: "Prerna",
    "full name": "Prerna Rani",             // we can also write keys within " "
    [mySym]: "mykey1",                      // define the symbol within []
    age: 18,
    location: "Jaipur",
    email: "prerna@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)             // we can access the property of object by usig dot to its name but not applicable for all property such as full name or mysym
console.log(JsUser["email"])             //accessing users email by using square brackets
console.log(JsUser["full name"])       // accessing full name
console.log(JsUser[mySym])             // accessing symbol

JsUser.email = "prerna@chatgpt.com"
// Object.freeze(JsUser)                   //to freeze the jsuser so that further changes cant take place
JsUser.email = "prerna@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){                    // creating func greeting
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){                // func greetingTwo
    console.log(`Hello JS user, ${this.name}`);         // to access the all the property within the object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
