var numberOfSquares=6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDispaly = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easybtn");
var hard = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
	easybtn.classList.add("selected")
	hardbtn.classList.remove("selected")
	numberOfSquares=3;
	colors= generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDispaly.textContent= " ";

	for (var i=0; i<squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor= colors[i]
		}
		else {
			squares[i].style.display= "none";
		}
	}

});
hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected")
	easybtn.classList.remove("selected")
	numberOfSquares=6;
	colors= generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDispaly.textContent= " ";

	for (var i=0; i<squares.length; i++) {
		
			squares[i].style.backgroundColor= colors[i];
			squares[i].style.display= "block";
		
	}
})


resetButton.addEventListener("click", function() {
	messageDispaly.textContent= " ";
	colors = generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0 ; i< squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor= "steelblue";
})
colorDisplay.textContent = pickedColor;

for (var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor, pickedColor);
		if (clickedColor === pickedColor) {
			messageDispaly.textContent= "Correct!"
			resetButton.textContent = "Play Again!";
			if (resetButton.textContent == "Play Again!"){
				resetButton.classList.add("clickkked")
				var c = document.querySelector(".clickkked")
				c.addEventListener("click", function(){
					resetButton.textContent = "New COLOR!";
				})
				
			}


			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			
		 }
		else {
			this.style.backgroundColor = "#232323";
			messageDispaly.textContent= "Try Again";
		}
	})


}
function changeColors(color) {
	for (var i = 0 ; i< squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
  var random = Math.floor(Math.random() *colors.length);
  return colors[random];
}

function generateRandomColors(num) {
	var arr = []
	for (var i = 0 ; i< num; i++){
		arr.push(randomColor());


	}


	return arr;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}