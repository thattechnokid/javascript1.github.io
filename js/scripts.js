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

// var val1 = parseInt(prompt("Enter a first number", 10));
// var val2 = parseInt(prompt("Enter a second number", 10));

//Or number1 = new Number(number1);
// console.log(val1+val2);


// ---------  Conditional Statements  -------------

// ---- IF ----

const bestMovie = 'The Greatest Show';
//
// if (typeof (bestMovie === 'string')) {
//   alert('Yay!! Its a string');
// } else if(typeof(bestMovie === 'number')){
//     alert("WTF?");
// } else{
//   alert('BOOOOOOO! It Ain\'t a string');
// }


// ---- SWITCH ----

// switch(typeof(bestMovie)){
//   case 'string':
//     alert('Dope it\'s a string');
//     break;
//   case 'number':
//     alert('You entered a number lol');
//     break;
//   case 'object':
//     alert("Why? Just why?");
//     break;
//   case 'boolean':
//     alert("He speaks bool!");
//     break;
//   default:
//     alert('Bruh, it\'s an array!');
//     break;
// }

// ----  Ternary  ----

   // IF                          True          else          False
// bestMovie !== undefined ? alert('it exists!') : alert('it Doesn\'t exist');



 // ----------  PRACTICE  -------------

 var age = prompt("Give me your age");

  if (age >= 18) {
    // console.log('it worked');
    userAge = confirm("Are you under 80 years old?");
      if (userAge /* Checks if userAge comes back true use '!' for false */) {
        var starWars = confirm("Do you like star wars?");
        if (starWars) {
          alert("you rock");
        }
      } else {
        //Do you like prunes?
        var prunes = confirm("Do you like prunes?");
        if (prunes) {
          alert('Adios!');
        }
      }
  }
  else {
    alert("You must be 18 or older to continue!!");
  }
