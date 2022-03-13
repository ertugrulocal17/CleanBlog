const express = require('express');
const app = express();
const ejs = require('ejs');

// MIDDLEWARE
app.use(express.static('public'));

//TEMPLATE ENGINE
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
