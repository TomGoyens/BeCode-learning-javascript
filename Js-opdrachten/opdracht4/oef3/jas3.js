colors = document.getElementsByClassName('color');

function changeColor(event){
  color = event.target.classList[1];
  if (color == "red"){
    text.style.color = "red";
  } else if (color == "green"){
    text.style.color = "green";
  } else if (color == "blue") {
    text.style.color = "blue";
  }
}

for (var i = 0; i < colors.length; i++){
  colors[i].addEventListener('click', changeColor);
}


/*
groen = document.querySelector('.green');
blauw = document.querySelector('.blue');
rood = document.querySelector('.red');

text = document.getElementById('text');

function groenify(){
  text.style.color = "green";
}
function rodify(){
  text.style.color = "red";
}
function blauwify(){
  text.style.color = "blue";
}

groen.addEventListener('click', groenify);
rood.addEventListener('click', rodify);
blauw.addEventListener('click', blauwify);
*/
