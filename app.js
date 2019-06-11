var express = require('express')
var app = express();
app.use(express.static('public'));
console.log("app ends");
app.listen(4000);