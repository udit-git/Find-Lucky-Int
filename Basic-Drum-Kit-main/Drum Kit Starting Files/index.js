var buttonList = document.getElementsByClassName('drum');
var i;
for (let i=0;i<=buttonList.length;i++) {
buttonList[i].addEventListener("click", handleclick);
buttonList[i].addEventListener("keypress", handlekey);
buttonList[i].addEventListener("click", clickAnimation);
buttonList[i].addEventListener("keypress", keyAnimation);
}

//Functions area*******************************************************
// function(event){console.log(event.key);}
function handlekey() {
  switch (event.key) {
    case "w":
      var audio = new Audio('./sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('./sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('./sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('./sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('./sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('./sounds/crash.mp3');
      audio.play();
      break;
      case "l":
        var audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();
        break;
    default:
      // alert("Error!");
      console.log();
      break;
  }
// console.log(event.key);
}
function handleclick() {
  switch (this.innerHTML) {
    case "w":
      var audio = new Audio('./sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('./sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('./sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('./sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('./sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('./sounds/crash.mp3');
      audio.play();
      break;
      case "l":
        var audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();
        break;
    default:
      alert("Error!");
      console.log();
      break;
  }
}
function keyAnimation ()  {
  // var activeKey = document.querySelector(event.key);
 var dot = ".";
var activeKey = dot.concat(event.key);
    document.querySelector(activeKey).classList.add("pressed");
       setTimeout(function () {document.querySelector(activeKey).classList.remove("pressed");}, 100 );
}

function clickAnimation() {
  var dot = ".";
 var activeClick = dot.concat(this.innerHTML);
     document.querySelector(activeClick).classList.add("pressed");
     setTimeout(function () {document.querySelector(activeClick).classList.remove("pressed");}, 100 );
}
//FunctionEnd *******************************************************
/*
document.querySelector('button.a').addEventListener("click", handleclick);
document.querySelector('button.s').addEventListener("click", handleclick);
document.querySelector('button.d').addEventListener("click", handleclick);
document.querySelector('button.w').addEventListener("click", handleclick);
document.querySelector('button.j').addEventListener("click", handleclick);
document.querySelector('button.k').addEventListener("click", handleclick);
document.querySelector('button.l').addEventListener("click", handleclick);
*/

//  console.log(this.style.color = "white");

// audio.play();
