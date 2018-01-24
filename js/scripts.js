 // -------  Logical Operators  ----------

 const bestNumber = 42;

 console.log(!bestNumber); //Checks if this even exists

 // ------  Comparison Operators  ------------

 var string = "1";
 var number = 1;
 console.log(string == number); //Expects true: same value...loosely equal

 console.log(string === number); //Expects false: same value, DIFFERENT type ... strictly not equal

  // -------  Practice  -----------

  var string1 = "Hello Bro";
  var string2 = new String();
  var string3 = new String("Hello Bro");

  console.log(string1 === string2); //Returns false
  console.log(string1 == string2); //Returns false

  console.log(string1 === string3); //Returns false
  console.log(string1 == string3); //Returns true
