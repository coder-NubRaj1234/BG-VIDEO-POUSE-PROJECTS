const btn = document.querySelector("#playPouseBtn");
const video = document.querySelector("#video");
const xmark = document.querySelector("#xmark");
const loader = document.querySelector("#loader");

//Event for svg.............................
window.addEventListener("load" , function(){
    loader.classList.add("none");
});

//off the vidoe sound......
video.volume = 0;

xmark.addEventListener("click" , function(){
    if(!xmark.classList.contains("fa-volume-off")){
        xmark.classList.remove("fa-volume-xmark");
        xmark.classList.add("fa-volume-off");
        video.volume = 1;
    }else{
        xmark.classList.add("fa-volume-xmark");
        xmark.classList.remove("fa-volume-off");
        video.volume = 0;
    };
});







//event for btn play and pause........
btn.addEventListener("click" , function(){
    if(!btn.classList.contains("add")){
        btn.classList.add("add");
        video.pause();
    }else{
        btn.classList.remove("add");
        video.play();
        
    };
});