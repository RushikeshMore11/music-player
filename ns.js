let musics = [
    {
        id:1,
        name:"Kesariya",
        artist:"Arijit Singh",
        audioSrc:"Kesariya - Brahmastra.mp3",
        imageSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/330px-Emma_Watson_2013.jpg"

    },
     {
        id:2,
        name:"Kesariya",
        artist:"Arijit Singh",
        audioSrc:"Kesariya - Brahmastra.mp3",
        imageSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/330px-Emma_Watson_2013.jpg"

    },
     {
        id:3,
        name:"Kesariya",
        artist:"Arijit Singh",
        audioSrc:"Kesariya - Brahmastra.mp3",
        imageSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/330px-Emma_Watson_2013.jpg"

    },
     {
        id:4,
        name:"Kesariya",
        artist:"Arijit Singh",
        audioSrc:"Kesariya - Brahmastra.mp3",
        imageSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/330px-Emma_Watson_2013.jpg"

    },
     {
        id:5,
        name:"Kesariya",
        artist:"Arijit Singh",
        audioSrc:"Kesariya - Brahmastra.mp3",
        imageSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/330px-Emma_Watson_2013.jpg"

    },
    {
        id:6,
        name:"Kesariya",
        artist:"Arijit Singh",
        audioSrc:"Kesariya - Brahmastra.mp3",
        imageSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/330px-Emma_Watson_2013.jpg"

    },
    {
        id:7,
        name:"Kesariya",
        artist:"Arijit Singh",
        audioSrc:"Kesariya - Brahmastra.mp3",
        imageSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/330px-Emma_Watson_2013.jpg"

    },
    {
        id:8,
        name:"Kesariya",
        artist:"Arijit Singh",
        audioSrc:"Kesariya - Brahmastra.mp3",
        imageSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/330px-Emma_Watson_2013.jpg"

    },
    {
        id:9,
        name:"Kesariya",
        artist:"Arijit Singh",
        audioSrc:"Kesariya - Brahmastra.mp3",
        imageSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/330px-Emma_Watson_2013.jpg"

    },
    {
        id:10,
        name:"Kesariya",
        artist:"Arijit Singh",
        audioSrc:"Kesariya - Brahmastra.mp3",
        imageSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/330px-Emma_Watson_2013.jpg"

    },
];

for(let i=0; i<musics.length; i++)
{
        let tile = document.createElement("div");
tile.classList.add("tile");
let thumbnail = document.createElement("div");
thumbnail.classList.add("thumbnail");

let img = document.createElement("img");
img.src=musics[i].imageSrc;

thumbnail.append(img);
tile.append(thumbnail);

let description = document.createElement("div");
description.classList.add("description");

let h2 = document.createElement("h2");
h2.append(musics[i].name);
description.append(h2);
let h3 = document.createElement("h3");
h3.append(musics[i].artist);
description.append(h3);
tile.append(description);
tile.addEventListener("click",function(){
    playMusic(musics[i]);
});

document.querySelector(".music-list").append(tile);
}
function playMusic(music){
   
    document.querySelector(".player").style.marginLeft="0";

    document.querySelector(".main-thumbnail-img").src=music.imageSrc;
    document.querySelector(".song-name").innerText= music.name;
    document.querySelector(".song-artist").innerText= music.artist;
    document.querySelector(".audio").src= music.audioSrc;
    document.querySelector(".audio").play();

}

function closePlayer(){
    document.querySelector(".player").style.marginLeft="100%";
}