const nav_benefits = document.querySelector('#navbtn-benefits');
const nav_zintec = document.querySelector('#navbtn-zintec');
const nav_contact = document.querySelector('#navbtn-contact');
const nav_home = document.querySelector('#navbtn-home');
const section_benefits = document.querySelector('#benefits');
const section_zintec = document.querySelector('#zintec');
const section_contact = document.querySelector('#contact');
const section_home = document.querySelector('#home');
const pp = document.querySelector('#play-pause');
const vid = document.querySelector('video');



console.log(nav_benefits.classList);
console.log(nav_zintec.classList);
console.log(nav_contact.classList);
console.log(nav_home.classList);
console.log(section_benefits.classList);
console.log(section_zintec.classList);
console.log(section_contact.classList);
console.log(section_home.classList);

setActive(section_home,nav_home);

function removeClass(target,classToRemove){
	console.log("remC " + target);
	if(target.classList.contains(classToRemove)){
	target.classList.remove(classToRemove);
	console.log(classToRemove + " Removed From " + target.id)
	}
}
function addClass(target,classToRemove){
	console.log("addC " + target);
	if(!target.classList.contains(classToRemove)){
	target.classList.add(classToRemove);
	console.log(classToRemove + " Added To " + target.id)
	}
}
function setActive(target,nav){
	console.log("setA " + target);
	removeClass(section_home, 'active');
	removeClass(section_benefits, 'active');
	removeClass(section_zintec, 'active');
	removeClass(section_contact, 'active');
	addClass(target, 'active');
	setNavActive(nav);
}
function setNavActive(target){
	console.log("setNA " + target);
	removeClass(nav_home, 'active');
	removeClass(nav_benefits, 'active');
	removeClass(nav_zintec, 'active');
	removeClass(nav_contact, 'active');
	addClass(target, 'active');
}
function playPause(ele){
		if(ele.classList.contains("playing")){
			removeClass(ele,'playing');
			addClass(ele,'paused');
			ele.innerHTML = 'Play'
			vid.pause();
		}else{
			removeClass(ele,'paused');
			addClass(ele,'playing');
			ele.innerHTML = 'Pause'
			vid.play();
		}
}

nav_home.addEventListener('click', function(e) {setActive(section_home,nav_home);});
nav_benefits.addEventListener('click', function(e) {setActive(section_benefits,nav_benefits);});
nav_zintec.addEventListener('click', function(e) {setActive(section_zintec,nav_zintec);});
nav_contact.addEventListener('click', function(e) {setActive(section_contact,nav_contact);});
pp.addEventListener('click', function (e) {playPause(pp);})
