const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
var fs = require('fs');


const app = express();
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/api/clients', function (req, res) {
    fs.readFile("./data/clients.json", function(err, data){
        if(err) throw err;
        res.send(JSON.parse(data));
    });
});

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.listen(process.env.PORT || 8080);