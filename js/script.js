const header = document.querySelector("header");
const main = document.querySelector("main");

const burger = document.querySelector(".burger");


const headerBurger = document.querySelector(".header__burger");
headerBurger.addEventListener("click", function(){
	header.style.display = "none";
	main.style.display = "none";

	burger.style.display = "block";
});


const burgerClose = document.querySelector(".burger__close");
burgerClose.addEventListener("click", function(){
	burger.style.display = "none";

	header.style.display = "block";
	main.style.display = "block";
});



const about = document.querySelector(".main__about");
const advisor = document.querySelector(".main__advisor");
const credit = document.querySelector(".main__credit");
const partners = document.querySelector(".main__partners")
const contact = document.querySelector(".main__contact")

const aboutLinks = document.querySelectorAll(".about");
const advisorLinks = document.querySelectorAll(".advisor");
const creditLinks = document.querySelectorAll(".credit");
const partnersLinks = document.querySelectorAll(".partners")
const contactLinks = document.querySelectorAll(".contact")



for (let index = 0; index < aboutLinks.length; index++){
	const aboutLink = aboutLinks[index];
	aboutLink.addEventListener("click", function() {
		scroll(about);
	})
}

for (let index = 0; index < advisorLinks.length; index++){
	const advisorLink = advisorLinks[index];
	advisorLink.addEventListener("click", function() {
		scroll(advisor);
	})
}

for (let index = 0; index < creditLinks.length; index++){
	const creditLink = creditLinks[index];
	creditLink.addEventListener("click", function() {
		scroll(credit);
	})
}

for (let index = 0; index < partnersLinks.length; index++){
	const partnersLink = partnersLinks[index];
	partnersLink.addEventListener("click", function() {
		scroll(partners);
	})
}

for (let index = 0; index < contactLinks.length; index++){
	const contactLink = contactLinks[index];
	contactLink.addEventListener("click", function() {
		scroll(contact);
	})
}


function scroll(block){

	if (burger.style.display == "block"){

		closeBurger();

	}

	setTimeout(function(){
	
		if (window.innerWidth > block.getBoundingClientRect().top || window.innerWidth == block.getBoundingClientRect().top) {
	
			block.scrollIntoView({
			
				block: 'center'

			})

		}

		if (window.innerWidth < block.getBoundingClientRect().top) {

			window.scrollTo({
		
				top: block.getBoundingClientRect().top,
				left: 0
		
			})
	
		}

	}, 150)

}

function closeBurger() {

	header.style.display = "block";
	main.style.display = "block";

	burger.style.display = "none";

};
