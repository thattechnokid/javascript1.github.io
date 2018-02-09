
var header = document.getElementsByTagName('H1');
console.log('h1: ', header);

var para3 = document.getElementsByTagName('p')[2];
console.log('paragraph 3: ', para3);

var para4 = document.getElementsByTagName('p')[3];

var changeBtn = document.getElementById('changePara3');

para4.addEventListener('click',function(){
  para4.innerHTML = "trains are cool bro";
});
changeBtn.onclick = function(){
  para3.innerHTML = 'I like food';

};


//-------------Queries-------------
// var userQueryType = prompt("Which type do you want to use?", "Please use either 'tag' 'class' 'id' 'selector' or 'selectorAll' ");
//
// function queryDOM(queryType, tagToQuery){
//   tagToQuery = 'body';
//   switch (queryType) {
//     case 'tag':
//       console.log(document.getElementsByTagName('body')[0]); //Making sure to get the element itself with [0]
//       break;
//
//     case 'class':
//       console.log(document.getElementsByClassName('bodyTag')[0]);
//       break;
//
//     case 'id':
//       console.log(document.getElementById('bodyID')[0]);
//       break;
//
//     case 'selector':
//       console.log(document.querySelector('body'));
//       break;
//
//     case 'selectorAll':
//       console.log(document.querySelectorAll('body'));
//       break;
//
//     default:
//       alert("Please Enter A Valid Answer");
//       // location.reload;
//       break;
//   }
// }


// =======-- Practice --=======
var body = document.getElementsByTagName('body'),
colorHdr = document.getElementsByTagName('h1')[1],
alertButton = document.getElementById('alertBtn'),
myDiv = document.getElementsByClassName('tryIt')[0],
myInput = document.getElementById('myInput'),
colors = ['blue', 'green', 'black', 'darkgray'];

document.onkeypress = function() {
  colorHdr.style.color = "green";
  document.onkeyup = function(){
    colorHdr.style.color = "black";
  }
}
alertButton.onclick = function(){
  alert("Bro you did it!");
}
// body.onclick = function(){
//   window.location.href = 'http://www.facebook.com';
// }
myDiv.addEventListener('mouseenter', function(){
  myDiv.style.backgroundColor = "green";

  myDiv.addEventListener('mouseleave', function(){
    myDiv.style.backgroundColor = "white";

  });
});


myInput.addEventListener('keydown',function(e){
  // console.log(e);
  if (e.keyCode === 13) {
    console.log("You hit enter!!");
  }
});

// =====================================================
var h1Temp = document.getElementById('temp');



var temp = parseInt(prompt('Enter a Temperature','In numerical format: 102'));

var format = prompt('Enter the Degree type','F or C');
format = format.toUpperCase();

if (format === 'F') {
  h1Temp.innerHTML = `${temp} &deg;F`;
}else if (format === 'C') {
  h1Temp.innerHTML = `${temp} &deg;C`;
}

h1Temp.addEventListener('click', convert(temp, format));


function convert(temp, format) {
  if (format === 'C') {
    //Convert to F
    temp *= ((9/5)+32);
    h1Temp.innerHTML = `${temp} &deg;F`;
  }
}
// function getValues(){
//   h1Temp.addEventListener('click', convert(temp, format));
//
//   var temp = parseInt(prompt('Enter a Temperature','In numerical format: 102'));
//
//   if (isNaN(temp)) {
//     alert('Enter a valid number like so: 3');
//     getValues();
//   }
//
//   }
