// Variable declarations with Let and Const
/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);


// ES5
function driverLicense(passedTest) {
    if (passedTest) {
        console.log(firstName); //undefined
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ' born in ' + yearOfBirth + ' is now officially able to drive a car');
}

driverLicense(true);

// ES6
function driverLicense6(passedTest) {

    // console.log(firstName); // not defined b/c temporal dead-zone
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
        
    }

        console.log(firstName + ' born in ' + yearOfBirth + ' is now officially able to drive a car');
    
}

driverLicense6(true);


let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4 due to block scope
}

console.log(i); // 23
*/


/**
 * Blocks and IIFEs
 * data privacy by using a block
 */

// ES6
 {
     const a = 1;
     let b = 2;
     var c = 3;
 }

//  console.log(a + b); // not defined b/c of scoping
console.log(c);
 // ES5
 (function() {
     var c = 3;
 })();

 console.log(c);

