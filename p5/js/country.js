// everything must go in the document ready function
$( document ).ready(function() {
  // prints to the console which we can see through the inspector
  console.log( 'ready!' );
  // allows us to make an interaction on click
  $('div').mouseenter(function() {
    // grows the font size coded through jquery
    // $('p').css('font-size','10vw');
    // toggles a class we made in css. one click adds it, the next click removes it
    $('div').toggleClass('grow');
  });
  // grows the font size when jquery loads
  // $('p').css('font-size','10vw');
});
