$(function() {
    $('#dialog' ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $('#opener' ).click(function() {
      $( "#dialog" ).dialog( "open" );
    });
  });

$(document).ready(function() {  
  // mobile nav toggle
  $('#nav-toggle').on('click', function (event) {
    event.preventDefault();
    $('#header-collapse').toggleClass("collapsed");
  });
});