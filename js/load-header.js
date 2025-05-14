fetch("/components/header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header-container").innerHTML = html;

    // Dynamically inject header.css
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/css/components/header.css";
    document.head.appendChild(link);

    const path = window.location.pathname;

    document.querySelectorAll(".topnav a").forEach(link => {
      if (path.startsWith(link.getAttribute("href"))) {
        link.classList.add("active");
      }
    });

    const themeToggle = document.getElementById('theme-toggle');

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

    themeToggle.addEventListener("click", () => {
      darkmode = localStorage.getItem('darkmode');
      darkmode !== "active" ? enableDarkmode() : disableDarkmode();
    });
  });