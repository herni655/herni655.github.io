var sources = [
"./assets/media/Non-Healthy/Candy/chocolate/3_musketeers.jpg",
"./assets/media/Non-Healthy/Candy/chocolate/hershey_bar.jpg",
"./assets/media/Non-Healthy/Candy/chocolate/kit_kat.jpg",
"./assets/media/Non-Healthy/Candy/chocolate/m&ms.jpg",
"./assets/media/Non-Healthy/Candy/chocolate/milky_way.png",
"./assets/media/Non-Healthy/Candy/chocolate/pocky.jpg",
"./assets/media/Non-Healthy/Candy/chocolate/Reeses.png",
"./assets/media/Non-Healthy/Candy/chocolate/snickers.jpg",
"./assets/media/Non-Healthy/Candy/chocolate/twix.png",
"./assets/media/Non-Healthy/Candy/chocolate/whoppers.jpg",
"./assets/media/Non-Healthy/Candy/gummies/gummy_bears.jpg",
"./assets/media/Non-Healthy/Candy/gummies/gummy_worms.jpg",
"./assets/media/Non-Healthy/Candy/gummies/motts.jpg",
"./assets/media/Non-Healthy/Candy/gummies/sour_patch.jpg",
"./assets/media/Non-Healthy/Candy/gummies/welchs.jpg",
"./assets/media/Non-Healthy/Candy/hard_candy/candy-canes.jpg",
"./assets/media/Non-Healthy/Candy/hard_candy/dum_dum_lollipops.jpg",
"./assets/media/Non-Healthy/Candy/hard_candy/icebreaker_mints.jpg",
"./assets/media/Non-Healthy/Candy/hard_candy/jolly_rancher.jpg",
"./assets/media/Non-Healthy/Candy/hard_candy/skittles.jpg",
"./assets/media/Non-Healthy/Candy/hard_candy/starburst.jpeg",
"./assets/media/Non-Healthy/Candy/hard_candy/warheads.jpg",
];

var imgObject = document.getElementById('random-image');

var randomNum = Math.floor(Math.random() * sources.length)

imgObject.src = sources[randomNum];