/*****************************************************************
 *  MENU DESPLEGABLE 
 ****************************************************************/
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


/*****************************************************************
 *  MODO OSCURO
 ****************************************************************/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Tema seleccionado previamente (si está seleccionado por el usuario)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtenemos el tema actual que tiene la interfaz validando la clase dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'ligth'
const getCurrentIcon = () => document.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// Validamos si el usuario eligió previamente un tema
if(selectedTheme){
	// Activamos/desactivamos modo oscuro
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activar/desactivar el tema manualmente con el botón
themeButton.addEventListener('click', () => {
	// Agregar o eliminar el tema oscuro/icono
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	// Guardamos el tema y el icono actual que eligió el usuario
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})