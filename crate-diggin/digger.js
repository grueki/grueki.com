function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function dig() {
    var json = await fetch('./records.json');
    var albums = await json.json();
    var num = getRandomInt(albums.length);
    document.getElementById("album-name").textContent = albums[num].title;
}