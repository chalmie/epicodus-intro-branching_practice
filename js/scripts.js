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

    // add sibling classes hidden
    $('.turtle').siblings().addClass('hidden');
    // remove class hidden from chosen animal
    $('.turtle').removeClass('hidden');
  });
  // insecta button
  $('button#insectsBtn').click(function() {

    // add sibling classes hidden
    $('.insects').siblings().addClass('hidden');
    // remove class hidden from chosen animal
    $('.insects').removeClass('hidden');
  });

});
