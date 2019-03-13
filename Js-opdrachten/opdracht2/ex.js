function surfaceRectagle(){
  a = prompt("length rectangle");
  b = prompt("width rectangle");

  alert("rectangle surface equals " + (a*b));
}

function perimeterRectangle(){
  a = prompt("length rectangle");
  b = prompt("width rectangle");

  alert("rectangle perimiter measures " + (2*a+2*b));
}

function surfaceCircle(){
  a = prompt("Circle radius");

  alert("Circle surface equals " + (Math.PI*a*a));
}

var a = 3;
var b = 2;

function tripple(x){
  return (3*x);
}

function display(){
  alert(tripple(a) + " en " + tripple(b));
}

var tab = [-1, 2, 4];

function add(x){
  return x+2;
}

function display2(){
  alert(add(tab[0]));
  temp = tab.length-1;
  alert(add(tab[temp]));
}

function bigMath1(){
  var b = 2;
  a = b++;
  alert("b = 2 && a = b++ => a = " + a);
}
function bigMath2(){
  b = 2;
  a = ++b;
  alert("b = 2 && a = ++b => a = " + a);
}
function bigMath3(){
  b = 2;
  a = b--;
  alert("b = 2 && a = b-- => a = " + a);
}
function bigMath4(){
  b = 2;
  a = --b;
  alert("b = 2 && a = --b => a = " + a);
}
function bigMath5(){
  b = 2;
//  var c += b++;
  alert("b = 2 && a += b++ => a = " + "NaN");
}
function bigMath6(){
  b = 2;
  a = 1;
  a += ++b;
  alert("b = 2 && a += b++ (a init als a=1) => a = " + a);
}
function bigMath7(){
  b = 2;
  a = 1;
  a -= b++;
  alert("b = 2 && a -= b++ (a init als a=1) => a = " + a);
}
function bigMath8(){
  b = 2;
  a = 1;
  a -= ++b;
  alert("b = 2 && a -= ++b (a init als a=1) => a = " + a);
}
function bigMath9(){
  b = 2;
  a = 1;
  a += b--;
  alert("b = 2 && a += b-- (a init als a=1) => a = " + a);
}
function bigMath10(){
  b = 2;
  a = 1;
  a += --b;
  alert("b = 2 && a += --b (a init als a=1) => a = " + a);
}

function subtract(x){
  x = x-tab[0];
  if (x< 0){
    alert("negatief getal!");
  } else if (x >= 0){
    alert("Getal positief.");
  }
  return x;
}

function display3(){
  alert(subtract(tab[0]));
  temp = (tab.length-1);
  alert(subtract(tab[temp]));
}

function makeChoice(){
  num = prompt("1, 2 of 3? make your choice wisely...");
  switch(num) {
  case "1":
    alert("1. Thank you");
    break;
  case "2":
    alert("2. Hello");
    break;
  case "3":
    alert("3. Good bye");
    break;
  default:
    alert( "Excuse me, did I stutter?");
  }
}

function weekday(){
  switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
  }
  alert("Today is " + day);
}

function testWhile(){
  pmepls = prompt("gimme a string! gimme a string with a 'p'!");
  var i;
  while(pmepls.includes('p') == false){
      pmepls = prompt("Try again! Gimme a string with a 'p'!");
      i++;
      if (i==4){
        alert("Are you dizzy?");
      }
  }
  alert("yeah \"" + pmepls + "\" indeed, my friend!");
}

function sum(){
  var som = 0;
  for (var i = 0; i < 3; i++){
    som += parseInt(prompt("Gimme the " + (i+1) + "st one!"));
  }
  alert("And the sum is...");
  alert(som + "!");

}

function calcAverage(){
	var nums = [];
	while (true){
		var temp = prompt("please enter a positive integer.");
		temp = parseFloat(temp);
		var avr = 0;
		if (temp%1==0 && temp>=0){
			nums.push(temp);
			console.log(nums);
			var tempAvr = 0;
			for (var i = 0; i < nums.length; i++){
				tempAvr += nums[i];
			console.log(tempAvr);
			}
			avr = tempAvr/nums.length;
			console.log(avr);
			alert("Current numbers are: " + nums + ", with a current average of " + avr + ".");
		} else {
			alert("Try again.");
		}
		if (confirm("add another number?") == false){
			break;
		}
	}
	alert("The final numbers are: " + nums + ", with an average of " + avr + ".");
}

function temperatureConversion(){
  cont = true;
  while(cont == true){
    var how = prompt("What type of conversion would you like to do?\n0. end the program\n1. for Celcius to Fahrenheit.\n2. Celcius to Kelvin.\n3. Fahrenheit to Celcius.\n4. Fahrenheit to Kelvin.\n5. Kelvin to Celcius.\n6. Kelvin to Fahrenheit.");
    if (how == 0){
      break;
    } else if (how == 1){
      var c = prompt("which temperature in degrees Celcius would you like to convert to Fahrenheit?");
      c = parseInt(c);
      var f = (c * 9/5) + 32;
      cont = confirm ("you have converted " + c + "°C to " + f + "°f.\nWould you like to do another conversion?");
    } else if (how == 2){
      var c = prompt("which temperature in degrees Celcius would you like to convert to Kelvin?");
      c = parseInt(c);
      var k = c + 273.15;
      cont = confirm ("you have converted " + c + "°C to " + k + "°K.\nWould you like to do another conversion?");
    } else if (how == 3){
      var f = prompt("which temperature in degrees Fahrenheit would you like to convert to Celcius?");
      f = parseInt(f);
      var c = ([f] - 32) / (9/5);
      cont = confirm ("you have converted " + f + "°f to " + c + "°C.\nWould you like to do another conversion?");
    } else if (how == 4){
      var f = prompt("which temperature in degrees Fahrenheit would you like to convert to Kelvin?");
      f = parseInt(f);
      var k = ((f - 32) * (5/9)) + 273.15;
      cont = confirm ("you have converted " + f + "°f to " + k + "°K.\nWould you like to do another conversion?");
    } else if (how == 5){
      var k = prompt("which temperature in degrees Kelvin would you like to convert to Celcius?");
      k = parseInt(k);
      var c = [k] - 273.15;
      cont = confirm ("you have converted " + k + "°K to " + c + "°C.\nWould you like to do another conversion?");
    } else if (how == 6){
      var k = prompt("which temperature in degrees Kelvin would you like to convert to Fahrenheit?");
      k = parseInt(k);
      var f = ([k] * 9/5) - 459.67;
      cont = confirm ("you have converted " + k + "°K to " + f + "°f.\nWould you like to do another conversion?");
    } else {
      alert("from 0 to 6 dude it's not supposed to be that hard.");
    }
  }
}

function calcBMI(){
  var height = prompt("how tall are you, please?");
  height = parseFloat(height);
  var weight = prompt("how much do you weigh, please.");
  weight = parseFloat(weight);
  var bmi = weight/(height*height);
  bmi = Number(bmi).toFixed(2);
  alert("your have a bmi of: " + bmi);
  if (bmi < 16.5){
    alert("your weightclass is: underfed");
  } else if (bmi < 18.5){
    alert("your weightclass is: underweight");
  } else if(bmi < 25){
    alert("your weightclass is: normal weight");
  } else if (bmi < 30){
    alert("your weightclass is: Overweight");
  } else if (bmi < 35){
    alert("your weightclass is: class I obesity");
  } else if (bmi < 40){
    alert("your weightclass is: class II obesity");
  } else {
    alert("your weightclass is: morbidly obese");
  }
}
