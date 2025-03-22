var a;
var b = 2;
console.log(a);
a = 7;

b = a;

console.log(a);

/**
 initialilized and uninitialized variables
 */

// initialize this variables
var a = 5;
var b = 10;
var c = "I am a";

// do not change below this code line

a = a + 1;
b = b + 5;
c = c + " String!;";

// Declarations
var studylyCapVaR;
var properCamelCase;
var titleCaseOver;

//Assignments
studylyCapVaR = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//adding numbers
var sum = 10 + 10;
console.log(sum);

//subtracting numbers
var difference = 45 - 3;
console.log(difference);

// division and multiplication
var quotient = 66 / 33;
console.log(quotient);

//incrementing numbers
var myVar = 87;

myVar = myVar++;

// myVar = myVar--

/* decimal numbers also known as floating point numbers or floats */

var ourDecimal = 5.7;

var myDecimal = 0.009;

var product = 2.5 * 2.0;
console.log(product);

var remainder;
remainder = 11 % 3;
console.log(remainder);

/**
 compound assignment with augmented addition and subtraction
 */

var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;

//declare string variable

//Example
var firstName = "Alan";
var lastName = "Turing";

var myFirstName = "Beau";
var myLastName = "Carnes";

//Quote in quote
//escape character
var myStr = 'I am a "double quoted" string inside "double quotes"';
console.log(myStr);

/**
 quoting strings with single quotes
 */
var myStr1 = '<a href="http://www.example.com" target="_blank">link</a>';

/**
escape sequences in strings
 */
/**
 CODE OUTPUT
 \' single quote
 \" double quote
 \\ backlash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 */

var myStr2 = "Firstline\n\t\\Secondline\nThirdline";
console.log(myStr2);

/**
  Concatenating Strings with Plus Operator
  */
//Example
var ourStr = "I come first. " + "I come second. ";

var myStr3 = "This is the start. " + "This is the end. ";
console.log(myStr3);

/**
  Concatenating Strings with the += Operator
  */
var ourStr = "I come first. ";
ourStr += "I come second. ";

var myStr4 = "This is the first sentence. ";
myStr4 += "This is the second sentence.";

console.log(myStr4);

/*
  constructing Strings with Variables
  */
//Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

var myName = "Beau";
var myStr5 = "My name is " + myName + " and I am well!";
console.log(myStr5);

/**
 Appending variables to strings
 */
//example
var anAdjective = "Awesome";
var ourStr = "Free code camp is awesome ";
ourStr += anAdjective;

//finding length of string
var firstNameLength = 0;
var firstName = "Johnbull";

firstNameLength = firstName.length;

//setup
var lastNameLength = 0;
var lastName = "Locke";

lastNameLength = lastName.length;
console.log(lastNameLength);

/**
finding first name with the bracket [] notation
 */

var firstLetterOfFirstName = "";
var firstName = "Johnbull";

firstLetterOfFirstName = firstName[0];

//setup
var firstLetterOflastName = 0;
var lastName = "Locke";

firstLetterOflastName = lastName[0];
console.log(firstLetterOflastName);

//string immutability
var myStr6 = "Jello World";
//myStr6[0] = "H";
myStr6 = "Hello World";
console.log(myStr6);

/**
Bracket notation to find last letter in string
 */
var firstName = "Johnbull";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "Locke";
secondToTheLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToTheLastLetterOfLastName);

//world blanks
function worldBlanks(myNoun, myVerb, myAdjextive, myAdverb) {
  var result = "";
  result +=
    "The " +
    myAdjextive +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    myAdverb;

  return result;
}

console.log(worldBlanks("Dog", "Ran", "Big", "Quickly"));
console.log(worldBlanks("Bike", "Slow", "Flew", "Slowly"));

/*
store multiple values with arrays
*/
myArray = ["Linus", 28];

var ourArray = ["Quincy", 32];

//nested array
var ourArray = [
  ["The unniverse", 360],
  ["Globe", 11109643],
];

var myArray = [["Bulls", 45][("White Sox", 23)]];

