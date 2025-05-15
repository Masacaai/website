
let theme = "Cookie-Bubblegum";

// Inject theme stylesheet
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = `/css/themes/${theme}.css`;
link.id = "theme-css";
document.head.appendChild(link);

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