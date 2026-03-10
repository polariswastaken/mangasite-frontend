async function getMangaList() {
    const text = document.getElementById("texthere");
    try {
        //gets data from api
        const response = await fetch('http://localhost:8080/api/manga');

        //convert apis response into a JavaScript object (JSON)
        const data = await response.json();

        console.log(data);

        text.innerText = JSON.stringify(data, null, 2);

        const a = data[0]?.title;
        console.log(a);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function getChapter(id){
    const response = await fetch('http://localhost:8080/api/manga');
    const data = await response.json();

    const chaptersList = data[0].chapters;
    //const ab = data[0].title;
    //console.log(ab);

    //Loops through the list with map. For every chapter in the list a html string is built
    const chapterLinks = chaptersList.map((chapter) => {

        //pulls the id, chapterNumber, and title dynamically
        const text2 = document.getElementById("texthere2");
        text2.href = 'title/chapter/${chapter.id}';

    });

    //.map() returns an array with commas. .join('') turns it into one clean block of HTML.
    const finalHTML = chapterLinks.join('');

    console.log(finalHTML);
}

async function searchManga(searchWord) {
    try {
        const url = `http://localhost:8080/api/mangasearch?query=${searchWord}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log("Search Results:", data);
    } catch (error) {
        console.error("Search failed:", error);
    }
}

async function loadChapterList() {
    const response = await fetch('http://localhost:8080/api/manga');
    const data = await response.json();

    const chaptersList = data[0].chapters;

    const container = document.getElementById("texthere2");

    chaptersList.forEach((chapter) => {

        const paragraph = document.createElement("p");
        const link = document.createElement("a");

        link.href = `title/chapter/${chapter.id}.html`;

        // Set the clickable text inside the link
        link.textContent = `Chapter ${chapter.chapterNumber}: ${chapter.title}`;

        // Put the link INSIDE the paragraph <p><a>...</a></p>
        paragraph.appendChild(link);

        // Put the paragraph INSIDE the container
        container.appendChild(paragraph);
    });

    console.log(finalHTML);
}

loadMangaLinkCards();
async function loadMangaLinkCards() {
    const url = 'http://localhost:8080/api/manga';
    const response = await fetch(url);
    const data = await response.json();

    const gridContainer = document.getElementById("manga-grid");

    const mangaCardsHTML = data.map((manga) => {
        return `
        <div class="col">
            <div class="card h-100 manga-card position-relative">
                <img src="${manga.coverImageUrl}" class="card-img-top manga-cover" alt="${manga.title}">
                <div class="card-body p-2">
                    <h6 class="card-title text-truncate mb-1">
                        <a href="manga${manga.id}.html" class="text-decoration-none text-light stretched-link">${manga.title}</a>
                    </h6>
                    <p class="card-text text-muted small mb-0">Chapter ${manga.chapters.length}</p>
                </div>
            </div>
        </div>
    `;
    });
    gridContainer.innerHTML = mangaCardsHTML.join("");
}

async function loadChapterPages() {
    const url = 'http://localhost:8080/api/manga';
    const response = await fetch(url);
    const data = await response.json();

    const pagesList = data[0].chapters[0].imageUrls;

    const pagesHTML = pagesList.map((imageUrl) => {
        //spits out an image tag for every single url in the array
        return `<img src="${imageUrl}" alt="Manga Page" />`;
    }).join('');

}