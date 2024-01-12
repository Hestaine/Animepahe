const menuBtn = document.querySelector(".menu");
const navDisplay = document.querySelector(".nav");

menuBtn.addEventListener("click", (e) =>{
    navDisplay.classList.toggle("hidden");
});
console.log(navDisplay)