/*
Access array data with indexes
*/
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; //equals 50
console.log(ourData);

/*
modify array data with indexes
*/
var ourArray = [18, 64, 99];
ourArray[1] = 45; // ourArray now equal to [18,45,99]

//example
var myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray);

/**
 Access multi-dimensional arrays with indexing
 */
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
myData = myArray[2][1];
console.log(myData);

//manipulate Arrays with push()
ourArray = ["stimson", "J", "Cat"];
ourArray.push(["Joy", "Happy"]);
//Our Array now equals ["stimson", "J", "Cat", ["Joy", "Happy"]]

//setup
var myArray = [
  ["John", 4],
  ["Cat", 3],
];
var ourArray = myArray.push(["Jerry", 8]);
// console.log(ourArray)

/**
 manipulating arrays with pop()
 */

var myArray = [1, 2, 3];
var removeFromMyArray = myArray.pop();
//removeFromMyArray returns [1,2]

var ourArray1 = [
  ["John", 4],
  ["Cat", 3],
];
var removeFromOurArray = ourArray1.pop();
console.log(removeFromOurArray);

/**
 manipulating arrays with shift()
 */
//similar to the pop() method but only removes the first element of the array
var ourArray2 = ["simpson", "J", "[Cat]"];
shiftFromOurArray = ourArray2.shift();
//shiftFromOurArray returns "simpson" while ourArray2 returns ["J", "[Cat]"]
//setup
var myArray1 = [
  ["John", 4],
  ["Cat", 3],
];
shiftFromMyArray = myArray1.shift();

// the unshift function is similar to the push function
var ourArray2 = ["simpson", "J", "[Cat]"];
ourArray2.shift(); // ourArray2 now equals ["J", "[cat]"]
ourArray2.unshift("Happy");
//ourArray2 now equals ["Happy", "J", "[Cat]"]

var ourArray3 = [
  ["Jerry", 42],
  ["Thomas", 29],
];
ourArray3.shift();
ourArray3.unshift(["John", 76]);
console.log(ourArray3);

//functions allows us to create reusable codes
function reusablecode() {
  console.log("Brent", "Reading");
}

reusablecode();

/**
 Passing values to functions through arguments
 */
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}

ourFunctionWithArgs(110, 52); // returns 58

//Global scope and functions
//declare variable here

var myGlobal = 10;

function fun1() {
  //Assign 5 to oops global here
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != undefined) {
    output += "myGlobal: " + myGlobal;
  }

  if (typeof oopsGlobal != undefined) {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1();
fun2();

// local scope and variables
function myScope() {
  var myVar44 = 88;
  console.log(myVar44);
}

myScope();

//console.log(myVar44)

//Local variable and Global variable
var outerwear = "T-shirt";

function outFit() {
  var outerwear = "sweater";

  return outerwear;
}
console.log(outFit());
console.log(outerwear);

/**
 return a variable from a function with return
 */

function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(100));

function timesFive(num) {
  return num * 5;
}

console.log(timesFive(25));

/**
  understanding undefined value returned from a function
  */
// example
var sum = 0;
function addThree() {
  sum = sum + 3;
} // undefined

function addFive() {
  sum += 5;
} // undefined

//Assignment  with a Returned Value

var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

console.log(processed);

//stand in Line
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//js booleans
function welcomeToBooleans() {
  return;
}

// conditional logic with if statements

function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

console.log(ourTrueOrFalse(false));

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

console.log(trueOrFalse(true));

//comparison with the equality Operator
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));

//comparison with strict equality operator
function testStrict(val) {
  if (val === 10) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict("10"));

/**
 3 === 3
 3 === "3"
 */
// setup
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));

//comparison with inequality operator
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));

//comparison with strict inequality operator
function testStrictNotEqual(val) {
  if (val !== 33) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual("10"));

// comparison with the logical and operator

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or under";
}

console.log(testGreaterThan(10));

//comparison with the greater than or equal to operator
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }

  return "Less Than 10";
}

