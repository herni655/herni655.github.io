var sources = [
"./assets/media/Healthy/Vegetables/baby_carrot.jpg",
"./assets/media/Healthy/Vegetables/Bell-Pepper.jpg",
"./assets/media/Healthy/Vegetables/celery.jpg",
"./assets/media/Healthy/Vegetables/cherry_tomatoes.jpg",
"./assets/media/Healthy/Vegetables/cucumber.jpg",
];

var imgObject = document.getElementById('random-image');

var randomNum = Math.floor(Math.random() * sources.length)

imgObject.src = sources[randomNum];