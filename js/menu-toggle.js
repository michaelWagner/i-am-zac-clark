$(document).ready(function() {
  $('.toggle-nav').sidr({
    side: 'right'
  });
});

$(window).resize(function() {
  if ($('#sidr').css('display') == 'block' && $(window).width() > 605) {
    $('.toggle-nav').click();
  }
});

$(window).on('click', function(e) {
  if ($('#sidr').css('display') == 'block') {
    $('.toggle-nav').click();
  }
});

$(document).ready(function() {
    $('.hover').bind('touchstart', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
    $('.hover').bind('touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
});

// $(window).on('touchend', function() {
//   $('.menu-arrow').css('background', 'url(../imgs/arrow.png) no-repeat center');
//   $('.menu-arrow').css('background-size', '100%');
// }).on('touchcancel', function() {
//   $('.menu-arrow').css('background', 'url(../imgs/arrow.png) no-repeat center');
//   $('.menu-arrow').css('background-size', '100%');

// });

$(window).touchwipe({
  wipeRight: function() {
    // Close
    $.sidr('close', 'sidr');
  },
  wipeLeft: function() {
    // Open
    $.sidr('open', 'sidr');
  },
  preventDefaultEvents: false
});