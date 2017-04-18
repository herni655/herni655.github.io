function checkerboard(width, height) {

var checkerboard = "";

for (j = 0; j < height; j++){
   if (j % 2) {
       for (i = 0; i < width; i++) {
           if ( i % 2 ){
               checkerboard = checkerboard + "#"
           } else {
               checkerboard = checkerboard + " "
           }
       }
   } else {
       for (i = 0; i < width; i++) {
           if ( i % 2 ){
               checkerboard = checkerboard + " "
           } else {
               checkerboard = checkerboard + "#"
           }
       }
   }
   checkerboard = checkerboard + "\n"
}

console.log(checkerboard);
}



function checkerboard(width, height) {

var checkerboard = "";

for (j = 0; j < height; j++){
   if (j % 2) {
       for (i = 0; i < width; i++) {
           if ( i % 2 ){
               checkerboard = checkerboard + "#"
           } else {
               checkerboard = checkerboard + " "
           }
       }
   } else {
       for (i = 0; i < width; i++) {
           if ( i % 2 ){
               checkerboard = checkerboard + " "
           } else {
               checkerboard = checkerboard + "#"
           }
       }
   }
   checkerboard = checkerboard + "\n"
}

console.log(checkerboard);
}


function checkerboard(width, height) {

var checkerboard = "";

for (j = 0; j < height; j++){
   if (j % 2) {
       for (i = 0; i < width; i++) {
           if ( i % 2 ){
               checkerboard = checkerboard + "#"
           } else {
               checkerboard = checkerboard + " "
           }
       }
   } else {
       for (i = 0; i < width; i++) {
           if ( i % 2 ){
               checkerboard = checkerboard + " "
           } else {
               checkerboard = checkerboard + "#"
           }
       }
   }
   checkerboard = checkerboard + "\n"
}

console.log(checkerboard);
}
	

function triangle (height) {
	var pyramid = "#";
	for (var i = 0; i < height; i++) {
		[i]
	}
}






//buttons

var checkerboardBtn = document.getElementById("checkerboard");
checkerboardBtn.addEventListener("click", function(event) { 
	checkerboard(10, 5)
});

var pyramidBtn = document.getElementById("pyramid")
pyramidBtn.addEventListener("click", function(event) { 
	triangle(5)
});





