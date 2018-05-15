var url = 'https://api.icndb.com/jokes/random';

// var button = document.getElementById('get-joke');
// button.addEventListener('click', function(){
//   getJoke();
// });

var $button = $('#get-joke').click(function() {
  getJoke();
});


// var paragraph = document.getElementById('joke');

var $paragraph = $('#joke');

// function getJoke() {
//   var object = new XMLHttpRequest();
//   object.open('GET', url);
//   object.addEventListener('load', function() {
//     var response = JSON.parse(object.response);
//     paragraph.innerHTML = response.value.joke;
//   });
//   object.send();
// }

function getJoke() {
  $.ajax({
    method:'GET',
    url: url,
    success: function(response) {
      $paragraph.text(response.value.joke);
    }
  });
}

$('p').text(getJoke());
