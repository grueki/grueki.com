async function albumsGrid() {
    try {
        var json = await fetch('/crate-diggin/records.json');
        var albums = await json.json();

        albums.sort((a, b) => a.title.localeCompare(b.title));

        var modalOverlay = document.getElementById("modal-overlay");
        var modalAlbumImg = document.getElementById("modal-album-img");
        var modalAlbumTitle = document.getElementById("modal-album-title");
        var modalAlbumArtist = document.getElementById("modal-album-artist");
        var modalAlbumComment = document.getElementById("modal-album-comment");

        window.onclick = function(event) {
            if (event.target == modalOverlay) {
                modalOverlay.style.display = "none";
            }
        } 

        albums.forEach(album => {
            const div = document.createElement('div');
            div.classList.add('album-card');
            div.style.textAlign = "center";
            div.style.display = "flex";
            div.style.flexDirection = "column";
            div.style.alignItems = "center";
            document.getElementById("albums-grid").appendChild(div);

            const albumTitle = document.createElement('p');
            albumTitle.textContent = album.title;
            albumTitle.style.paddingBottom = "5px";
            albumTitle.style.margin = 0;
            albumTitle.style.fontStyle = "italic";
            albumTitle.style.fontWeight = "bold";
            div.appendChild(albumTitle);

            const albumArtist = document.createElement('p');
            albumArtist.textContent = album.artist;
            albumArtist.style.paddingBottom = "10px";
            albumArtist.style.margin = 0;
            div.appendChild(albumArtist);

            const albumImg = document.createElement('img');
            albumImg.src = "/crate-diggin/record-img/" + album.image;
            albumImg.style.width = "200px";
            div.appendChild(albumImg);

            div.onclick = function() {
                modalAlbumImg.src = "/crate-diggin/record-img/" + album.image;
                modalAlbumImg.style.width = "200px";

                modalAlbumTitle.textContent = album.title;
                modalAlbumArtist.textContent = album.artist;

                modalAlbumComment.innerHTML = "I discovered this one in " + album.discovered + ". It's a" + ('aeiou'.includes(album.genre[0].toLowerCase()) ? "n" : "") + " " + album.genre + " album.<br><br>" + ((album.comment) ?? "");

                modalOverlay.style.display = "flex";
            }
        });
    } catch (error) {
        console.error("failed to load or parse JSON");
    }
}