yu = document.querySelectorAll('input');

function wipe(){
  for (var i = 0; i < yu.length; i++){
    if (yu[i].getAttribute('type') == "text"){
      yu[i].setAttribute('value', "");
    }
  }
}
