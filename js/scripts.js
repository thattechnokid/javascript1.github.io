
// Everything inside the functions ( ) is an "argument"

// NOTE: This is an anonymous function, since it is not named, and this one has ZERO arguments

// function() {
//   console.log("You fired your anonymous function");// Doesnt work unless we call the function()
// };

//So... do this...

var myFunction = function(){
  console.log("You fired your anonymous function");
};

myFunction();//NOW it will work


var userLogin = function(userName, password){
  //Compare correct password for this user with the password they give your

}

// NOTE: This is a NAMED function... Try to ALWAYS use this.

function myMagicalPony(arg1,arg2){
  console.log(`${arg1} is better than ${arg2}`);
};

myMagicalPony(); //Runs but outputs "undefined is better than undefined" nothing was passed in the function

console.log("---------------------------");

myMagicalPony("My girlfriend", "yours"); //Now it will actually work and make sense.




//---------- Practice -----------

// function dogYears(yearsOld){
//   console.log("User inputted: ",yearsOld, "type: ",typeof yearsOld);
//
//   if (isNaN(yearsOld)) {
//      alert("You must enter a number like this: 4");
//
//   } else if (typeof yearsOld == 'number') {
//     alert(`Your dog is ${yearsOld * 7} years old in "Dog Years"`);
//
//   }
//
// }
//
// dogYears(parseInt(prompt("How Old Is Your Dog?")));


// --------- Practice 2 --------

// function lifeTimeSupply(userAge, prodAmount, maxAge){
//   if (isNaN(userAge) || isNaN(prodAmount) || isNaN(maxAge)) {
//     alert("You Must enter a valid number");
//   } else {
//     prodAmount *= 365;
//     var difference = maxAge - userAge;
//     alert(`You will need ${prodAmount * difference} of your product to last you until you are ${maxAge} years old`);
//   }
// }
//
// lifeTimeSupply(parseInt(prompt("Enter Your Age: ")), parseInt(prompt("How Much of the product do you use/consume per day?", "Enter a Number: 1")), parseInt(prompt("Enter the age you want the product to last you until:", "i.e. 80")));


// ------------------------  Take Home  ----------------------------

//-----  Part ONE  -----
  // function squareOf(num){
  //   if (isNaN(num)) {
  //     alert("You must enter a valid number like so: 3");
  //     squareOf(parseInt(prompt("Enter the number to raise to the power of 2")));
  //
  //   } else {
  //     console.log(Math.pow(num, 2));
  //
  //   }
  //
  // }
  // squareOf(parseInt(prompt("Enter the number to raise to the power of 2")));


//-----  Part TWO  -----
// function properGrammar(sentence){
//   // NOTE: -> This can be outside the alert, but basically, it capitalizes the first letter of the sentence, and then adds the rest of the sentence using the sice() method starting with the letter after the first letter
//   if (sentence.endsWith('.')) {
//     alert(`${sentence.charAt(0).toUpperCase() + sentence.slice(1)}`);
//   }else {
//     alert(`${sentence.charAt(0).toUpperCase() + sentence.slice(1) + "."}`);
//
//   }
// }
//
// properGrammar(prompt("Enter a sentence here all lowercase: ","here at the wall"));


//-----  Part THREE  -----
// function stringFlipper(flipMe){
//   alert(`${flipMe.substr(-(flipMe.length / 2)) + flipMe.substr(0,(flipMe.length / 2))}`);
// }
// stringFlipper(prompt("Enter a sentence or word to flip"));

//-----  Part FOUR Bonus  -----
function isPalindrome(s){
  var reversed = s.split('').reverse().join(''); //the '' makes it split each individual letter into an array
  if (s === reversed) {
    alert("Its a palindrome!");
    return true;
  }else {
    alert('Not a palindrome');
    return false;
  }
}
