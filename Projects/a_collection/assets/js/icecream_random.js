var sources = [
"./assets/media/Non-Healthy/Ice_Cream/butter_pecan.jpg",
"./assets/media/Non-Healthy/Ice_Cream/chocolate_icecream.JPG",
"./assets/media/Non-Healthy/Ice_Cream/cookies_cream.jpg",
"./assets/media/Non-Healthy/Ice_Cream/coffee_icecream jpg.jpg",
"./assets/media/Non-Healthy/Ice_Cream/mint_icecream.jpg",
"./assets/media/Non-Healthy/Ice_Cream/strawberry.jpg",
"./assets/media/Non-Healthy/Ice_Cream/vanilla_icecream.jpg",

];

var imgObject = document.getElementById('random-image');

var randomNum = Math.floor(Math.random() * sources.length)

imgObject.src = sources[randomNum];