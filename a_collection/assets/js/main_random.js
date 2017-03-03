var sources = [
"./assets/media/Healthy/Vegetables/baby_carrot.jpg",
"./assets/media/Healthy/Vegetables/Bell-Pepper.jpg",
"./assets/media/Healthy/Vegetables/celery.jpg"
];

var imgObject = document.getElementById('random-image');

var randomNum = Math.floor(Math.random() * sources.length)

imgObject.src = sources[randomNum];


// var mySources = ["../media/Healthy/Vegetables/baby_carrot.jpg",
//  "../media/Healthy/Vegetables/Bell-Pepper.jpg",
//  "../media/Healthy/Vegetables/celery.jpg"];
  
// for (var i=0; i<mySources.length; i++) {
//  	var random = Math.random() * 3;
//  	random = Math.floor(random);

//  	document.write("<img scr = /"" + Math.floor(1 + Math.random()3) + .jpg\" />");
//  }

// function randomImg() {
// 	var myImages = new Array();

// 	myImages[1] = "../media/Healthy/Vegetables/baby_carrot.jpg";
// 	myImages[2] = "../media/Healthy/Vegetables/Bell-Pepper.jpg";
// 	myImages[3] = "../media/Healthy/Vegetables/celery.jpg";

// 	// var myLinks = new Array();
// 	// myLinks[1]
// }

// var rnd = Math.floor(Math.random() * myImages.length);
// if(rnd == 0) {
// 	rnd =  1;
// }

// document.write(document.getElementById("randomImg") + (img scr = myImages[rnd]+ '"border = "0"');

