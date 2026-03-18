async function getMangaDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const mangaID = urlParams.get('id');
    console.log("manga id:" + mangaID);

    const response = await fetch(`http://localhost:8080/api/manga/${mangaID}`);
    const data = await response.json();
    const coverImage = data[0].coverImageUrl;
    const title = data[0].title;
    const description = data[0].description;
    const chapterAmount = data[0].chapters.length;

    const poster = document.getElementById("manga-poster");

    const htmlContent = `
        <div class="card h-100 manga-card position-relative">
            <img src="${coverImage}" class="card-img-top manga-cover" alt="${description}">
            <div class="card-body p-2">
                <h6 class="card-title text-truncate mb-1">
                    <a href="manga.html" class="text-decoration-none text-light stretched-link">${title}</a>
                </h6>
                <p class="card-text text-muted small mb-0">Chapter ${chapterAmount}</p>
            </div>
        </div>
`;
    poster.innerHtml = htmlContent.join("");
}
getMangaDetails()