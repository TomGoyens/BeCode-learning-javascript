//oef1--------------------------------------------------------------------------
var char = document.getElementById("character");

function numPress(event){
  console.log(event);
  switch(event.key) {
    case "0":
      char.style.backgroundColor = "#000";
      break;
    case "1":
      char.style.backgroundColor = "#111";
      break;
    case "2":
      char.style.backgroundColor = "#222";
      break;
    case "3":
      char.style.backgroundColor = "#333";
      break;
    case "4":
      char.style.backgroundColor = "#444";
      break;
    case "5":
      char.style.backgroundColor = "#555";
      break;
    case "6":
      char.style.backgroundColor = "#666";
      break;
    case "7":
      char.style.backgroundColor = "#777";
      break;
    case "8":
      char.style.backgroundColor = "#888";
      break;
    case "9":
      char.style.backgroundColor = "#999";
      break;
    case "arrowUp":
      upArrow.class = "#999";
      break;
    case "arrowDown":
      char.style.backgroundColor = "#999";
      break;
    case "arrowLeft":
      char.style.backgroundColor = "#999";
      break;
    case "arrowRight":
      char.style.backgroundColor = "#999";
      break;
    default:
      char.style.backgroundColor = '#fff';
  }
}

window.addEventListener("keydown", numPress);

//Oef2--------------------------------------------------------------------------

var upArrow = document.querySelector('.up');
var downArrow = document.querySelector('.down');
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');

function arrowsDown(event){
  switch(event.key) {
    case "ArrowUp":
      upArrow.classList.add("highlight");
      break;
    case "ArrowDown":
      downArrow.classList.add("highlight");
      break;
    case "ArrowLeft":
      leftArrow.classList.add("highlight");
      break;
    case "ArrowRight":
      rightArrow.classList.add("highlight");
      break;
    default:
      break;
  }
}
function arrowsUp(event){
  switch(event.key) {
    case "ArrowUp":
      upArrow.classList.remove("highlight");
      break;
    case "ArrowDown":
      downArrow.classList.remove("highlight");
      break;
    case "ArrowLeft":
      leftArrow.classList.remove("highlight");
      break;
    case "ArrowRight":
      rightArrow.classList.remove("highlight");
      break;
    default:
      break;
  }
}

window.addEventListener("keydown", arrowsDown);
window.addEventListener("keyup", arrowsUp);
