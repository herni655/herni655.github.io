var sources = [
"./assets/media/Healthy/Fruit/banana.png",
"./assets/media/Healthy/Fruit/grapes.jpg",
"./assets/media/Healthy/Fruit/orange.jpg",
"./assets/media/Healthy/Fruit/straberry2.jpg",

];

var imgObject = document.getElementById('random-image');

var randomNum = Math.floor(Math.random() * sources.length)

imgObject.src = sources[randomNum];