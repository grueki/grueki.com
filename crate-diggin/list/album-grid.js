async function albumsGrid() {
    try {
        var json = await fetch('/crate-diggin/records.json');
        var albums = await json.json();

        albums.forEach(album => {
            const div = document.createElement('p');
            div.textContent = album.title;
            document.getElementById("albums-list").appendChild(div);
        });
    } catch (error) {
        console.error("failed to load or parse JSON");
    }
}