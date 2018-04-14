const express = require('express');
const bodyParser = require('body-parser');
const { AUTODESK_CLIENT_ID, AUTODESK_CLIENT_SECRET } = require('./config.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));