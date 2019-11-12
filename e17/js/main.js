$(document).ready(function(){
  console.log('The Document is Fired Up and Ready.');

  $('.goodfellas').click(function() {
    $('.number1').toggleClass('align-left');
  });
  $('.savingprivateryan').click(function() {
    $('.number2').toggleClass('align-right');
  });
  $('.indianajones').click(function() {
    $('.number3').toggleClass('align-center');
  });
  $('.goon').click(function() {
    $('.number4').toggleClass('align-top');
  });
  $('.miracleonice').click(function() {
    $('.number5').toggleClass('align-bottom');
  });
})
