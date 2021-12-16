let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  ________omdat het tussen haakjes zit______ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype ____________ waarom? ____________ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? ______let geeft de variable aan______ vul je antwoord in op de lijn

function getName(naam) { //In op welke regel in de HTML file wordt deze functie aangeroepen _______regel 17_______ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Parameter___________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde ______naam______ de waarde noemen we een Atribuut__________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een _____melding__ op het scherm met de tekst _____naam____ deze tekst staan op regel ___17____ van de HTML vul je antwoord in op de lijn
}

function hideMe() { //mag je de naam van de functie veranderen? ____ja_______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "block";
    // wat gebeurd er in deze functie? __________de foto wordt verbergen als je erop klikt_________ en waar wordt deze in je HTML aangeroepen? _____23_______ vul je antwoorden in op de lijn
}

function show() { //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML ______regel 25_____ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? _________element zoeken met id__________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";
    // wat gebeurd er in deze functie? ______als je erop drukt krijg we de afbeelding te zien_____________ vul je antwoord in op de lijn
}

function rekenen(getal) { //In op welke regel in de HTML file wordt deze functie aangeroepen ____32__________ en wanneer wordt deze aangeroepen ____als je op onclick drukt_______ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan _________bij let myint_____ en waar komt de waarde van getal vandaan? ____let myint=3________ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord; // wat doet querySelector? ________dat verandert alles tussen___________  Wat is antwoord hier? vul je antwoorden in op de lijn

    //wat gebeurt er in deze functie? _________het rekent uit 5+3____________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? _________dan verandert het eerste getal____________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size) { //In op welke regel in de HTML file wordt deze functie aangeroepen _____44_________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan ______element p________ en waar komt de waarde van kleur vandaan? ____uit het html________ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? _____30px_______ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? _________element, kleur en groote wordt verandert____________ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven ____je krijgt een melding te zien met een naam_______ en wanneer gebeurt dat _____als je erop drukt_____ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? ________dan krijg je een andere naam___________ vul je antwoord in op de lijn.