
var myPTag = document.querySelector('p');

console.log(myPTag.textContent);
console.log(myPTag.innerHTML);

myPTag.innerHTML = "crud";


// ------------------------
var newH1 = document.createElement('h1'),
textContent = document.createTextNode('Hello World'),
body = document.querySelector('body'),
p = document.createElement('p');

p.textContent = 'Foobar mother of chicken soup';

newH1.appendChild(textContent);
body.appendChild(newH1);
body.appendChild(p);


var newDiv = document.createElement('div');
newDiv.style.backgroundColor = 'green';
newDiv.style.height = '100px';

//parentElement.insertBefore(elementToAdd, whereToInsertBefore)
  body.insertBefore(newDiv, p);
  console.log(body.classList);// Will log all the classes that the body tag has

  body.classList.add('red-background');
  body.classList.add('white-text');

  newDiv.addEventListener('click', function(){
    body.classList.toggle('red-background');
    body.classList.toggle('white-text');
  });

  var newImg = document.createElement('img');
  newImg.setAttribute('src', 'https://images.unsplash.com/photo-1457410129867-5999af49daf7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db366be68b7ffcb315597fcf0c1b6a51&auto=format&fit=crop&w=500&q=80');
  body.appendChild(newImg);


  // =========--  FizzBuzz  --============
  var arrayNums = [];
  for (var i = 1; i < 101; i++) {
    arrayNums.push(i);
  }
  console.log('------- ORIGINAL NUMBERS ---------');
  console.log(arrayNums);

  for (var i = 0; i < arrayNums.length; i++) {
    if (arrayNums[i]%3 == 0 && arrayNums[i]%5 == 0) {
      arrayNums.splice(i, 1, 'FizzBuzz');
    }
    if (arrayNums[i]%3 == 0) {
      arrayNums.splice(i, 1, 'Fizz');
    }
    if (arrayNums[i]%5 == 0) {
      arrayNums.splice(i, 1, 'Buzz');
    }

  }
  console.log('------- NEW NUMBERS --------');
  console.log(arrayNums);

//================  TAKE HOME  ================

var newButton = document.querySelector('#titleBtn');

newButton.onclick = function(){
  var h1Dynamic = document.createElement('h1');
  h1Dynamic.style.textAlign = 'center';

  var pDynamic = document.createElement('p');
  pDynamic.style.textAlign = 'justify';

  var pageTitle = prompt('Enter a page Title', 'Welcome');
  h1Dynamic.append(pageTitle);

  var whatYouDid = prompt('Enter a sentence about what you did today', 'I did my homework');
  pDynamic.append(whatYouDid);

  var favColor = prompt('Enter your favorite color', 'Red, orange, yellow, green, blue, purple, pink, brown, black');
  favColor = favColor.toLowerCase();

  if (favColor.typeof === 'number') {
    alert('Please Enter a valid color name');
  }

  pDynamic.style.backgroundColor = favColor;
  body.insertBefore(h1Dynamic, newButton);
  body.insertBefore(pDynamic, newButton);

}
