fetch("/components/footer.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("footer-container").innerHTML = html;
  })

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("ready");
});
