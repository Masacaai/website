const path = window.location.pathname;
let currentLink = null;
document.querySelectorAll(".topnav a").forEach(link => {
  if (path.startsWith(link.getAttribute("href"))) {
    currentLink = link;
  }
});
currentLink.classList.add("active");

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
};

let darkmode = localStorage.getItem('darkmode');
if (darkmode === 'active') enableDarkmode();

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("ready");
});
