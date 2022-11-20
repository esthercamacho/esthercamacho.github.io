/* MENU DESPLEGABLE */
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};


/****** MODO OSCURO ********/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'ligth'
const getCurrentIcon = () => document.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

//We validate if the user previously chose a topic
if(selectedTheme){
	//If the validation is fullfilled, we ask the issue was to know if we activated or desactivated the dark mode
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

//Activate / desactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	//Add or remove the dark/icon theme
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	//We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})