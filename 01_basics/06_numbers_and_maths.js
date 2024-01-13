const score = 400
console.log(score);

const balance = new Number (100) //other way to declare a number /integer but it is a object 
console.log(balance);

console.log(balance.toString().length);
console.log(score.toString().length)

console.log(balance.toFixed(2));

const otherNumber = 23.668
console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


///*********************maths********************** */


console.log(Math);
console.log(Math.abs(-10));
console.log(Math.round (4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,5,1,9,7));
console.log(Math.max(4,1,9,5,6));


console.log(Math.random());     // it gives a random value between 0 and 1
console.log((Math.random()*10) + 1);  //always gives random value greater than 1
console.log(Math.floor(Math.random()*10) + 1);


const max = 6
const min = 1

console.log(Math.floor(Math.random() * (max - min + 1)) + min)    //always give a random number between certain nubers here 1 to 6

