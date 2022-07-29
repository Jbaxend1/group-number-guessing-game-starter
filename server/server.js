const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

const guessArray = [
  {
    p1: 12,
    p2: 7,
    p3: 16,
    p4: 22
  }
]

function generateRandomNumber() {
  return Math.floor(Math.random() * (1 + 25 - 1) + 1);
}

// runs one time when the server starts
let randomNumber = generateRandomNumber();

app.get('/reset', (req, res) => {
  randomNumber = generateRandomNumber();
  res.send(200);
});
// GET & POST Routes go here
// GET to return list of guesses
app.get('/guesses', (req, res) =>{
  res.send(guessArray);
})

app.post('/guesses', (req, res) => {
  const guess = req.body; //body of the request data property in sendGuessesToServer
  console.log(req.body);
  guessArray.push(guess);
  
  let result = '';
  // let result = { message: 'no winner' }
  if(guess.p1 === randomNumber) {
    result = 'YOU GOT IT, Player 1';
    // result.message = 'player 1 correct!';
  //} else if (guess.p1 < randomNumber) {
    // result.p1 = 'higher';
  //} else {
    // result.p1 = 'lower';
  }
  if(guess.p2 === randomNumber) {
    result = 'YOU GOT IT, Player 2';
  }
  if(guess.p3 === randomNumber) {
    result = 'YOU GOT IT, Player 3';
  }
  if(guess.p4 === randomNumber) {
    result = 'YOU GOT IT, Player 4';
  }
  else{
    result = 'no winner';
  };
  // res.send(result);
  // res.send({result: result});
  res.send(result);

})



app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
  console.log (generateRandomNumber());
})
