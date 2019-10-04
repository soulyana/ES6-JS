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
*/

/**
 * Maps
 */
/*

 const question = new Map();
 question.set('question', 'What is the official name of the latest major Javascript version?');
 question.set(1, 'ES5');
 question.set(2, 'ES6');
 question.set(3, 'ES2015');
 question.set(4, 'ES7');
 question.set('correct', 3);
 question.set(true, 'Correct answer :D');
 question.set(false, 'Wrong, please try again');

 console.log(question.get('question'));
//  console.log(question.size);

 if (question.has(4)) {
     //question.delete(4);
    //  console.log('Answer 4 is here');
 }
 
 //question.clear();

 //question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

 for (let [key, value] of question.entries()) {
    //console.log(`This is ${key}, and it's set to ${value}`);
    if(typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
 }

 const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));

// Maps allow us to use anything as keys
// Maps are iterable 
// Maps have size property
// Maps can easily add and remove a property
*/

/**
 * Classes
 * synthetic suger over the way we do prototypal inheritance in JS
 * can only add methods not properities
 * not hoisted
 */
/*

 //ES5 
 var Person5 = function(name, yearOfBirth, job) {
     this.name = name;
     this.yearOfBirth = yearOfBirth;
     this.job = job;
 }

 Person5.prototype.calculateAge = function() {
     var age = new Date().getFullYear - this.yearOfBirth;
     console.log(age);
 }

 var john5 = new Person5('John', 1990, 'teacher');

 //ES6
 class Person6 {
     constructor (name, yearOfBirth, job) {
         this.name = name;
         this.yearOfBirth = yearOfBirth;
         this.job = job;
     }

     calculateAge() {
         var age = new Date().getFullYear - this.yearOfBirth; 
         console.log(age);
     }

     static greeting() {
         console.log('Hey, there!');
     }
 }

 const john6 = new Person6('Joh', 1990, 'teacher');

 Person6.greeting();
*/

/**
 * Classes with Subclasses
 * inheritance between classes
 */
/*

//ES5

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
};

athlete5.prototype = Object.create(Person5.prototype);

athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
};
var johnAthlete5 = new athlete5("John", 1990, "swimmer", 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


 //ES6
 class Person6 {
     constructor (name, yearOfBirth, job) {
         this.name = name;
         this.yearOfBirth = yearOfBirth;
         this.job = job;
     }

     calculateAge() {
         var age = new Date().getFullYear() - this.yearOfBirth; 
         console.log(age);
     }
 }

 class athlete6 extends Person6 {
     constructor(name, yearOfBirth, job, olympicGames, medals) {
         super(name, yearOfBirth, job);
         this.olympicGames = olympicGames;
         this.medals = medals;
     }

     wonMedal() {
         this.medals++;
         console.log(this.medals);
     }
 }

 const johnAthlete6 = new athlete6('John', 1990, 'swimmer', 3, 10);

 johnAthlete6.wonMedal();
 johnAthlete6.calculateAge();
 */

/**
 * Coding Challenge 8
 *
 */

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}
class Parks extends Element {
  constructor(name, buildYear, area, trees) {
    super(name, buildYear);
    this.area = area;
    this.trees = trees;
  }

  treeDensity() {
    const density = this.trees / this.area;
    console.log(
      `${this.name} has a tree density of ${density} trees per square km.`
    );
  }
}

class Streets extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(
      `${this.name}, built in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

const allParks = [
  new Parks("Green Park", 1987, 0.2, 215),
  new Parks("National Park", 1894, 2.9, 3541),
  new Parks("Oak Park", 1953, 0.4, 949)
];

const allStreets = [
  new Streets("Ocean Avenue", 1999, 1.1, 4),
  new Streets("Evergreen Street", 2008, 2.7, 2),
  new Streets("4th Street", 2015, 0.8),
  new Streets("Sunset Boulevard", 1982, 2.5, 5)
];

function calc(arr) {

    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];
}

function reportPark(p) {
    console.log('---Parks Report---');

    // Density 
    p.forEach(el => el.treeDensity());

    // Average Age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average age of ${avgAge} years.`);

    // Which park has more than 1000 trees
    const i = p.map(el => el.trees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);

}

function reportsStreets(s) {
    console.log('---Streets Report---');

    //total and avg length of streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    // classify sizes
    s.forEach(el => el.classifyStreet());
}

reportPark(allParks);
reportsStreets(allStreets);
