
// --------------------------------  VAR  -----------------------------------


var sentence = 'The meaning of life = 42';
var num = 2;
console.log(sentence);
console.log(num);

// A variable points to something else/ its a nickname for anything you want. It can be changed at any time in any point of the code
console.log(numOne); //Undefined
var numOne = 22;
var newNum = 83;      //Both of these variables are declared AND defined.
console.log(numOne);
var sum = numOne + newNum;

 // ----------------------------------

 var firstNum;
 console.log(firstNum); //Undefined
 firstNum = 22;       //Does the same thing as before, except you declared
 var newNum = 75;     // and defined SEPARATELY

// Note -- if you do secondVar = 224; it automatically makes it a VAR, but try NOT to use this!


// -------------------------------  LET  -----------------------------------

//Inside any block of code, LETs dont get hoisted to the top like VARs

// console.log(myNum);
let myNum = 14;
let otherNum = 92;

{
  let myNum = 15;
  console.log(myNum);
}


// --------------------------------  CONST  --------------------------------

// Constants cannot be redefined/value cannot be changed

// console.log(truth); //Reference error

const truth = "I like trains";

// truth = "meh"; //CANNOT redefine a variable
console.log(truth);

// const truth = "meh";
// console.log(truth);   !!!!! Cannot RE-declare a Constants

{
  const truth = "meh";
  console.log(truth);
}



// -------------------  OBJECTS  -------------------------------

var rightNow = new Date();
console.log(rightNow);

// ------  MATH  ------

var iLikePi = Math.PI;
console.log(iLikePi);

// ------  STRING  ------

var string = "lalalalal";

var newString = new String("lalalalalala");

console.log(string);
console.log(newString);
