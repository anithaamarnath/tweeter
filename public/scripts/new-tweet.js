$(document).ready(function() {

 var text = $('textarea[name=text]');
 let counter = $('span.counter');
 var button = $('#tweet-submit');
 var form = $('#tweet-form')
text.on('keyup', function(event){
   let cLeft = 140 - $(this).val().length;
   counter.text(cLeft);
  if(cLeft < 0){
     $('span.counter').css("color", "red");
     $('.tweet-error').text("Tweets is too long");
      $('.tweet-error').css('display', 'block');
    }
  if($(this).val().length > 0 && $(this).val().length <= 140) {
    $('span.counter').css("color", "black");
    $('.tweet-error').css('display', 'none');
  }

});
button.on('click',function(event){

  if(text.val().length === 0){
    $('.tweet-error').text("Tweets cant be empty");
    $('.tweet-error').css('display', 'block');
    event.preventDefault();
  }
   if(text.val().length >140){
    event.preventDefault();
  $('.tweet-error').text("Tweets is too long !!");
    $('.tweet-error').css('display', 'block');
   $( "textarea" ).focus();
}
});
$('#nav-compose').on('click', function () {
         $('.new-tweet').slideToggle();
         $( "textarea" ).focus();
       });
      form.on('submit',function(){
    counter.text(0);
    counter.css("color", "black");
    $( "textarea" ).focus();

 });

});

