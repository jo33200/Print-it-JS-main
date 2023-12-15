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

// D
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");

// Définir dots containers avec son id ou sa class
// Définir le img slider comme element du dom
// Définir tagline

// initialiser l'index A0
// creer function pour dots
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
