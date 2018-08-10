const express = require('express');
const os = require('os');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) =>
  res.send({ username: os.userInfo().username })
);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}!`));
