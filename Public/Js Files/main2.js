let playButton = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let closeBtn = document.querySelector(".close-video");
let myvideo = document.querySelector("#myvideo");

// playButton.onclick = () => {
//   video.classList.add("show-video");
//   myVideo.play();
// };

function PlayVideo(){
    video.classList.add("show-video")
    myvideo.play()
}
function CloseVideo(){
    video.classList.remove("show-video")
    myvideo.pause()
}
playButton.addEventListener("click",PlayVideo)
closeBtn.addEventListener("click",CloseVideo)


