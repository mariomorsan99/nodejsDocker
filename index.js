const express = require('express');
var mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connection.openUri('mongodb://mongo:27017/hospitalDB', (err, resp) => {
    if (err) {
        throw err;
    }
    console.log('conectado ala base de datos mongo: \x1b[32m%s\x1b[0m', 'online');
});

app.get('/', function(req, res) {
    res.json({ "hello docker": "express server" });
});
app.listen(PORT, function() {
    console.log('Your node js server is running on PORT:', PORT);
});