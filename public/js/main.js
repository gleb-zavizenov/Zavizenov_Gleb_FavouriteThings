// import { parse } from "path";

// this is a partially revealing module pattern - just a variation on what we've already done

const myVM = (() => {
    // get the user buttons and fire off an async DB query with Fetch
    let userButtons = document.querySelectorAll(".u-link");
    let lightBox = document.querySelector(".lightbox");
  
    //create the social media list
    function renderSocialMedia(media) {
      return `<ul class="u-social">
        ${media.map(item => `<li>${item}</li>`).join(",")}
        </ul>
        `;
    }
  
    function parseUserData(person) {
      let targetDiv = lightBox.querySelector(".lb-content");
      let targetImg = lightBox.querySelector("img");
  
      let bioContent = `
      <p>${person.bio}</p>
      <h4>Social Media:</h4>
      <!-- loop thru social media stuff here -->
      ${renderSocialMedia(person.social)}
      `;
  
      targetDiv.innerHTML = bioContent;
      targetImg.src = person.currentSrc;
      lightBox.classList.add("show-lb");
    }
  
    function getUserData(e) {
      e.preventDefault();
      //1, 2 , or 3 depending on which anchor tag you click
      let url = `/${this.getAttribute("href")}`,
        currentImg = this.previousElementSibling.getAttribute("src");
  
      //this goes and fetches the database content ( or an API endpoint)
      // that's why it's called a fetch!
  
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          data.currentSrc = currentImg;
          parseUserData(data);
        })
        .catch(err => console.log(err));
    }
  
    userButtons.forEach(button => button.addEventListener("click", getUserData));
  
    // wire up the lightbox close button
    lightBox.querySelector(".close").addEventListener("click", function() {
      lightBox.classList.remove("show-lb");
    });
  })();