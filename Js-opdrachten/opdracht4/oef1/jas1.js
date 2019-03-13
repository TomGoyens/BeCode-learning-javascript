haai = document.getElementById('image1');

function getBorder(){
  haai.style.border = "solid red 3px";
  haai.style.transition = "0.5s";
}
function noBorder(){
  haai.style.border = "none";
}

haai.addEventListener('mouseenter', getBorder);
haai.addEventListener('mouseout', noBorder);
