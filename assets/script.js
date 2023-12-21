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
document.addEventListener("DOMContentLoaded", (event)=>{
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let dotsContainer = document.getElementById("banner");

// Définir dots containers avec son id ou sa class

let dotsContainerdiv = document.createElement("div")

dotsContainerdiv.classList.add("dotsContainer");
dotsContainer.appendChild(dotsContainerdiv)

// Ajouter des dots

slides.forEach((slide,index) => {
	let dot = document.createElement("div");
	dot.classList.add("dot")
	dot.addEventListener("click", ()=>updateSlide(index))
	dotsContainerdiv.appendChild(dot)
})


// Définir le img slider comme element du dom

function updateSlide (index) {
	currentSlideIndex = index;

	// mettre à jour image et légende
	let bannerImg= document.getElementById("banner-img")
	bannerImg.src=`./assets/images/slideshow/${slides[index].image}`
	let tagline = document.getElementById("banner-tagline")
	tagline.innerHTML=slides[index].tagLine

	// mettre a jour le point actif
	let dots= document.querySelectorAll(".dot")
	dots.forEach((dot,dotIndex)=>{
		if(dotIndex === index){
			dot.classList.add("dot_selected")
		}else {
			dot.classList.remove("dot_selected")
		}
	})
}


// creer function pour button

let currentSlideIndex = 0;

arrowLeft.addEventListener("click", () => {
	console.log("click")
	let newIndex=currentSlideIndex -1;
	if( newIndex < 0 ) newIndex = slides.length -1
	updateSlide(newIndex)
	
})
arrowRight.addEventListener("click", () => {
	let newIndex=currentSlideIndex +1;
	if( newIndex >= slides.length ) newIndex = 0
	updateSlide(newIndex)
})

 });


