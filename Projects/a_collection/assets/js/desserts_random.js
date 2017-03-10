var sources = [
"./assets/media/Non-Healthy/Desserts/brownies.jpg",
"./assets/media/Non-Healthy/Desserts/cheesecake.jpg",
"./assets/media/Non-Healthy/Desserts/cherry_pie.jpg",
"./assets/media/Non-Healthy/Desserts/choco_cake.jpg",
"./assets/media/Non-Healthy/Desserts/cookies.jpg",
"./assets/media/Non-Healthy/Desserts/crepe.jpg",
"./assets/media/Non-Healthy/Desserts/cupcake.jpg",
"./assets/media/Non-Healthy/Desserts/doughnuts.jpg",
"./assets/media/Non-Healthy/Desserts/muffins.jpg",
"./assets/media/Non-Healthy/Desserts/pancake.jpg",
"./assets/media/Non-Healthy/Desserts/sugar_cookies.jpg",
"./assets/media/Non-Healthy/Desserts/expresso_tres_leches.jpg",
"./assets/media/Non-Healthy/Desserts/vanilla.jpg",
"./assets/media/Non-Healthy/Desserts/waffle.JPG",

];

var imgObject = document.getElementById('random-image');

var randomNum = Math.floor(Math.random() * sources.length)

imgObject.src = sources[randomNum];