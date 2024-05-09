const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/registration', (req, res) => {
  res.sendFile(__dirname + '/Registration.html'); 
});

app.post('/registration', (req, res) => {
  const { username, email, password } = req.body;

  console.log(`User registered: ${username}, ${email}, ${password}`);
  res.send('Registration successful!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});