//oefening 1
oef1 = document.getElementsByClassName("hoverMe");

function disappear(event){
  console.log(event)
  event.target.classList.add("disappear");
}

for(var i = 0; i < oef1.length; i++){
  oef1[i].addEventListener("mouseover", disappear);
}
//oefening 2--------------------------------------------------------------------
oef2 = document.getElementById("reset");

function appear(event){
  for(var i = 0; i < oef1.length; i++){
    oef1[i].classList.remove("disappear");
  }
}
function resetStyle(event){
  event.target.style.fontWeight ="700";
}
function resetStyleReset(event){
  event.target.style.fontWeight ="400";
}


oef2.addEventListener('click', appear);
oef2.addEventListener('mouseenter', resetStyle);
oef2.addEventListener('mouseout', resetStyleReset);
//oefening 3--------------------------------------------------------------------
oef31 = document.querySelector("#x-axis");
oef32 = document.querySelector("#y-axis");


function logx(event){
  oef31.innerHTML = "mouse pos. x: " + event.pageX;
}
function logy(eyent){
  oef32.innerHTML = "mouse pos. y: " + event.pageY;
}

window.addEventListener("mousemove", logx);
document.body.addEventListener("mousemove", logy);
