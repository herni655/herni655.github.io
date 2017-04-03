console.log('hello');


var myStudentDebt = 800;

myStudentDebt = myStudentDebt - 100;

var myLuckyNumbers = [4, 7, 8, 16];

console.log(myLuckyNumbers);

console.log(myLuckyNumbers[0]);

myLuckyNumbers[2] = 36;
// console.log(myLuckyNumbers[2]);

// functions organize code and can be reused
// functions

function addFive(x) {
	return x + 5;
}

function add(x,y) {
	console.log(x + y);
}



// addFive(10);
// add(8,9);
// add("irene" + "hernandez");

var myAge = 19;

if (myAge < 21) {
	console.log('u cant party');
} else {
	console.log('party on garth');
}

// var myAge = 19;

// console.log('myAge')

// myAge = myAge + 1;

// console.log("myAge = myAge + 1")



var hamburgers = 0;
// loops
	// gonna happen till no longer true
for (var i = 0; i < 10; i = i + 1) {
	// some code here
	// hamburgers++;
	hamburgers = hamburgers + 1;
	// console.log('hamburgers');
}


// conditional + loops
console.log("How many licks does it take to get to the center of a tootsie pop?");

// for (var licks = 1; licks <= 4; licks++) {
// 	if (licks < 4) {
// 		console.log("ahhh" + licks);
// 	} else {
// 		console.log("CRUNCH!!");
// 	}
// }

function askMrOwl(numberOfLicks) {
		for (var licks = 1; licks <= numberOfLicks; licks++) {
		if (licks < numberOfLicks) {
			console.log("ahhh" + licks);
		} else {
			console.log("CRUNCH!!");
		}
	}
}


askMrOwl(18);

// # # # #
//  # # # #
// # # # # #
//  # # # # #





function makeCheckerboard(width, height) {

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



function makeCheckerboard(width, height) {

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


function makeCheckerboard(width, height) {

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






















