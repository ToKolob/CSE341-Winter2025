var express = require('express');
var app = express();

const port = 3000;


app.use('/', require('./routes/index'));

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})
