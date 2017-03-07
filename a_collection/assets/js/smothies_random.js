var sources = [
"./assets/media/Healthy/smoothies/banana_s.jpg",
"./assets/media/Healthy/smoothies/blueberry.jpg",
"./assets/media/Healthy/smoothies/mango_s.png",
"./assets/media/Healthy/smoothies/straberry_s.jpg",
];

var imgObject = document.getElementById('random-image');

var randomNum = Math.floor(Math.random() * sources.length)

imgObject.src = sources[randomNum];