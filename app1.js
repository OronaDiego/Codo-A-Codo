// año  dinamico en el footer
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


//barra de nav

const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links')
const navToggle = document.querySelector('.nav-toggle');


navToggle.addEventListener("click", function(){
    linksContainer.classList.toggle("show-links");
})