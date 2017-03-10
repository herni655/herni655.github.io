var sources = [
"./assets/media/Healthy/Nuts/almonds.jpg",
"./assets/media/Healthy/Nuts/cashews.jpg",
"./assets/media/Healthy/Nuts/pistachios.jpg",
"./assets/media/Healthy/Nuts/trailmix.jpg", 
];

var imgObject = document.getElementById('random-image');

var randomNum = Math.floor(Math.random() * sources.length)

imgObject.src = sources[randomNum];