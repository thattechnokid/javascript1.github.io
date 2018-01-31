
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
