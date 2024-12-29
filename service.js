// app.js (Node.js with Express)

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle the form submission
app.post('/submit_cat', (req, res) => {
  const name = req.body.name;
  const catDescription = req.body.cat;

  res.send(`<h1>Thank you for writing about your cat, ${name}!</h1><p>Your message: ${catDescription}</p>`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
