// For use with stikhoi.css to improve the appearance
// of line numbers in ancient verse.

$(document).ready(function(){
  $('ol.verse').each(function() {
    var start = $(this).attr('start');
    $(this).attr(
      { style: "counter-reset: poem " + (start - 1) }
    );
  });
  $("ol.verse").addClass('jQuery');
});
