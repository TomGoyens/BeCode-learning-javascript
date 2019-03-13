check = document.querySelector('button');
pas = document.getElementById('password');
confirm = document.getElementById('confirmation');

function passCheck(){
  if (pas.value != confirm.value){
    pas.style.border = "2px solid red";
    confirm.style.border = "2px solid red";
    pas.style.boxShadow = "0 0 1px red";
    confirm.style.boxShadow = "0 0 1px red";
  } else {
    pas.style.border = "2px solid green";
    confirm.style.border = "2px solid green";
    pas.style.boxShadow = "0 0 1px green";
    confirm.style.boxShadow = "0 0 1px green";
  }
}

check.addEventListener('click', passCheck);
