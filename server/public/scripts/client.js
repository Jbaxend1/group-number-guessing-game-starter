$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")

  $('#submit-guess').on('click', sendGuessesToServer);
  getGuesses();
}

function getGuesses(){
  console.log('in getGuesses');
  $('input').val('');
  
  $.ajax({
    type: 'GET',
    url: '/guesses'

  }).then(function (response){
    console.log(response);
    $('#total-guesses').empty();
    for(let i = 0; i < response.length; i++){
      let guess = response[i];
      $('#total-guesses').append(`
        <ul>
          <li>${guess.p1}</li>
          <li>${guess.p2}</li>
          <li>${guess.p3}</li>
          <li>${guess.p4}</li>
        </ul>
      `)
    }
  })
}

function sendGuessesToServer() {
  $.ajax({
    type: 'POST',
    url: '/guesses',
    data: {
      p1: $('#player-one').val(),
      p2: $('#player-two').val(),
      p3: $('#player-three').val(),
      p4: $('#player-four').val(),

  }
  }).then(function(response) {
    getGuesses();
  }); // .catch goes here 
}