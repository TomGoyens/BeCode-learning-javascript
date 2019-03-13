function opdr1(){
  var variable = prompt("Give me something", "Nothing");
  alert("you gave me "+ variable+ ", great job!");
}

function opdr2(){
  var name = "Goyens";
  var firstname = "Tom";
  var city = "Coolsville";
  alert(("Name\t") + ": "+ name + "\n" + ("Firstname\t") +": " + firstname + "\nCity\t\t" + ": " + city);
}

function opdr3(){
  var variable = prompt("Name pls", "Naam");
  alert("hallo " + variable);
}

function opdr4(){
  var name = document.getElementById('name');
  var firstname = document.getElementById('firstName').value;
  var city = document.getElementById('city').value;
  alert(("Name\t") + ": "+ name.value + "\n" + ("Firstname\t") +": " + firstname + "\nCity\t\t" + ": " + city);
}

function opdr5(){
  var fn = document.getElementById('firstNumber').value;
  var sn = document.getElementById('secondNumber').value;
  alert(fn + " times " + sn + " is: " + (fn*sn));
}

function opdr6(){
  var fn = document.getElementById('firstNumber').value;
  var sn = document.getElementById('secondNumber').value;
  alert("De restdeling van " + fn + " en " + sn + " is: " + (fn%sn));
}

function opdr7(){
  var h = document.getElementById('height').value;
  var b = document.getElementById('birthdate').value;

  var math = 50*(2*h + 5) - b + 1766;

  alert("after doing the  math, I can tell you " + math + " is a very important number");
}

function opdr8(){
  var age = document.getElementById('age').value;
  if (age < 18){
    alert("U bent minderjarig.");
  } else {
    alert("U bent meerderjarig.");
  }
}
