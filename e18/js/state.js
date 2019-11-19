$(document).ready(function() {
    // run function on initial page load
	stateGuess();
});

function stateGuess() {
	var stateArray = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
	var randomNumber = Math.floor(Math.random() * stateArray.length);
	var stripped = stateArray[randomNumber].toLowerCase();
	console.log(stateArray[randomNumber]);
	console.log(stripped);
	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
		console.log(guess);
		if (guess == stripped || guess == stateArray[randomNumber]) {
			$('h1').text(guess + ' is CORRECT!');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text(guess + ' is WRONG');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
	});
	$(document).keypress(function(e){
			if(e.which == 13){ //Enter key pressed
					$('#submit').click();//Trigger button click event
			}
	});
}