console.log(testGreaterOrEqual(10));

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    //if (val >= 25) {
    return "Yes";
  }

  return "No";
}

console.log(testLogicalAnd(33));

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

console.log(testLogicalOr(15));

//Else statements
function elseStatement(val) {
  if (val > 25) {
    return "Greater than 25";
  } else {
    return "Equal to 25 or Less than 25";
  }
}
console.log(elseStatement(15));

//else if statements
function elseIfStatement(val) {
  if (val > 50) {
    return "Greater than 50";
  } else if (val < 20) {
    return "Less than 20";
  } else {
    return "Between 20 and 50";
  }
}
console.log(elseIfStatement(35));

//Logical order in else if statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less Than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or Equal to 10";
  }
}
console.log(orderMyLogic(3));

// once the first condition is met it doesnt even check for the other conditions

/**
 chaining if else statements
 */
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "small";
  } else if (num < 15) {
    return "medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }

  //return "Change Me"
}
/*
 write changed if and else statements to fufill the the following conditions:
 */

console.log(testSize(7));
console.log(testSize(19));
console.log(testSize(24));

//Golf Code
var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home",
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}

console.log(golfScore(5, 2));

/*
 Strokes    return
   1         "Hole-in-one!"
<= par - 2    "Eagle"
par - 1     "Birdie"
par            "Par"
par + 1     "Bogey"
par + 2    "Double Bogey"
 >= par + 3    "Go Home"

 */

/**
 switch statements
 */
/*
write a switch statement which tests val and sets answer for the following condtions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "Delta"
*/

function caseInSwitch(val) {
  var answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;

    case 2:
      answer = "beta";
      break;

    case 3:
      answer = "gamma";
      break;

    case 4:
      answer = "Delta";
      break;
  }

  return answer;
}
// uses the equal value and equal type operator

console.log(caseInSwitch(1));

// default option in switch operation
// default statement is similar to the else statement
function defaultOption(val) {
  var answer = "";

  switch (val) {
    case "a":
      answer = "apple";
      break;

    case "b":
      answer = "ball";
      break;

    case "c":
      answer = "Cat";
      break;

    case "d":
      answer = "Duck";
      break;

    default:
      answer = "Stuff";
      break;
  }

  return answer;
}

console.log(defaultOption(2));

// multiple identical option in switch statements
function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "low";
      break;

    case 4:
    case 5:
    case 6:
      answer = "mid";
      break;

    case 7:
    case 8:
    case 9:
      answer = "high";
      break;

    default:
      answer = "other";
      break;
  }

  return answer;
}

console.log(sequentialSizes(9));
/**
 replacing if else statements with switch
 */

function chainToSwitch(val) {
  var answer = "";

  /* if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
  return answer;*/

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;

    case 1:
      answer = "There is no #1";
      break;

    case 99:
      answer = "Missed me this much!";
      break;

    case 7:
      answer = "Ate Nine";
      break;

    default:
      break;
  }

  return answer;
}

console.log(chainToSwitch(7));
// Returning boolean values from functions
function isLess(n, m) {
  /*if (n < m) {
        return true;
        }
        return false;
        }*/
  return n < m;
}

console.log(isLess(180 < 170));

// returning early pattern from functions
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-2, 2));
console.log(abTest(6, 2));

// counting cards
var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }

  return count + " " + holdbet;
}

cc(3);
cc("K");
cc(10);
cc("K");
cc("A");

console.log(cc(4));

//build javascript objects
var ourDod = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};

var myDog = {
  name: "Quincy",
  legs: 3,
  tails: 2,
  friends: [],
};

//property and values
// the property values can be strings, numbers, arrays etc
/**
 accessing object properties with dot notation
 */

var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

/**
 Accesing object properties with bracket notation
 */
// it is usually required if there is space between the property

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

console.log(entreeValue);

/**
 accessing object properties with variable
 */
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

var playerNumber = 16;
var player = testObj[playerNumber];

console.log(player);

/**
 updating object properties
 */
