// **************************************
// ***     Designed And Developed     ***
// **               By                ***
// ***   Paul Pirie & Craig Crowther  ***
// **************************************

const dropdownProductMenu = document.querySelector('div.actions>select');
const videoPlayer = document.querySelector('#video-player');
const pp = document.querySelector('#play-pause');
const vid = document.querySelector('video');

videoPlayer.src = 'assets/F-Tech_Standard_C.mp4';

function changeVideo(product) {
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

function playPause(ele) {
    if (ele.classList.contains("playing")) {
        removeClass(ele, 'playing');
        addClass(ele, 'paused');
        ele.innerHTML = 'Play'
        vid.pause();
    } else {
        removeClass(ele, 'paused');
        addClass(ele, 'playing');
        ele.innerHTML = 'Pause'
        vid.play();
    }
}
pp.addEventListener('click', function(e) {
    playPause(pp);
})