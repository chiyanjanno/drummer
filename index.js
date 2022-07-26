var numberOfButtons = document.querySelectorAll("button").length;

for (var i = 0; i < numberOfButtons; i++) {

  // detecting button pressed
  document.querySelectorAll("button")[i].addEventListener("click", function(){

      var buttonPressed = this.innerHTML;
      makeSound(buttonPressed);

      addAnimation(buttonPressed);


  });
}
 document.addEventListener("keypress",function(event){

    makeSound(event.key);

    addAnimation(event.key);
    // console.log(event.key);

});

 // determining which button pressed to correspond to sounds
function makeSound(key){

  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    default:
  }

    }
    function addAnimation(currentkey){
      var activeButton = document.querySelector("."+ currentkey);
      activeButton.classList.add("pressed");

      setTimeout(function(){
        activeButton.classList.remove("pressed");
      },100);
}
