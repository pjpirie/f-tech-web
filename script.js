const nav_benefits = document.querySelector('#navbtn-benefits');
const nav_zintec = document.querySelector('#navbtn-zintec');
const nav_contact = document.querySelector('#navbtn-contact');
const nav_home = document.querySelector('#navbtn-home');
const section_benefits = document.querySelector('#benefits');
const section_zintec = document.querySelector('#zintec');
const section_contact = document.querySelector('#contact');
const section_home = document.querySelector('#home');

setActive(section_home);

function removeClass(target,classToRemove){
	if(target.classList.contains(classToRemove)){
	target.classList.remove(classToRemove);
	console.log(classToRemove + " Removed From " + target.id)
	}
}
function addClass(target,classToRemove){
	if(!target.classList.contains(classToRemove)){
	target.classList.add(classToRemove);
	console.log(classToRemove + " Added To " + target.id)
	}
}
function setActive(target){
removeClass(section_home, 'active');
removeClass(section_benefits, 'active');
removeClass(section_zintec, 'active');
removeClass(section_contact, 'active');
addClass(target, 'active');
}



nav_benefits.addEventListener('click', function(e) {setActive(section_benefits);});
nav_zintec.addEventListener('click', function(e) {setActive(section_zintec);});
nav_contact.addEventListener('click', function(e) {setActive(section_contact);});
nav_home.addEventListener('click', function(e) {setActive(section_home);});
