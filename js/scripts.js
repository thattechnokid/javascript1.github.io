
var myNewString = new String('Hello You piece of poo');
console.log(Object.getPrototypeOf(myNewString));

var userInformation = {
  userName: 'cmendoza0422',
  password: 'i9layth3trum93t'
};

// function CreateUser(userName, password){
//   this.userName = userName;
//   this.password = password;
// }

// var newUser = new CreateUser('Bob', '1234');
// console.log(newUser);
//
// var uN = prompt('Enter A Username');
// var pW = prompt('Enter A Password');
// var newUser2 = new CreateUser(uN, pW);
// console.log(newUser2);
var newUserForm = document.forms.newUser;
newUserForm.submit.addEventListener('click', function(e) {
  login(e);
});

function User(un, pw){
  this.username = un;
  this.password = pw;
}


function login(e){
  e.preventDefault();
  var username = newUserForm.username.value;
  var password = newUserForm.password.value;
  var newUser = new User(username, password);
  console.log(newUser);
}

function calcMileage(miles, gallons){
  return miles / gallons;
}

function Vehicle(wheels, type, engine, color, miles, gallons){
  this.wheels = wheels;
  this.type = type;
  this.engine = engine; //Can be an object as seen below
  this.color = color;
  this.calculateGasMileage = calcMileage(miles, gallons);
}

function Engine(numOfCylinders, horsees){
  this.cylinders = numOfCylinders;
  this.hp = horsees;
}

var myEngine = new Engine(2, 120);

var saturn = new Vehicle(4, 'car', myEngine, 'Green', 256, 55);

console.log(saturn);
