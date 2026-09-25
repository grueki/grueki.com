var generated = [];

function getRandomInt(max) {
  var num = Math.floor(Math.random() * max);

  while (generated.includes(num)) {
    num = Math.floor(Math.random() * max);
  }

  generated.push(num);
  return num
}

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

window.addEventListener('load', async () => {
  var json = await fetch('./records.json');
  var albums = await json.json();

  const records = [...document.getElementsByClassName("record-sleeve")];

  records.forEach(element => {
    var num = getRandomInt(albums.length);
    element.style.backgroundImage = "url(./record-img/" + albums[num].image + ")";
  });
});

async function dig() {
  generated = [];
  var json = await fetch('./records.json');
  var albums = await json.json();
  var albumToDisplay = getRandomInt(albums.length);

  const digButton = document.getElementById("dig-button");
  digButton.disabled = true;

  const allRecords = document.getElementById("all-records");
  allRecords.classList.add("all-records");

  const finals = [...document.getElementsByClassName("final")];
  finals.forEach(element => {
    element.style.backgroundImage = "url(./record-img/" + albums[albumToDisplay].image + ")";
  });

  const albumInfo = document.getElementById("album-info");
  albumInfo.innerHTML = "";

  const realFinal = document.getElementById("final-record");
  realFinal.style.display = "none";
  allRecords.style.display = "block";

  addEventListener("animationend", () => { 
    allRecords.classList.remove("all-records"); 
    allRecords.style.display = "none";
    realFinal.style.display = "block";
  });

  await wait(2000);
  
  albumInfo.innerHTML = albums[albumToDisplay].title + " - " + albums[albumToDisplay].artist + "<br><br>I discovered this one in " + albums[albumToDisplay].discovered + ".<br><br>" + ((albums[albumToDisplay].comment) ?? "");

  digButton.disabled = false;
  const records = document.querySelectorAll('.record-sleeve');

  records.forEach(element => {
    element.style.backgroundImage = "url(./record-img/" + albums[getRandomInt(albums.length)].image + ")";
  });
}