console.log('Loaded!');

//change text

var element = document.getElementById ("main-text");

element.innerHTML = "Welcome to the Harry Potter Website!";

//move logo

var img = document.getElementById("logo");
var marginLeft = 0;
function moveRight () {
		marginLeft = marginLeft + 1;
		img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
	var interval = setInterval(moveRight,50)
}