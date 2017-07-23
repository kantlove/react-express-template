import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HelloWorld from './components/HelloWorld';
import express from 'express';

let app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve the files in `public` folder
app.use(express.static('public'));

app.get('/', function (req, res) {
  // NOTE: server-side rendering
  res.render(
    'index', 
    {content: ReactDOMServer.renderToString(<HelloWorld />)}
  );
});

// Start server
let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;

  if (host === '::') {
    host = 'localhost';
  }

  console.log('Example app listening at http://%s:%s', host, port);
});