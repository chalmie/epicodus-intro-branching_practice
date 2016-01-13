$(document).ready(function() {

  // functionality to buttons
  // on click show given animal content and hide other content
  // snake button
  $('button#snakeBtn').click(function() {
    // alert('Your snake button works!');
    // add sibling classes hidden
    $('.snake').siblings().addClass('hidden');
    // remove class hidden from chosen animal
    $('.snake').removeClass('hidden');

  });
  // turtle button
  $('button#turtleBtn').click(function() {
    alert('Your turtle button works!');
  });
  // insecta button
  $('button#insectsBtn').click(function() {
    alert('Your insects button works!');
  });

});
