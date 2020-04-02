// Responsive menu js
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}

// last Update Date
const lastUpdateDate = document.lastModified;
document.getElementById("lastUpdateDate").innerHTML = lastUpdateDate;