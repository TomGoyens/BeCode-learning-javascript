fraai = document.querySelectorAll("a");
kraai = document.getElementById('text');

function show(){
  kraai.style.visibility = "visible";
}
function hide(){
  kraai.style.visibility = "hidden";
}

fraai[0].addEventListener('click', show);
fraai[1].addEventListener('click', hide);
