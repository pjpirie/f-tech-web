// **************************************
// ***     Designed And Developed     ***
// **               By                ***
// ***   Paul Pirie & Craig Crowther  ***
// **************************************

const nav_benefits = document.querySelector('#navbtn-benefits');
const nav_zintec = document.querySelector('#navbtn-zintec');
const nav_contact = document.querySelector('#navbtn-contact');
const nav_home = document.querySelector('#navbtn-home');
const contactResultbtn = document.querySelector('#contactResult-btn');
const section_benefits = document.querySelector('#benefits');
const section_zintec = document.querySelector('#zintec');
const section_contact = document.querySelector('#contact');
const section_contactResult = document.querySelector('#contactResult');
const section_home = document.querySelector('#home');
console.log('Website Made By Paul Pirie And Criag Crowther');
console.log('Paul Pirie : http://paulpirie.com/');
console.log('Criag Crowther : N/A A.T.M');

setActive(section_home, nav_home);

function removeClass(target, classToRemove) {
    if (target.classList.contains(classToRemove)) {
        target.classList.remove(classToRemove);
    }
}

function addClass(target, classToRemove) {
    if (!target.classList.contains(classToRemove)) {
        target.classList.add(classToRemove);
    }
}

function setActive(target, nav) {
    removeClass(section_home, 'active');
    removeClass(section_benefits, 'active');
    removeClass(section_zintec, 'active');
    removeClass(section_contact, 'active');
    removeClass(section_contactResult, 'active');
    addClass(target, 'active');
    if (nav != null) {
        setNavActive(nav);
    }
}

function setNavActive(target) {
    removeClass(nav_home, 'active');
    removeClass(nav_benefits, 'active');
    removeClass(nav_zintec, 'active');
    removeClass(nav_contact, 'active');
    addClass(target, 'active');
}


nav_home.addEventListener('click', function(e) {
    setActive(section_home, nav_home);
});
nav_benefits.addEventListener('click', function(e) {
    setActive(section_benefits, nav_benefits);
});
nav_zintec.addEventListener('click', function(e) {
    setActive(section_zintec, nav_zintec);
});
nav_contact.addEventListener('click', function(e) {
    setActive(section_contact, nav_contact);
});
contactResultbtn.addEventListener('click', function(e) {
    setActive(section_contact, nav_contact);
});