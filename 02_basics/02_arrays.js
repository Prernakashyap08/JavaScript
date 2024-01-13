const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)      //it push dc_heros to marvel_heros but made an array inside that Array

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)  // to merge both the arrays
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   // to merge both the arrays

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)    //flat
console.log(real_another_array);



console.log(Array.isArray("Prerna"))     //  as this is a string not an array so it return false
console.log(Array.from("Prerna"))        // convert the string to char array ['P','r','e', 'r','n','a']
console.log(Array.from({name: "Prerna"})) // interesting  as it return empty becoz we didnt specify from which things we have to make array either key or the value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));    // it put all the element and convert it to arrays