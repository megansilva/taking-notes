const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const { resolve } = require('path/posix');

const PORT = process.env.PORT || 3001;



app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


// saving notes




// deleting a note



// starting server
app.listen(PORT, function() {
    console.log('Listening on PORT ' + PORT);
});








