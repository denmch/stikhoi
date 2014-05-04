// jQuery. For use with stikhoi.css to improve the
// appearance of line numbers in classical verse.

$(document).ready(function(){
  $('ol.verse').each(function() {
    $('ol.verse').not('[start]').attr('start', '1');
    var start = $(this).attr('start');
    $(this).attr(
      { style: "counter-reset: poem " + (start - 1)  || '1'}
    );
  });
  $("ol.verse").addClass('jQuery');
});
