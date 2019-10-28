// this is a partially revealing module pattern - just a variation on what we've already done

// const myVM = (() => {
//     // get the user buttons and fire off an async DB query with Fetch

// })();

//
// Navigation slide 
//
let mobileNav = document.querySelector(".mobile-nav");
let crossIcon = document.querySelector(".mobile-nav-close");
let burgerIcon = document.querySelector(".nav-burger");
let mobileLinks = document.querySelectorAll(".mobile-nav-link");


function closeNav(){
    mobileNav.style.transform = "translateX(-100%)";
    burgerIcon.style.opacity = "1";
    crossIcon.style.opacity = "0";
};
function openNav(){
    burgerIcon.style.opacity = "0";
    crossIcon.style.opacity = "1";
    mobileNav.style.transform = "translateX(0)";
};


crossIcon.addEventListener("click", closeNav);
burgerIcon.addEventListener("click", openNav);
mobileLinks.forEach(link => {
    link.addEventListener("click", closeNav);
});