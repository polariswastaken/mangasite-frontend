// 1. Create an async function
/*async function getMangaList() {
    const text = document.getElementById("texthere");
    try {
        // 2. "fetch" the URL (Ask the API for data)
        const response = await fetch('http://localhost:8080/api/manga');

        // 3. Convert the API's response into a JavaScript object (JSON)
        const data = await response.json();

        // 4. Do something with the data!
        console.log(data);

        text.innerText = JSON.stringify(data, null, 2);

        const a = data[7]?.title;
        console.log(a);
        console.log(a);
        console.log(a); //todo make it return its title name. currently its ugh... undefined at least it aint crashing thanks to ".?"

    } catch (error) {
        // 5. Catch any errors (like if the API is down or internet drops)
        console.error("Error fetching data:", error);
    }
}

async function searchManga(searchWord) {
    try {
        // Notice how we add "?query=" and the search word to the URL
        const url = `'http://localhost:8080/api/manga/search?query=${searchWord}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log("Search Results:", data);
    } catch (error) {
        console.error("Search failed:", error);
    }
}

async function mangaLinkCards(position) {

}

//loadMangaLinkCards();
async function loadMangaLinkCards() {
    const url = 'http://localhost:8080/api/manga/';
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

}
*/