var myDog = {
  name: "camper",
  legs: 4,
  tail: 1,
  friends: ["Everything, Everbody"],
};
myDog.name = "Happy Camper";

console.log(myDog.name);

//add new properties to an object
var myDog = {
  name: "camper",
  legs: 4,
  tail: 1,
  friends: ["Everything, Everbody"],
};
myDog.bark = "woof!!";

console.log(myDog);

/**
 Delete properties from an object
 */
var myDog = {
  name: "camper",
  legs: 4,
  tail: 1,
  friends: ["Everything, Everbody"],
  bark: "Bow wow",
};

delete myDog.bark;
delete myDog["legs"];

console.log(myDog);

/**
Using objects to look up statements
 */

// setup
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  // switch (val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  //     break;
  // }

  // result = lookup.val;
  result = lookup[val];
  return result;
}

console.log(phoneticLookup("echo"));

/**
 Testing objects for properties
 */
//hasown property method
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(myObj.pet);
console.log(myObj.hello);

var ourObj = {
  school: "Pupils",
  state: "People",
  jungle: "Animals",
};

function checkObjj(hasObjprop) {
  // if (ourObj.hasOwnProperty(hasObjprop)) {
  //   return ourObj.hasObjprop;
  // } else {
  //   return "Not Found";
  // }

  switch (hasObjprop) {
    case ourObj.hasOwnProperty(hasObjprop):
      return ourObj.hasObjprop;
      break;

    /*default:
      return "Not Found";*/
  }
}

console.log(ourObj.school);

/**
 Manipulating complex objects
 in javascript objects: you can store objects, arrays, variables, strings, numbers
 */
var comPlex = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },

  {
    artist: "Beau Carnes",
    title: "Cereal Man",
    release_year: 2003,
    formats: ["Youtube Video"],
  },
];

/**
 Accessing Nested Objects
 */
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

var gloveBoxContents = myStorage.car.outside.trunk; // the bracket notation is used bcos of the spacing
console.log(gloveBoxContents);

// Accessing Nested Arrays
//setup
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

var secondTree = myPlants[1].list[1];
var thirdFlower = myPlants[0].list[2];
console.log(secondTree);
console.log(thirdFlower);

//Record collection
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};
// keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}
console.log(updateRecords(2468, "tracks", "test"));
console.log(updateRecords(5439, "artist", "ABBA"));
/*JSON.parse(JSON.stringify(collection) 
is a fancy way to make a copy of the object*/
// console.log(collectionCopy);

/**
 Iterate with while loops
 loops allow to run the same code multiple times
 */
var myArray = [];

var i = 0;
while (i < 7) {
  myArray.push(i);
  i++;
}

console.log(myArray);

let digits = "0123456789";
let otp = "";
function generateOTP(limit) {
  for (let i = 0; i < limit; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}

console.log(generateOTP(5));

//try and catch error
try {
  console.log(win);
} catch (error) {
  console.log(error.message);
}

//opriona chaining
let userrr = {
  name: "John",
  age: 20,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};
console.log(userrr.job?.title); // will not throw an error if the property does not exist

console.log(userrr.address.city);

//nullish coalescing operator
let person2 = null;
let whatsAppAvatar = person2 ?? "default avatar";
console.log(whatsAppAvatar);

let person3;
let whatsAppAvatarr = person3 ?? "default avatar";
console.log(whatsAppAvatarr);

//asynchrounous js
//codes that takes time to execute
//async code
//async code is code that is not executed immediately
//async code is code that is executed in the background

console.log("a");
setTimeout(() => {
  console.log("b");
}, 10000);
console.log("c");

//API
//Application Programming Interface

//fetching data
//geolocation
//payment gateway
//public private
//rest api - GET POST PATCH DELETE

const url = "https://dummyjson.com/carts";
//fetch request async/await
const getCarts = async () => {
  const response = await fetch(url);
  console.log(response);

  const data = await response.json();

  console.log(data);
  console.log(data.carts[12]);
  //displa in the browser
};

getCarts();
