// const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const {uuid} = require('uuidv4');

// const PORT = process.env.PORT || 3001;

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.use(express.static("public"));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, '/public.index.html'))
// });

// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/notes.html'))
// });

// app.get('api/notes', (req, res) => {
//     const data = fs.readFileSync(path.join(__dirname, '/db/db.json'), "utf8", () => {})

//     return res.json(JSON.parse(data));
// });

// app.post('api/notes', (req, res) => {
//     let data = fs.readFileSync(path.join(__dirname, '/db/db.json'), "utf8", () => {});

//     data = JSON.parse(data);
//     req.body.id = uuid();
//     data.push(req.body);

//     data = JSON.stringify(data);

//     fs.writeFile(path.join(__dirname, '/db/db.json'), data, () => {});

//     return res.send("Note added")
// });

// app.delete('api/notes/:id', (re, res) => {
//     let data = fs.readFileSync(path.join(__dirname, '/db/db.json'), "utf8", () => {});

//     data = JSON.parse(data);
//     data = data.filter(datum => datum.id! = req.params.id)

//     data = JSON.stringify(data);

//     fs.writeFile(path.join(__dirname, '/db/db.json'), data, () => {});

//     return res.send("Note deleted")

// });


// app.listen(PORT, () => {
//     console.log('Notes at http://localhost:${PORT}')
// });


const expree = require('express');
const fs = require('fs');
const path = require('path');
const util = require('util');
const app = express();
const PORT = process.env.PORT || 8080;
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/html'));

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "html/notes.html"));
});

app.get("/api/notes", (req, res) => {
    readFileAsync("./db/db.json", "utf8")
    .then((result, err) => {
        if(err) 
            console.log(err);
        return res.json(JSON.parse(result));
    
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "html?index.html"));
});


// saving notes
app.post("/api/notes", (req, res) => {
    let newNote = req.body;
}





