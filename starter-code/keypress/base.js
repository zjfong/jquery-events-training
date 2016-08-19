console.log("Sanity Check: JS is working!");

var startTime;
var endTime;
var total;

$(document).ready(function(){
  $(window).on("keypress", function startTimer(event){
    if(event.keyCode === 32){

      if(!startTime){
        startTime = Date.now();
      } else {
        endTime = Date.now();
        total = (endTime - startTime)/1000;
        $('#total-time').text(total + " seconds");

      }
    }
  })

})
