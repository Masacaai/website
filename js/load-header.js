const path = window.location.pathname;
let currentLink = null;
document.querySelectorAll(".topnav a").forEach(link => {
  if (path.startsWith(link.getAttribute("href"))) {
    currentLink = link;
  }
});
currentLink.classList.add("active");

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
