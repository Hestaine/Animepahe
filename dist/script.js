const menuBtn = document.querySelector(".menu");
const navDisplay = document.querySelector(".nav");

menuBtn.addEventListener("click", (e) =>{
    navDisplay.classList.add("hidden");
})
console.log(navDisplay)