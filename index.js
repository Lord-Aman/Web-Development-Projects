var numberOfDrums = document.querySelectorAll(".drum").length;
console.log(numberOfDrums)


// Detecting Button Press
for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting Keyboard Press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {

    case "a":
      var tom2 = new Audio("sounds/bubbles.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/clay.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/confetti.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/glimmer.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/moon.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/ufo.mp3");
      kick.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
