let score = "33"

console.log(typeof score);   //now this is a string

//but we want to use score as number or say integer
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)



//but what if score is not completely a number  i.e score ="33abc"
let mixScore="33abc"
console.log(mixScore)
valueInNumber=Number(mixScore)
console.log(typeof valueInNumber);
console.log(valueInNumber);   // output => Na


//if we assigned null value
score=null
console.log(typeof score);
valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)      //null => 0



//if var is assigned with undefined
score=undefined
console.log(typeof score);
valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)   //   o/p => NaN


//if we assigned boolean value
score=true
console.log(typeof score);
valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)                  //true => 1  false => 0



//if we assigned string and it not be converted to number
score="prerna"
console.log(typeof score);
valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)     //"String" => NaN







/*********************************************************************/


let isLoggedIn = 1

let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);                //1 =>true, 0 => false
console.log(typeof booleanIsLoggedIn);



isLoggedIn = ""
booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);        // "" => false
console.log(typeof booleanIsLoggedIn);



isLoggedIn = "prerna"
booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);       //  "string"= true
console.log(typeof booleanIsLoggedIn);





/*******************************************************************/

let someNumber =  33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);