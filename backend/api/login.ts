const express = require('express');
const app = express.Router();

app.get('/hello', (req, res) => {
    console.log("api/hello hit");
    res.send({ express: 'Hello From Express' });
});

app.post('/world', (req, res) => {
    //console.log(req.body.post);
    console.log("/api/world hit");
    res.send("I recieved your POST request. This is what you sent me: " + req.body.post + ", " + req.body.username + ", " + req.body.password);
});

module.exports = app;