//arrays

// arrays-> store collection of multiple items
//in js  arrays are resizable and can contain a mix of different data types  such as arr =["prerna", 10 ,2,0 ]
const myArr =[10, 20 , 30, 40, 50]

console.log(myArr[0]); //for accessing 1st element

const myHeros = ["shaktimaan", "naagraj"]
const myArr2 = new Array(10,20,30,40)           //another way of declaring a array


////Arrays methods

myArr.push(6)
myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)    // add element 9 to 1st position
console.log(myArr);

myArr.shift()       //delete elemnt at first position
console.log(myArr);


console.log(myArr.includes(9));   //return true if element 9 exist in array
console.log(myArr.indexOf(40));



const newArr =myArr.join()  // convert it to string
console.log(myArr);
console.log(typeof newArr);





/////  slice , splice

console.log("A ", myArr);            // original array
/*
slice() method will extract elements from the start position up to the end position.
 The end position will not be included in the extracted elements for the new array.

 and slice didn't alter the original arrays
*/
const myn1 = myArr.slice(1,3)      
console.log(myn1);
console.log("B" , myArr); 



/*
splice() method will change the contents of the original array. 
The splice() method is used to add or remove elements of an 
existing array and the return value will be the removed items from the array.

splice() return all the value of the given indices
*/

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C", myArr);



