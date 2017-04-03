var html =document.documentElement;

//Debt Button
//------------------------------------

var myDebt = 0;

var myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(event) {
	myDebt += 100;
	//my debt + my debt + 100;
	console.log("my debt = $" + myDebt);

	event.stopPropagation();
});


//BG Button
//--------------------------------------
var bgButton = document.getElementById("bg-button");


bgButton.addEventListener("click", function(event) { 
	if (html.style.backgroundColor != "lightpink") {
		html.style.backgroundColor = "lightpink";
	}else {
		html.style.backgroundColor = "white";
	}

	event.stopPropagation();
});

//Simpsons Button 
//-------------------------------------------
var simpsonButton = document.getElementById("simpson-button");
    var simsponWrapper = document.getElementById("simpson-wrapper");
  
    var simpsons = [""];
		simpsons[0] = "media/fake_bart.png";
		simpsons[1] = "media/krusty.gif";
		simpsons[2] = "media/milhouse.gif";
		simpsons[3] = "media/prince_lisa.png";

//var arrayName = ["one", "two", "three"]

    simpsonButton.addEventListener("click", function(event){
        var img = document.createElement("img");
        img.src = simpsons[Math.floor(Math.random()*4)];
        simsponWrapper.appendChild(img);

        event.stopPropagation();
    });

//-----------------------------------------
html.addEventListener("click", function(event) {
	console.log(event.clientX + "," + event.clientY);

	var sticker = document.createElement("div");
	sticker.classList.add("sticker");
	html.appendChild(sticker);
	sticker.style.left = (event.clientX - 10)  + "px";
	sticker.style.top = (event.clientY - 10) + "px";
});




















