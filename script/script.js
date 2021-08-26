const button = document.getElementById('btnativar');
const navbar = document.getElementById('navbar');

/* navbar.style.display = "none"; */
/* const navBar = */ 

button.addEventListener('click', () => {
    if(navbar.style.display == "none"){
        navbar.style.display = "block";
    } else if(navbar.style.display = "block"){
        navbar.style.display = "none";
    }
    
})

navbar.addEventListener('click', () => {
    console.log('Funfou');
    
       
     /*   navBar.style.display = 'block';  */
     console.log('Funfou2');
    
})