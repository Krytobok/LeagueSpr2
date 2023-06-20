var myImage = document.querySelector('img');
var images = ['img/Form1.jpg', 'img/Form2.jpg'];
var currentIndex = 0;

myImage.onclick = function() {
  currentIndex = (currentIndex + 1) % images.length;
  myImage.setAttribute('src', images[currentIndex]);
};


var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Как вас зовут?');
  sessionStorage.setItem('name', myName);
  myHeading.textContent = 'Здравствуй, ' + myName + '!';
}

if (!sessionStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = sessionStorage.getItem('name');
  myHeading.textContent = 'Здравствуй, ' + storedName + '?';
}
alert("Автор не несет ответсвенность за моральный/психологический ущерб нанесенный данный оформлением.");