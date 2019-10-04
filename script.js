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
/*

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
*/

/**
 * Strings in ES6
 */
/*

 let firstName = 'John';
 let lastName = 'smith';
 const yearOfBirth = 1990;

 function calcAge(year) {
     return 2019 - year;
 }

 //ES5
 console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old');

 // template literals in ES6
 console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

 const n = `${firstName} ${lastName}`;
 console.log(n.startsWith('J'));
 console.log(n.endsWith('th'));
 console.log(n.includes('oh'));
 console.log(`${firstName} `.repeat(5));
 */

 /**
  * Arrow Functions: Basics
  */
 /*

  const years = [1990, 1965, 1982, 1937];

  // ES5
  var ages5 = years.map(function(el) {
      return 2019 - el;
  });
  console.log(ages5);

  // ES6
  let ages6 = years.map(el => 2019 - el);
  console.log(ages6);

  ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
  console.log(ages6);

  ages7 = years.map((el, index) => {
      const now = new Date().getFullYear();
      const age = now - el;
      return `Age element ${index + 1}: ${age}.`
  });
  console.log(ages7);
*/

/**
 * Arrow Functions 2
 */
/*
 // ES5
 var box5 = {
     color: 'green',
     position: 1,
     clickMe: function() {
         var self = this;
         document.querySelector('.green').addEventListener('click', function() {
             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
             alert(str);
         })
     }
 }
 box5.clickMe();
*/
/*
 //ES6
 const box6 = {
     color: 'green',
     position: 1,
     clickMe: function() {
         
         document.querySelector('.green').addEventListener('click', () => {
             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
             alert(str);
         })
     }
 }
 box6.clickMe();
*/
 /*
 // ES6 avoid of confusing arrow usage
  const box66 = {
     color: 'green',
     position: 1,
     clickMe: () => {
         
         document.querySelector('.green').addEventListener('click', () => {
             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
             alert(str);
         })
     }
 }
 box66.clickMe();
 */


 function Person(name) {
     this.name = name;
 }

 // ES5
 /*
 Person.prototype.myFriends5 = function(friends) {
     var arr = friends.map(function(el) {
         return this.name + ' is friends with ' + el;
     }.bind(this));

     console.log(arr);
 }
 var friends = ['Bob', 'Jane', 'Mark'];
 new Person('John').myFriends5(friends);
*/
/*
 //ES6 
 var friends = ['Bob', 'Jane', 'Mark'];
 Person.prototype.myFriends6 = function(friends) {
     var arr = friends.map(el => `${this.name} is friends with ${el}.`);
     console.log(arr);
 }
 new Person('Jane').myFriends6(friends);
 */

 