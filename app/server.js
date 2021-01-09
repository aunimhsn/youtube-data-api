const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.static('client'));

app.get('/', cors(), function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

app.listen(process.env.port || port);
console.log(`Server running at port ${port}`);
