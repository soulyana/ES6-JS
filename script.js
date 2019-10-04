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

/**
 * Destructuring
 */
/*

  // ES5
  var john = ['John', 26];
    //   var name = john[0];
    //   var age = john[1];

  // ES6 
  const [name, age] = ['John', 26]
  console.log(name);
  console.log(age);

  const obj = {
      firstName: 'John',
      lastName: 'Smith'
  };

  const {firstName, lastName} = obj;
  console.log(firstName);
  console.log(lastName);

  const {firstName: a, lastName: b} = obj;
  console.log(a);
  console.log(b);

  function calcAgeRetirement(year) {
      const age = new Date().getFullYear() - year;
      return [age, 65 - age];
  }

  const [age2, retirement] = calcAgeRetirement(1990);
  console.log(age2);
  console.log(retirement);
*/

/**
 * Arrays in ES6 / ES2015
 */

/*
 const boxes = document.querySelectorAll('.box');

 // ES5
 var boxesArr5 = Array.prototype.slice.call(boxes);
 boxesArr5.forEach(function(cur) {
     cur.style.backgroundColor = 'dodgerblue';
 });

 // ES6
 const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// ES5
for(var i = 0; i < boxesArr5.length; i++) {

    if (boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}




// ES6 - forOf loop
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
       continue;
    }
    cur.textContent = 'I changed to blue!';
} 


// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

/**
 * The Spread Operator
 */
/*

 function addFourAges (a, b, c, d) {
     return a + b + c + d;
 }
 var sum1 = addFourAges(18, 38, 12, 21);
 console.log(sum1);

 // ES5
 var ages = [18, 38, 12, 21];
 var sum2 = addFourAges.apply(null, ages);
 console.log(sum2);

 //ES6
 //expands array into its components
 const sum3 = addFourAges(...ages); 
 console.log(sum3);

 const familySmith = ['John', 'Jane', 'Mark'];
 const familyMiller = ['Mary', 'Bob', 'Ann'];
 const bigFamily = [...familySmith, 'Lily', ...familyMiller];
 console.log(bigFamily);

 const h = document.querySelector('h1');
 const boxes = document.querySelectorAll('.box');
 const all = [h, ...boxes];

 Array.from(all).forEach(curr => curr.style.color = 'purple');
 */

/**
 * Rest Parameters
 */
/*
  // ES5
  function isFullAge5() {
      //console.log(arguments);
      var argsArr = Array.prototype.slice.call(arguments);

      argsArr.forEach(function(cur) {
          console.log((2016 - cur) >= 18);
      });
  }

  // isFullAge5(1990, 1999, 1965);
  //isFullAge5(1990, 1999, 1965, 2016, 1987);

  // ES6
  function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));
  }
  isFullAge5(1990, 1999, 1965, 2016, 1987);
  

  // ES5
  function isFullAge5(limit) {
      //console.log(arguments);
      var argsArr = Array.prototype.slice.call(arguments, 1);

      argsArr.forEach(function(cur) {
          console.log((2016 - cur) >= 18);
      });
  }

  //isFullAge5(16, 1990, 1999, 1965);
  //isFullAge5(1990, 1999, 1965, 2016, 1987);

  // ES6
  function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
  }
  isFullAge5(16, 1990, 1999, 1965, 2016, 1987);
  */

/**
 * Default Prameters
 */

/*
   //ES5
   function SmithPerson(firstName, yearOfBirth, lastName,  nationality) {

        lastName === undefined ? lastName = 'Smith' : lastName;
        nationality === undefined ? nationality = 'American' : nationality;

       this.firstName = firstName;
       this.lastName = lastName;
       this.yearOfBirth = yearOfBirth;
       this.nationality = nationality
   }

   var john = new SmithPerson('John', 1990);   
   console.log(john);
   var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
   console.log(emily);
   */

//ES6
function SmithPerson(
  firstName,
  yearOfBirth,
  lastName = "Smith",
  nationality = "American"
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson("John", 1990);
console.log(john);
var emily = new SmithPerson("Emily", 1983, "Diaz", "Spanish");
console.log(emily);
