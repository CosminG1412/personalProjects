const textAreaEl = document.getElementById("textarea");
const totalCounterElement = document.getElementById("total-counter");
const remainingCounterElement = document.getElementById("remaining-counter");


textAreaEl.addEventListener("keyup", ()=>{
    updateCounter();
})

updateCounter();

function updateCounter(){
    totalCounterElement.innerText = textAreaEl.value.length;
    remainingCounterElement.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;
}