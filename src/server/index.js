const express = require('express');
const path = require('path');
const app = express();

const mailer = require('./routes/mailer');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/../client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, '/../client/build', 'index.html'));
});

app.use('/', mailer);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
