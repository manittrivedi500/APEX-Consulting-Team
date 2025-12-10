// DARK MODE
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
document.body.classList.toggle('dark');
});


// MOBILE MENU
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');


hamburger.addEventListener('click', () => {
navMenu.classList.toggle('active');
});


// SCROLL REVEAL
const sections = document.querySelectorAll('.section');


function revealSections() {
const trigger = window.innerHeight * 0.85;


sections.forEach(sec => {
const rect = sec.getBoundingClientRect().top;
if (rect < trigger) sec.classList.add('visible');
});
}


window.addEventListener('scroll', revealSections);
revealSections();
