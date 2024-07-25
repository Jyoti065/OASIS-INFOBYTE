let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

// dark mode
let darkmode = document.querySelector('#darkmode')
darkmode.onclick = () =>{
    if(darkmode.classList.contains('<i class="fa-regular fa-moon"></i>')){
    darkmode.classList.replace('<i class="fa-regular fa-moon"></i>','<i class="fa-regular fa-sun"></i>');
    document.body.classList.add('active');
    }
    else{
        darkmode.classList.replace('<i class="fa-regular fa-sun"></i>', '<i class="fa-regular fa-moon"></i>');
        document.body.classList.remove('active');
    }
 }
