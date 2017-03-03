var sources = [
"../media/Healthy/Vegetables/baby_carrot.jpg",
"../media/Healthy/Vegetables/Bell-Pepper.jpg",
"../media/Healthy/Vegetables/celery.jpg"
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

//  	document.getElementById("image").inner.HTML;
//  }

