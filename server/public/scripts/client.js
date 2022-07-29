$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")

  // $('#submit-guess').on('click',);
  getGuesses();
}

function getGuesses(){
  console.log('in getGuesses');
  
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