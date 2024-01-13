//var c = 300
let a = 300    // global variables
if (true) {
    let a = 10      // local variables
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Prerna"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Prerna"
    if (username === "Prerna") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


addone(5)             // dont give error bcoz function exection can take place
function addone(num){           // way of defining a func
    return num + 1
}



//addTwo(5)              // gives error bcoz in this way of declaring funcwe can't  call function before creating 
const addTwo = function(num){   // another way of defining a func
    return num + 2
}