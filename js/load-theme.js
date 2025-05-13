
let theme = "Cookie-Bubblegum";

// Inject theme stylesheet
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = `css/themes/${theme}.css`;
link.id = "theme-css";
document.head.appendChild(link);