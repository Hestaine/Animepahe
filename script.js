const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.navigate');

body.addEventListener('click', (e)=>{
    e.stopPropagation();
});
menu.addEventListener('click', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    nav.classList.toggle('hide')
    console.log(nav.classList);
})