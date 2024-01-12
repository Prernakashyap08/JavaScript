const accountId=128          //constants are can't be further changed
let accountEmail="prernarani@gmail.com"
var accountPassword="12345"
accountCity="Bhopal"               // we also can reserve memory without writing var or let but this is not a good practice

let accountState;               //here we didn't assigned any value to variable accountState and also we can or can't use ;(semi-colomn) to js

// accountId= 2         this is not allowed to changed the const variables

console.log(accountId);

accountEmail="prani@gmail.com"
accountPassword="654123"
accountCity="Indore"

/*
  so we can change the details of "let" and "var"
  but we prefer not to use var 
  because of issue in block scope and functional scope
*/


console.table([ accountId, accountEmail, accountPassword,accountCity,accountState])         // for printing all details in table form

