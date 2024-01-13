let myDate = new Date()
 console.log(myDate);
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());
 console.log(typeof myDate);
 console.log(myDate.getFullYear()); 
 //and manyMore func are avail. we can practice


 let myCreatedDate = new Date(2024, 1, 15)   //we set a particular date
 console.log(myCreatedDate.toLocaleString());

 let myCreatedDate2 = new Date (2024,5,26,17,3)  //set particular date and time
 console.log(myCreatedDate2.toLocaleString());

//we can also set the formt of the date such as MM-DD-YYYY or DD-MM-YYYY or YYYY-MM-DD
myCreatedDate = new Date("2023-01-14")
myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() 

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
 console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);    //months are numbered from  0 so to avaoid this we add 1 to itso that it will strt from 1
console.log(newDate.getDay());      // monday =>0,  tuesday =>1 and so on

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})


console.log(newDate.weekday);
