const button = document.querySelector("button");
const body = document.querySelector("body");
const buttonText = document.querySelector("button span");
const header = document.querySelector("header");
const search = document.querySelector(".search input");
const card = document.querySelectorAll(".card");

let theme = false;

buttonText.innerHTML = "Dark Mode";

console.log(buttonText.innerHTML);
button.addEventListener("click", () => {
  if (theme) {
    body.style.background = "white";
    body.style.color = "#202C36";
    buttonText.innerHTML = "Dark Mode";
    header.style.background = "#fff";
    search.style.background = "#C4C4C4";
    card.style.background = "#FFFFFF";
    console.log(buttonText);
    theme = false;
  } else {
    theme = true;
    body.style.background = "#202C36";
    body.style.color = "white";
    buttonText.innerHTML = "Light Mode";
    header.style.background = "#2B3844"
    search.style.background = "#2B3844";
    console.log(buttonText);
    card[0].style.background = "#2B3844";
    card[1].style.background = "#2B3844";
    card[2].style.background = "#2B3844";
    card[3].style.background = "#2B3844";
    card[4].style.background = "#2B3844";
    card[5].style.background = "#2B3844";
    card[6].style.background = "#2B3844";
    card[7].style.background = "#2B3844";
  }
});
