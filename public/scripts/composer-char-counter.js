$(document).ready(function() {
  // --- our code goes here ---
    var text = $('textarea[name=text]');
    var counter= $('span.counter');
    console.dir(counter);


  text.on('keyup', function(event) {
    let charLen=140-$(this).val().length;
    counter.text(charLen);
    if(charLen<0)

     $("span.counter").css("color" , "red");

  });


});


