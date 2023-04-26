// JavaScript Document
console.log("Howdy!");


// GELUID
const audioPlayer = document.getElementById('audioPlayer');
const barbieLogo = document.querySelector('.barbie');

// Speel het MP3-bestand af wanneer er over het Barbie-logo wordt gehoverd
barbieLogo.addEventListener('mouseover', () => {
    audioPlayer.play();
});

// Pauzeer het MP3-bestand wanneer de hover over het Barbie-logo wordt verwijderd
barbieLogo.addEventListener('mouseout', () => {
    audioPlayer.pause();
});

// DIALOGS

// barbie  1959 //
const barbie1959button = document.querySelector("ol li:nth-of-type(1) > button");
const barbie1959dialog = document.querySelector("ol li:nth-of-type(1) dialog");

barbie1959button.addEventListener("click", openBarbie1959Dialog);

function openBarbie1959Dialog() {
	barbie1959dialog.showModal();
}

// barbie  1961 //
const barbie1961button = document.querySelector("ol li:nth-of-type(2) > button");
const barbie1961dialog = document.querySelector("ol li:nth-of-type(2) dialog");

barbie1961button.addEventListener("click", openBarbie1961Dialog);

function openBarbie1961Dialog() {
	barbie1961dialog.showModal();
}


// barbie  1968 //
const barbie1968button = document.querySelector("ol li:nth-of-type(3) > button");
const barbie1968dialog = document.querySelector("ol li:nth-of-type(3) dialog");

console.log(barbie1968dialog);

barbie1968button.addEventListener("click", openBarbie1968Dialog);

function openBarbie1968Dialog() {
	barbie1968dialog.showModal();
}

// barbie  1980 //
const barbie1980button = document.querySelector("ol li:nth-of-type(4) > button");
const barbie1980dialog = document.querySelector("ol li:nth-of-type(4) dialog");

barbie1980button.addEventListener("click", openBarbie1980Dialog);

function openBarbie1980Dialog() {
    console.log("he");
	barbie1980dialog.showModal();
}

// barbie  1992 //
const barbie1992button = document.querySelector("ol li:nth-of-type(5) > button");
const barbie1992dialog = document.querySelector("ol li:nth-of-type(5) dialog");

barbie1992button.addEventListener("click", openBarbie1992Dialog);

function openBarbie1992Dialog() {
	barbie1992dialog.showModal();
}

// barbie  1999 //
const barbie1999button = document.querySelector("ol li:nth-of-type(6) > button");
const barbie1999dialog = document.querySelector("ol li:nth-of-type(6) dialog");

barbie1999button.addEventListener("click", openBarbie1999Dialog);

function openBarbie1999Dialog() {
	barbie1999dialog.showModal();
}

// barbie  2015//
const barbie2015button = document.querySelector("ol li:nth-of-type(7) > button");
const barbie2015dialog = document.querySelector("ol li:nth-of-type(7) dialog");

barbie2015button.addEventListener("click", openBarbie2015Dialog);

function openBarbie2015Dialog() {
	barbie2015dialog.showModal();
}

// barbie  2016//
const barbie2016button = document.querySelector("ol li:nth-of-type(8) > button");
const barbie2016dialog = document.querySelector("ol li:nth-of-type(8) dialog");

barbie2016button.addEventListener("click", openBarbie2016Dialog);

function openBarbie2016Dialog() {
	barbie2016dialog.showModal();
}

