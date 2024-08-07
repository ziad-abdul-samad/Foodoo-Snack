let menu = document.querySelector("header .container #menu-icon");
let navbar = document.querySelector("header ul");
menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
} 
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);




const sr = ScrollReveal ({
    distance:'60px',
    duration:"900",
    delay:"100",
    reset:false
    }) 
    
    sr.reveal('header' ,{delay:200 , origin: "top"} )
    sr.reveal('.image-land ' ,{delay:400 , origin: "top"} )
    sr.reveal('.home-title ' ,{delay:600 , origin: "top"} )
    sr.reveal('.home-description ' ,{delay:800 , origin: "top"} )
    sr.reveal('.special-title' ,{delay:500 , origin: "bottom"} )
    sr.reveal('.products' ,{delay:800 , origin: "top"} )
    sr.reveal('.products .box .title ' ,{delay:400 , origin: "bottom"} )
    sr.reveal('.products .box .description ' ,{delay:500 , origin: "top"} )
