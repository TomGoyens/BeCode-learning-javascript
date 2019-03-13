yo = document.getElementsByTagName('img');

function changeImage(event){
  imgName = event.target.id;
  if(event.target.getAttribute('src').includes('_')){
    event.target.src = "images/"+ imgName +".jpg";
  } else {
    event.target.src = "images/"+ imgName +"_2.jpg";
  }
}

for (var i = 0; i < yo.length; i++){
  yo[i].addEventListener('mouseenter', changeImage);
  yo[i].addEventListener('mouseout', changeImage);
}
