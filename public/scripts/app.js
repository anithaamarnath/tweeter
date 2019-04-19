/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


var createTweetElement = function (object) {
  let $tweet = $("<article>").addClass("tweet");
  let $img = $("<img>").addClass("tweet-img").attr("src" ,object.user.avatars.small);
  let $h3 = $("<h3>").addClass("tweet-h3").text(object.user.name);
  let $address = $ ('<address>').addClass("tweet-address").text(object.user.handle);
  let $header= $ ('<header>').addClass("tweet-header");
  $header.append($img).append($h3).append($address);
  let $p = $('<p>').text(object.content.text);
  let $footer= $('<footer>').text(object.created_at);
$tweet.append($header).append($p).append($footer);
return $tweet;
}

function renderTweets(tweets){
 tweets.forEach(element =>{
   $('#tweets-container').prepend(createTweetElement(element));
 });
}

// Test / driver code (temporary)

$(document).ready(function(){
  $('form').on('submit', function(event) {
        event.preventDefault();
        //console.log('heard submit event');
        let data = $(this).serialize();
        //console.log('data', data);

        $.ajax({
          url: '/tweets',
          method: 'POST',
          data: data
        }).then(
          (res) => {  loadTweets();
            let form= document.getElementById('tweet-form');
            form.reset();
          },
          (err) => { console.log('error') } // 400-500
        )
      });

function loadTweets() {

    $.ajax('/tweets', { method: 'GET' })
    .then(function (res) {
      renderTweets(res);

      //console.log('Success: ',res);

    });
  }
  loadTweets();

});


