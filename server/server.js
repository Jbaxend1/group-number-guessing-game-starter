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
  return 8; // TODO: random number
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

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
