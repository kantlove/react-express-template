import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import Home from '../app/pages/home';

let app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render(
    'home', 
    {content: ReactDOMServer.renderToString(<Home />)}
  );
});

// Start server
const port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`);