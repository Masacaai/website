fetch("/components/footer.html")
  .then(res => res.text())
  .then(html => {
    console.log("Fetched footer:", html); // 👈 Log output
    document.getElementById("footer-container").innerHTML = html;

    // Dynamically inject footer.css
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/css/components/footer.css";
    document.head.appendChild(link);
  })