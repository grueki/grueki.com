function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function dig() {
    const button = document.getElementById("all-records");
    button.classList.add("all-records");

    await wait(2000);

    var json = await fetch('./records.json');
    var albums = await json.json();
    var num = getRandomInt(albums.length);
    document.getElementById("album-name").textContent = albums[num].title;

    
}