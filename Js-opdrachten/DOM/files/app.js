//EXERCISE 1: Behandeling van klassen-------------------------------------------

//selecteer de body
var theBody = document.body;

//neem de "bg-aqua"-klasse weg
theBody.classList.remove("bg-aqua");

//de klasse "bg-olive" toevoegen
theBody.classList.add("bg-olive");

//eerste alinea kiezen
var firstp = document.getElementById("first-paragraph");

//de klassen "bg-lime" en "grey" te verwijderen
firstp.classList.remove("bg-lime", "gray");

//de "aqua"-klasse eraan toe te voegen
firstp.classList.add("aqua");

//selecteer alle elementen die de klasse 'bg-silver' hebben.

var silver = document.getElementsByClassName("bg-silver");
console.log(silver);
//pas alle elementen aan door de klasse "bg-teal" aan de elementen toe te voegen
for (var i = 0; i < silver.length; i++){
  silver[i].classList.add("bg-teal");
}


//Pas het element aan door "bg-zilver"-klasse ervan te verwijderen
for (var i = 0; i < silver.length; i++){
  silver[i].classList.remove("bg-silver");
}


//selecteer alle blokquote-elementen
bq = document.getElementsByTagName("blockquote");

//Pas al elementen aan door de klasse "bg-white" an de elementen toe te voegen
for (var i = 0; i < bq.length; i++){
  bq[i].classList.add("bg-white");
}

//EXERCISE 2: CSS-selectoren----------------------------------------------------

//Met querySelector selecteert u het element my-table
var hoi = document.querySelector("#my-table");

//De klasse "bg-purple" toevoegen
hoi.classList.add("bg-purple");

//met querySelectorAll selecteert u alle paragrafen in "container".
var hello = document.querySelector(".container").querySelectorAll("p");

//wijzig alle elementen door het toevoegen van de shadow-klasse
for (let i = 0; i < hello.length; i++){
  hello[i].classList.add("shadow");
}

//EXERCISE 3--------------------------------------------------------------------

//Selecteer alle elementen van het type pre.
var yo = document.querySelectorAll("pre");

//met de eigenschap style wijzigt u de tekstkleur.
for (let i = 0; i < yo.length; i++){
  yo[i].style.color = "#185";
}

//met de style eigenschap verandert de achtergrondkleur dankzij backgroundColor
for (let i = 0; i < yo.length; i++){
  yo[i].style.backgroundColor = "lightgrey";
}

//met de style eigenschap voeg een border-top van 3px solid red toe (vergeet niet dat je op deze manier toegang hebt tot de eigenschappen van een object: ["prop-name"]).
for (let i = 0; i < yo.length; i++){
  yo[i].style.borderTop = "3px solid red";
}

//met de style eigenschap voeg een border-bottom van 3px solid red toe.
for (let i = 0; i < yo.length; i++){
  yo[i].style.borderBottom = "3px solid red";
}

//Selecteer het eerste element van het type h3
hey = document.querySelector("h3");

//vervang de HTML inhoud door <em>Italic title ! yeah !</em>.
hey.innerHTML = "<em>Italic title ! yeah !</em>";

//Selecteer het eerste element van het type h2
heyy = document.querySelector("h2");

//vervang de HTML inhoud door <strong>HTML doesn't work !</strong>
heyy.innerHTML = "<strong>HTML doesn't work !</strong>";

//EXERCISE 4: Elementen aanmaken------------------------------------------------

//Selecteer de eerste ul.
het = document.querySelector("ul");
console.log(het);

//creëer een li element
listElement = document.createElement("LI");
console.log(listElement);

//voeg deze tekst toe My best friend is <a href='http://www.google.com'>Google</a> in de li
listElement.innerHTML = "My best friend is <a href='http://www.google.com'>Google</a>";
console.log(listElement);

//voeg deze li toe in de ul
het.appendChild(listElement);

//selecteer de eerste link in de eerder aangemaakte li
var aElement = listElement.querySelector("a");
console.log(aElement);

//met de eigenschap style wijzigt u de tekstkleur van de link
aElement.style.color = "#654321";

//EXERCISE 5: Meerdere elementen maken en verwijderen---------------------------

//selecteer het eerste 'ol' element
var he = document.querySelector("ol");
console.log(he);

//lus over alle kinderen van de laatste dankzij de children eigendom
for (let i = 0; i < he.children.length; i++){
  console.log(he.children[i]);
}

//verwijder elk kind van ol dankzij removeChild()
var numOfChilredInitial = he.children.length;
for (let i = 0; i < numOfChilredInitial; i++){
  he.removeChild(he.children[0]);
}

//Geef in een array de volgende waarden op: ["Silent Teacher","Code Monkey", "CodeCombat"]
heyHeyArray = ["Silent Teacher","Code Monkey", "CodeCombat"];

//lus alle kinderen in de eerder gecreëerde tafel
for (let i = 0; i < heyHeyArray.length; i++){
  console.log(heyHeyArray[i]);
}

//creëer voor elke waarde van de array een li element met behulp van document.createElement()
var listOfLi = [];
for (let i = 0; i < heyHeyArray.length; i++){
  listOfLi[i] = document.createElement("li");
  listOfLi[i].innerHTML = heyHeyArray[i];
  console.log(listOfLi[i]);
}

//voeg vervolgens elke link toe aan het eerder geselecteerde a element met als naam de waarde van de array.
var listOfA = [];
console.log(listOfA);
for (let i = 0; i < heyHeyArray.length; i++){
  listOfA[i] = document.createElement("a");
  console.log(listOfA);
  if (i == 0){
    listOfA[i].setAttribute("href", "http://silentteacher.toxicode.fr/");
  } else if (i == 1) {
    listOfA[i].setAttribute("href", "https://www.playcodemonkey.com/");
  } else if (i == 2){
    listOfA[i].setAttribute("href", "https://codecombat.com/");
  }
  console.log(listOfA[i]);

  listOfA[i].innerHTML = heyHeyArray[i];
  listOfLi[i].innerHTML = "";
  listOfLi[i].appendChild(listOfA[i]);
  console.log(listOfLi[i]);
  he.appendChild(listOfLi[i]);
}
//note: I put the li elements in the earlier 'ol', though I don't really think the exercises asked for it.
