
$('document').ready(function(){

var height = $(document).height();
var width = $(document).width();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var i;
for (i = 0; i < 80; i++) { 
	var yPos = getRandomInt(0, height);
	var xPos = getRandomInt(0, width);  
  $('.title').append('<div style=" top: '+yPos+'px; left: '+xPos+'px;" class="square"></div>');
}

});