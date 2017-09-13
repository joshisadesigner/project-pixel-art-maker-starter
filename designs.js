// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const colorPicker = $('#colorPicker'),
    canvas = $('#pixel_canvas');

function makeGrid() {

// Your code goes here!

  let gridHeight = $('#input_height'),
      gridWidth = $('#input_width');

  // Clear Canvas from any children previously created
  canvas.children().remove();

  // Appends n tr on the canvas
  for ( let i = 0; i < gridHeight.val(); i++ ){
    canvas.append( '<tr></tr>' );
  }

  // Appends n td children of tr on the canvas
  for ( let i = 0; i < gridWidth.val(); i++ ){
    canvas.find( 'tr' ).append( '<td></td>' );
  }
}

$( '#sizePicker' ).submit( function( e ) {
  makeGrid()
  e.preventDefault();
} );

canvas.on( 'click', 'td', function() {
  console.log( 'click' );
  $( this ).css( 'background-color', colorPicker.val() );
  console.log( this );
});
