var sources = [
"./assets/media/Healthy/Vegetables/baby_carrot.jpg",
"./assets/media/Healthy/Vegetables/Bell-Pepper.jpg",
"./assets/media/Healthy/Vegetables/celery.jpg",
"./assets/media/Healthy/Vegetables/cherry_tomatoes.jpg",
"./assets/media/Healthy/Vegetables/cucumber.jpg",
"./assets/media/Healthy/Fruit/banana.png",
"./assets/media/Healthy/Fruit/grapes.jpg",
"./assets/media/Healthy/Fruit/orange.jpg",
"./assets/media/Healthy/Fruit/straberry2.jpg",
"./assets/media/Healthy/Yogurt/chobani.jpg",
"./assets/media/Healthy/Yogurt/dannon_greek.png",
"./assets/media/Healthy/Yogurt/Liberte.jpg",
"./assets/media/Healthy/Yogurt/yoplait.jpg",
"./assets/media/Healthy/smoothies/banana_s.jpg",
"./assets/media/Healthy/smoothies/blueberry.jpg",
"./assets/media/Healthy/smoothies/mango_s.png",
"./assets/media/Healthy/smoothies/straberry_s.jpg",
"./assets/media/Healthy/Nuts/almonds.jpg",
"./assets/media/Healthy/Nuts/cashews.jpg",
"./assets/media/Healthy/Nuts/pistachios.jpg",
"./assets/media/Healthy/Nuts/trailmix.jpg", 
];

var imgObject = document.getElementById('random-image');

var randomNum = Math.floor(Math.random() * sources.length)

imgObject.src = sources[randomNum];

