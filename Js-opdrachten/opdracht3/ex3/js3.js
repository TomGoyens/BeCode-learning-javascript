name = document.getElementById('name');

function annoying(){
  alert(name.value);
}

window.addEventListener('keydown', annoying);
