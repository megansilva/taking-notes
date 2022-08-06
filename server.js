const express = require('express');
const path = require('path');
const app = express();


const PORT = process.env.PORT || 3001;



app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));






// starting server
app.listen(PORT, function() {
    console.log('Listening on PORT ' + PORT);
});








