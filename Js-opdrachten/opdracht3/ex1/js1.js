yo = document.getElementById("image1");

function changeImageTo2nd(){
  yo.src = "images/image1_2.jpg";
}
function changeImageTo1st(){
  yo.src = "images/image1.jpg";
}

yo.addEventListener('mouseenter', changeImageTo2nd);
yo.addEventListener('mouseout', changeImageTo1st);
