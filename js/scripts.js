 // -------  Logical Operators  ----------

 const bestNumber = 42;

 console.log(!bestNumber); //Checks if this even exists

 // ------  Comparison Operators  ------------

 var string = "1";
 var number = 1;
 console.log(string == number); //Expects true: same value...loosely equal

 console.log(string === number); //Expects false: same value, DIFFERENT type ... strictly not equal

  // -------  Practice  -----------

  var string1 = "Hello Bro"; //primitive string
  var string2 = new String("Hello Bro");

  // console.log(string1 === string2); //Returns false
  // console.log(string1 == string2); //Returns true

  // console.log(string1.length); //Wont change automatically to an object type.

  // console.log(typeof(string1));
  // console.log(typeof(string2));


 // ----------  Arithmetic  ----------

 var number1 = 5;
 var number2 = 2;

 // console.log(number1 * number2);

 console.log("------  Modulo  ------");

 // console.log(number1 % number2); //Returns remainder

 console.log("------  Increment/Decrement  ------");

 number1++;
 // console.log(number1);
 number2--;
 // console.log(number2);

console.log("------  Assignment Operators ------");

number1+= 44; //can also use /= *= and -=
// console.log(number1);


// ------  Practice  -------

var val1 = parseInt(prompt("Enter a first number", 10));
var val2 = parseInt(prompt("Enter a second number", 10));

//Or number1 = new Number(number1);
console.log(val1+val2);
