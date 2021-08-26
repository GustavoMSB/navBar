const button = document.getElementById('btnativar');
const navbar = document.getElementById('navbar');

button.addEventListener('click', () => {
    if(navbar.style.display == "none"){
        navbar.style.display = "block";
    } else if(navbar.style.display = "block"){
        navbar.style.display = "none";
    }
    
});
