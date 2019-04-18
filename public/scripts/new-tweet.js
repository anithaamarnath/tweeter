$(document).ready(function() {
 // --- our code goes here ---
 //console.log(window);
 var text = $('textarea[name=text]');

 let counter = $('span.counter');
 var button = $('#tweet-submit');
 //console.log(button);
 //console.log(text);
 //console.dir();

 text.on('keyup', function(event){
   let cLeft = 140 - $(this).val().length;
   counter.text(cLeft);
   if(cLeft < 0){
     $('span.counter').css("color", "red");
     $('.tweet-error').text("Tweets is too long");
    $('.tweet-error').css('display', 'block');
     //alert("Tweet is too long");
   }
   if($(this).val().length > 0 && $(this).val().length <= 140) {
    $('.tweet-error').css('display', 'none');
    $('#seblod_form').submit()
   }

 });
button.on('click',function(event){

   if(text.val().length === 0){
    $('.tweet-error').text("Tweets cant be empty");
    $('.tweet-error').css('display', 'block');

      //$('.tweet-error').css('visiblity','hidden');
       event.preventDefault();

   }
   if(text.val().length >140){
    event.preventDefault();
  $('.tweet-error').text("Tweets cant be empty");
    $('.tweet-error').css('display', 'block');
}
});

$('#nav-compose').on('click', function () {
         $('.new-tweet').slideToggle();
         $( "textarea" ).focus();
       });



});

