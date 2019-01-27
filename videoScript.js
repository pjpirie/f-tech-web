// document.getElementById('img_prem').src = 'assets/Final Images/Premium/Carmine_Red/Premium_Carmine_Red_Front.png';

const dropdownProductMenu = document.querySelector('div.actions>select');
const videoPlayer = document.querySelector('#video-player');
videoPlayer.src = 'assets/F-Tech_Standard_C.mp4';
function changeVideo(product){
	// alert(product.value);
	switch (product.value) {
		case "standard":	
			videoPlayer.src = 'assets/F-Tech_Standard_C.mp4';
		break;
		case "premium":	
			videoPlayer.src = 'assets/F-Tech_Premium_C.mp4';
		break;
		case "advertisment":	
			videoPlayer.src = 'assets/F-tech_Advertising.mp4';
		break;
		default:
			videoPlayer.src = 'assets/F-Tech_Premium_C.mp4';
		break;
	}
}
