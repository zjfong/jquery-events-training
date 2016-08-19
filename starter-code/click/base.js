console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('span').on('click', function track(){

    var text = "You Clicked: " + $(this).text() + " at " + Date.now();
    //console.log(this);
    $('ul').append("<li>" + text + "</li>")
  })
})
