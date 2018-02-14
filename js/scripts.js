

// console.log(document.forms[0].quantity.value); //Accessing value in quantity field

const orderForm = document.forms.order;
console.log(orderForm.quantity.value);

var submitBtn = orderForm.submit;

document.addEventListener('submit',function(e){
  e.preventDefault();
  //Use this for validation etc. or whatever you want
  if(orderForm.quantity.value == null){
    //stuff
  }
});

// function logThis(){
//   console.log(this.name);
// }
//
// var name = 'peter'
//
// var checkScope = function(){
//   console.log(this);
// }
//
// var obj = {
//   a: checkScope
// }
//
// obj.a();


//-----------------------

var cookies = function(item){
  alert(`Hi ${this.name}, we have your friggin\' ${item}`);
}

var user = {
  name: 'Cristian',
  password: 'Veritas7',
  lastLogin: new Date(),
  // a:cookies
}

// user.a();


//Changing 'this' to anything and making it more dynamic

var admin = {
  name: 'Bob',
  password: 'bruhhhhh',
  lastLogin: new Date(2/2/1232)
}

cookies.call(admin, 'cookies');
// cookies();


//============-------Practice-------===========

const myStrangeString = 'I am not a retard';

var logger = function(){
  const myStrangeString = 'what the H-E-Double-hockey-sticks';
console.log(myStrangeString);
}

console.log(myStrangeString);
logger();
