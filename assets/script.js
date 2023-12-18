const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Définir les 2 buttons arrows

let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");

// Définir dots containers avec son id ou sa class

let dotsContainer = document.createElement("div");
let parentElement = document.getElementById("banner");
parentElement.appendChild(dotsContainer);
dotsContainer.classList.add("dotsContainer");

let dot = document.createElement("div");
let parentElement2 = document.querySelector(".dotsContainer");
parentElement2.appendChild(dot);
dot.classList.add("dot");

let dot2 = document.createElement("div");
let parentElement3 = document.querySelector(".dotsContainer");
parentElement3.appendChild(dot2);
dot2.classList.add("dot");

let dot3 = document.createElement("div");
let parentElement4 = document.querySelector(".dotsContainer");
parentElement4.appendChild(dot3);
dot3.classList.add("dot");

let dot4 = document.createElement("div");
let parentElement5 = document.querySelector(".dotsContainer");
parentElement5.appendChild(dot4);
dot4.classList.add("dot");


// Définir le img slider comme element du dom



// Définir tagline


// initialiser l'index A0

// creer function pour slides

// creer function pour button

let index = 0;

arrowLeft.addEventListener("click", () => {
	index--
	console.log("click");
	console.log("index",index)
	
})
arrowRight.addEventListener("click", () => {
	index++
	console.log("click");
	console.log("index",index)
})

// creer function pour dots

