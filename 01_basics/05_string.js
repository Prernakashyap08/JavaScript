const name = "Prerna"      //one way to declare string and we can also access the character at certain position
const repoCount = 5

console.log(name + repoCount + " value"); //for print the output but this is not a standard way these days

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String ("prerna-rani-com")    // another way to declare the string and we can also access the character at certain position
console.log(name[0]);   //gives 1st letter of the name

console.log(gameName[1]); // gives 2nd letter of gameName
console.log(gameName.__proto__) 
console.log(gameName.length);     // gives length of the gameName
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-14,4)
console.log(anotherString);

const newStringOne = "   Prerna   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://prerna.com/prerna%20rani"

console.log(url.replace('%20' , '-'))
console.log(url.includes('Bhopal'));

console.log(gameName.split('-'));
