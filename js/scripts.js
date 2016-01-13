$(document).ready(function() {

  // functionality to buttons
  // on click show given animal content and hide other content
  // snake button
  $('button#snakeBtn').click(function() {

    // add sibling classes hidden
    $('.snake').siblings().addClass('hidden');
    // remove class hidden from chosen animal
    $('.snake').removeClass('hidden');

  });
  // turtle button
  $('button#turtleBtn').click(function() {
     turtleLove = confirm("Do you love turtes? OK for yes, Cancel for no");

    if (turtleLove) {
      // add sibling classes hidden
      $('.turtle').siblings().addClass('hidden');
      // remove class hidden from chosen animal
      $('.turtle').removeClass('hidden');
    } else {
      $('.turtle').addClass('hidden');
      alert("You don't deserve to learn about turtles!");
    };

  });
  // insecta button
  $('button#insectsBtn').click(function() {

    // add sibling classes hidden
    $('.insects').siblings().addClass('hidden');
    // remove class hidden from chosen animal
    $('.insects').removeClass('hidden');
  });

});
