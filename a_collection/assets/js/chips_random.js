var sources = [
"./assets/media/Non-Healthy/Chips/cheetos.jpeg",
"./assets/media/Non-Healthy/Chips/doritos.jpg",
"./assets/media/Non-Healthy/Chips/lays.jpg",
"./assets/media/Non-Healthy/Chips/ruffles.jpg",
"./assets/media/Non-Healthy/Chips/sunchips.jpeg",
"./assets/media/Non-Healthy/Chips/takis.jpg",
"./assets/media/Non-Healthy/Chips/tostitos.jpeg",

];

var imgObject = document.getElementById('random-image');

var randomNum = Math.floor(Math.random() * sources.length)

imgObject.src = sources[randomNum];