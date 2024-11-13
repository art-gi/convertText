const express = require('express');
const path = require('path');

const cors = require('./middlewares/cors.js');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/static')));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  console.log('yes')
    res.sendFile(path.join(__dirname, '../client/static', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});