var sources = [

"./assets/media/Healthy/Yogurt/chobani.jpg",
"./assets/media/Healthy/Yogurt/dannon_greek.png",
"./assets/media/Healthy/Yogurt/Liberte.jpg",
"./assets/media/Healthy/Yogurt/yoplait.jpg",
];

var imgObject = document.getElementById('random-image');

var randomNum = Math.floor(Math.random() * sources.length)

imgObject.src = sources[randomNum];