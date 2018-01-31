
// --------  Learning about arrays  ---------

var myArray = ['thingOne', 22, true];
console.log(myArray[0],myArray[2]);

// -----  Practice  ------

var myDumbArray = ["The Greatest Showman", 7, true, 2016];
console.log(myDumbArray, myDumbArray.length);

// -----  Checking if something is an actual Array type  ---------

console.log(typeof(myArray)); //Returns as an object
console.log(Array.isArray(myArray)); //Returns true

// var bestTeacher = prompt("Who is the best teacher", "Juan");


// ----------- Editing arrays -----------


myArray.push("Juan"); //Add item to end of array
console.log(myArray);

myArray.unshift("Bro"); //Add item to the beginning of the array
console.log(myArray);

myArray.pop();  //Remove the last item in array
console.log(myArray);

myArray.shift();  //Removes the first item in the array
console.log(myArray);


 // -------------  Practice  --------------

myArray.push(2017, "Pops", true);
console.log(myArray);

//arrayname.splice(index to start at, num of items to delete, what to insert);

// myArray.splice(1)  removes elements in array starting from first index, thus only leaving the 0th index in the array

// myArray.splice(2, 1); removes the 2nd index only
// myArray.splice(2, 2); removes the 2nd and 3rd index

myArray.splice(2, 1, false); //removes 2nd index and replaces it with false
console.log(myArray);

myArray.splice(3, 0, 3.1415); //Places an item at the third index...no deletions
console.log(myArray);

myArray.splice(-2,1);// Moves 2 indexes from the end backwards. Does NOT follow the 0 index system; deletes that item
console.log(myArray);

var myCopiedArray = myArray.slice(0,3); //Makes a copy of the myArray starting at the first element through the 3rd element and puts it into the myCopiedArray
console.log(myCopiedArray);

myCopiedArray = myArray.slice(1, 6); //copies the array from the 1st index and copies all the way to the end. if there are 5 indexes, to get the last element, put 6 in the second parameter of the slice function
console.log(myCopiedArray);


// -------------------  Take home day 3  -------------------------

// // var favColor = prompt("What is your favorite color?", "blue or green");
//
// // favColor = favColor.toLowerCase();
//
// switch (favColor.toLowerCase()) {
//   case "blue":
//     alert("Are you feeling blue?");
//     break;
//   case "green":
//     alert("The greener the better");
//     break;
//   default:
//     alert("You're boring... Enter a valid color");
//
// }

// -----------------  String Interpolation  ---------------
//
// var firstName = prompt("Enter Your First Name", "John");
// var lastName = prompt("Enter Your Last Name", "Doe");
// var color = prompt("Whats Your favorite color?");

//New way of doing this:

// alert(`Hey there ${firstName}! Your favorite color is ${color}, and your Last name is ${lastName}`);


// --------------  Find index of an item in array  -------------------
var arrayOne = [1, 2, 3, 4, 5];

if (arrayOne.indexOf(6) !== -1) {
  alert("It is there!!");
} else {
  // alert("It is not in the array");
  console.log(arrayOne.indexOf(6));
}

// -------------  reverse items in an array  --------------
console.log("---- Before ----");
console.log(arrayOne);
console.log("---- After ----");
console.log(arrayOne.reverse());


// -----------  Sorting arrays' elements  ------------

var days = [2, 1, 6, 31, 88, 63];
console.log("---- Before ----");
console.log(days);
console.log("---- After ----");
console.log(days.sort());



// --------------  Multi-Dimensional Arrays  -----------------

var favoriteMovie = ['Star Wars VI', '1983'];
    var secondFavorite = ['Return of the King', '2003'];
    var thirdFavorite = ['Equilibrium', '2002'];
    var myFavoriteMovies = [];
    myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite);
    //Result:
    [['Star Wars VI', '1983'], ['Return of the King', '2003'], ['Equilibrium', '2002']];

var movieYears = [];
movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1],myFavoriteMovies[2][1]);
// alert(movieYears);

// ------------  PRACTICE  ---------------

var firstMovie = ["Star Wars 8", "Rey"];
var secondMovie = ["The Greatest Showman", "P.T. Barnum"];
var thirdMovie = ["Batman", "Batman"];
var fourthMovie = ["Superman", "Clark Kent"];
var fifthMovie = ["Maze Runner", "Thomas"];

var movieTitles = [];
var favorites = [];
var leastFavorites = [];

movieTitles.push(firstMovie, secondMovie, thirdMovie, fourthMovie, fifthMovie);
// alert(`Your favorite movies are: ${movieTitles}`);
favorites.push(movieTitles[0]);
leastFavorites.push(movieTitles[2]);
console.log(favorites);
console.log(leastFavorites.length);



// ------------------  LOOPS  ---------------

// ----  While Loop  ----

var n = 0;
while (n < 3) {
  n++;
}
console.log(n);

// --------------------------------------------
var i = 0;
while (i < movieTitles.length) {
  console.log(movieTitles[i]);
  // NOTE: Without i++, it will be an infinite loop!!
  i++;
}

// ---- FOR Loop ----
for (var i = 0; i < movieTitles.length; i++) {
console.log(movieTitles[i]);
}

// ----  DO While Loop  ----
var result = '';
var i = 0;

do {
  i += 1;

  result += i;
} while (i < 5);

console.log(result); //Outputs 12345

// ---------------  PRACTICE  -----------------
for (var i = 0; i < movieTitles.length; i++) {
  if (movieTitles[i][0] === "The Greatest Showman") {
    // alert(`Your Favorite movie is ${movieTitles[i][0]} with ${movieTitles[i][1]} as the main character`);
  }
}

//ENd
