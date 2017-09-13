// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var colorPicker = $('#colorPicker'),
    canvas = $('#pixel_canvas');

function makeGrid() {

// Your code goes here!

  var gridHeight = $('#input_height'),
      gridWidth = $('#input_width');

  canvas.children().remove();

  for ( var i = 0; i < gridHeight.val(); i++ ){
    canvas.append( '<tr></tr>' );
  }

  for ( var i = 0; i < gridWidth.val(); i++ ){
    canvas.find( 'tr' ).append( '<td class="cell"></td>' );
  }
}

$( '#sizePicker' ).submit( function( event ) {
  makeGrid()
  event.preventDefault();
} );

canvas.on( 'click', 'td', function() {
  console.log( 'click' );
  $( this ).css( 'background-color', colorPicker.val() );
});
