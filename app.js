var count = 0;

$(document).ready(function() {
	$('#one').on('click', function() {
		count++;
		$('#container2').append('<div id="container3"><div class="text">Line #' + count + '</div><button id="color">Change Color</button>' + '<button id="remove">Remove</button></div>');
	});
	$('body').on('click', '#color', function(){
		$(this).addClass("red");//this changes the button text's color
		//$('.text').css('color', 'red');//this is currently selecting all the elements with the class text and changing the color...ugh
	//Have to create another div around just the text portion of the container3 div so I can target it...have tried and it doesn't end well
	});
	$('body').on('click', '#remove', function(){
		$(this).parent().remove();
	});
});


