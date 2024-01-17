// Immediately Invoked Function Expressions (IIFE)


/*
IIFE => a function that runs the moment it is invoked or called in the JavaScript event loop
and we use iife bcoz global scope ke pollution se problem hoti hai kai baar to us global scope
 k declaration ya variables ko hatane k liye we use iife

here the 1st parenthesis is definitioon and 2nd parenthesis is execution call
just like we call func chai() this is almost similar to this ordinary func the argument passiing is also similar

*/

// it is a named IIFE 'name is chai()'
(function chai(){
    console.log(`DB CONNECTED`)
})();                                    //  when we write two or iife simultenously we have to use semi colon at the end of previous 'iife'                            




//it is a simple iife
( () => {                                              // we can also use arrow func within iife
    console.log(`DB CONNECTED TWO`);
} )();


//simple iife
( (name) => {                                            
    console.log(`DB CONNECTED TWO ${name}`);
} )('Prerna')                                   // we can also pass the agrument in iffe