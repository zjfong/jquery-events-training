/*
  What needs to change so that the page says "Go!"?

  Move both text change and if statement into document.ready
*/

$(document).ready(function(){
  $("h1").text("Go!");
  console.log( "The page says:", $("h1").text() );


  if ( $("h1").text() === "Go!" ){
  console.log( "The page says:", $("h1").text() );
  console.log("Success!");
} else {
  console.log( 'Can you make it say "Go!"?' );
}
});





