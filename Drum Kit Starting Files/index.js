for(var i=0;i<document.getElementsByTagName("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click", wClick);
}
function wClick(){

// var audio1= new Audio('sounds/tom-4.mp3');
// audio1.play();
var btnInnerHtml=this.innerHTML;
makeSound(btnInnerHtml);
buttonAnimation(btnInnerHtml);
}

//for kerpress
document.addEventListener("keypress", function(event){
  var k=event.key;
  makeSound(k);
  buttonAnimation(k);
});
function makeSound(key){
switch (key) {
  case "w":
     var audio1= new Audio('sounds/crash.mp3');
     audio1.play();
     break;
  case "a":
     var audio2= new Audio('sounds/kick-bass.mp3');
     audio2.play();
     break;
  case "s":
     var audio3= new Audio('sounds/snare.mp3');
     audio3.play();
     break;
  case "d":
      var audio4= new Audio('sounds/tom-1.mp3');
      audio4.play();
      break;
  case "j":
      var audio5= new Audio('sounds/tom-2.mp3');
      audio5.play();
      break;
  case "k":
      var audio6= new Audio('sounds/tom-3.mp3');
      audio6.play();
      break;
  case "l":
      var audio8= new Audio('sounds/tom-4.mp3');
      audio8.play();
      break;
default: console.log("no sound for the key!");
}
}


function buttonAnimation(key){
  var activeButton=document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function(){ activeButton.classList.remove("pressed");}, 100);
}

//changing the color of the button

//using anonymus function:

// document.querySelector("button").addEventListener("click", function () { alert("Somthing got clicked!")});
