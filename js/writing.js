let currentActiveButton = null;

// Highlight the clicked button and remove highlight from the previous one
function setActiveButton(button) {
  if (currentActiveButton) {
    currentActiveButton.classList.remove('active-article');
  }
  button.classList.add('active-article');
  currentActiveButton = button;
}

// Load & parse Markdown → HTML, and mark which button triggered it
async function fetchAndRenderMarkdown(mdPath, button) {
  const response = await fetch(`/writing/articles/${mdPath}`);
  const text = await response.text();
  document.getElementById("writing-box").innerHTML = marked.parse(text);
  if (button) setActiveButton(button);
}

// Load the manifest and build the list
async function loadArticles() {
  const response = await fetch('/writing/articles/manifest.json');
  const articles = await response.json();

  // Sort by file date descending (newest first)
  articles.sort((a, b) => b.date.localeCompare(a.date));

  const listBox = document.getElementById("list-box");

  articles.forEach((article, index) => {
    const btn = document.createElement('button');
    btn.textContent = article.title;
    btn.classList.add('article-button');

    btn.addEventListener('click', () => {
      fetchAndRenderMarkdown(article.file, btn);
    });

    listBox.appendChild(btn);

    // Load latest article by default and highlight its button
    if (index === 0) {
      fetchAndRenderMarkdown(article.file, btn);
    }
  });
}

// Start
window.addEventListener('DOMContentLoaded', () => {
  loadArticles();
});