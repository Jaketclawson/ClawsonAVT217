$( document ).ready(function() {
  console.log( 'ready!' );
  $('div').mouseenter(function() {
    $('div').toggleClass('grow');
  });
});
