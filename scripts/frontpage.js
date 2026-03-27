// Grab the sidebar and the button from the HTML
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

// When the button is clicked, toggle the 'collapsed' class on or off
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

loadMangaLinkCards();
async function loadMangaLinkCards() {
    const url = 'http://localhost:8080/api/manga';
    const response = await fetch(url);
    const data = await response.json();

    const gridContainer = document.getElementById("trending-manga-row");

    const mangaCardsHTML = data.map((manga) => {
        return `
        <div class="col">
            <div class="card h-100 manga-card position-relative">
                <img src="${manga.coverImageUrl}" class="card-img-top manga-cover" alt="${manga.title}">
                <div class="card-body p-2">
                    <h6 class="card-title text-truncate mb-1">
                        <a href="manga.html" class="text-decoration-none text-light stretched-link">${manga.title}</a>
                    </h6>
                    <p class="card-text text-muted small mb-0">Chapter ${manga.chapters.length}</p>
                </div>
            </div>
        </div>
    `;
    });
    gridContainer.innerHTML = mangaCardsHTML.join("");
}