const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller');
// const bc = require('./controllers/books_controller.js');

const app = express();

app.use( bodyParser.json() );
app.use( express.static(__dirname + '/../public/build') );

const messagesBaseUrl = "/api/messages";
app.post( messagesBaseUrl, mc.create );
app.get( messagesBaseUrl, mc.read );
// app.get(`/api/books`, mc.read);
// app.post(`/api/books`, mc.create);
app.put( `${messagesBaseUrl}/:id`, mc.update );
app.delete( `${messagesBaseUrl}/:id`, mc.delete );

// const port = 4000;
const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );