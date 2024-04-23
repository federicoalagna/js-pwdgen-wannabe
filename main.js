'use strict'

let currentElement = document.getElementById(`username`);
let currentText = currentElement.innerHTML;
const userName = prompt(`inserisci il tuo nome`);
const userLastName = prompt(`inserisci il tuo cognome`);
const userColor = prompt(`inserisci il tuo colore preferito`);

currentText = `${currentText}${userName}${userLastName}${userColor}01` ;
console.log(currentText);
currentElement.innerHTML = currentText;