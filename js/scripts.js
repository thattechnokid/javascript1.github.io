
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
var body = document.getElementsByTagName('body');
var colorHdr = document.getElementsByTagName('h1')[1];

var alertButton = document.getElementById('alertBtn');

var myDiv = document.getElementsByClassName('tryIt')[0];
var myInput = document.getElementById('myInput');
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
