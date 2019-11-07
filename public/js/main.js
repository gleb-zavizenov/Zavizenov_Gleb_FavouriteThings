//
// Mobile Navigation animation
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

//
// Dynamic data for the template
//
const myVM = (() => {
    // get the user buttons and fire off an async DB query with Fetch
    let userButtons = document.querySelectorAll(".section-bottom-btn");
    let desktopLinks = document.querySelectorAll(".nav-link");
    let mobileLinks = document.querySelectorAll(".mobile-nav-link");
    let lightBox = document.querySelector(".lightbox");
  
    function parseUserData(object) {
      let targetDiv = lightBox.querySelector(".lb-content");
      let targetImage = targetDiv.querySelector(".object-img");
      let targetDesc = targetDiv.querySelector(".object-desc");

      lightBox.style.backgroundColor = `${object.color}`;
  
      let imgContent = `<img src="images/${object.image}">`;
      let descContent = `
      <h2>${object.heading}</h2>
      <h4>${object.subheading}</h4>
      <p>${object.description}</p>
      `;
  
      targetImage.innerHTML = imgContent;
      targetDesc.innerHTML = descContent;
      lightBox.classList.add("lightbox-show");
    }
  
    function getUserData(e) {
      e.preventDefault();
      //1, 2 , or 3 depending on which anchor tag you click
      let url = `/objects/${this.getAttribute("href")}`;
  
      //this goes and fetches the database content ( or an API endpoint)
      // that's why it's called a fetch!
  
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
        //   data.currentSrc = currentImg;
          parseUserData(data);
        })
        .catch(err => console.log(err));
    }
  
    userButtons.forEach(button => button.addEventListener("click", getUserData));
    desktopLinks.forEach(button => button.addEventListener("click", getUserData));
    mobileLinks.forEach(button => button.addEventListener("click", getUserData));
  
    // wire up the lightbox close button
    lightBox.querySelector(".close-icon").addEventListener("click", function() {
      lightBox.classList.remove("lightbox-show");
    });
  })();