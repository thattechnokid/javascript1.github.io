
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
