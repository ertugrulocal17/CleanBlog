const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ id: 1, title: 'Blog Title', desc: 'Blog Description' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
