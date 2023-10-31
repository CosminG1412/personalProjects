const bgImageEl = document.getElementById("bg-image");

bgImageEl.addEventListener("scroll", ()=>{
    updateImage();
})

function updateImage(){
    bgImageEl.style.opacity = 1-window.pageYOffset / 800;
    bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}