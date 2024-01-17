const user = {                                    // object
    username: "Prerna",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); 
              /*'this' refers to the current context of the object
              that means to access all the variable in that scope(here scope of user object) we uses 'this' 
              here we access username of the object user
              */                     
        console.log(this);   
   
             
    }

}

// user.welcomeMessage()
// user.username = "sam"             // it change the current context here username get changes
// user.welcomeMessage()

// console.log(this);               // it gives an error as there is no global context

// function chai(){
//     let username = "Prerna"
//     console.log(this.username);             //gives undefined  we can't use this this to access the variable within a func
//     console.log(this)                    //but this will run as 'this' stores something
// }

// chai()

// const chai = function () {
//     let username = "Prerna"
//     console.log(this.username);
// }




/*********************************Arrow function*******************************************************************************/

const chai =  () => {          //this is a way of writing arrow func similar to normal func we can store it to variable                             
    let username = "Prerna"
    console.log(this);
}

// chai()                  





    // another way of writing arrow func
/*****************************************/



// const addTwo = (num1, num2) => {             //arrow function with 2 parameter             
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2       //if we have write and return one line inside the arrow func then we can remove the curly braces and there is no need to write return with it

// const addTwo = (num1, num2) => ( num1 + num2 )    // with parenthesis we dont have to write return keyword but with curly braces we must have to write return keyword

const addTwo = (num1, num2) => ({username: "prerna"})   //to return an object from arrow func we have to write it within parenthesis


console.log(addTwo(3, 4))

