const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json()); // here we are telling app to be expecting json objects

app.get('/', (request, response) => {
    response.sendFile(__dirname + "//form.html")
});

app.get('/doGet', (request, response) => {
    responseTrack = {
        artist: request.query.artist,
        title: request.query.title,
        album: request.query.album
    };
    response.send(JSON.stringify(responseTrack));
})

// app.get('/doPost', (request, response) => {
//     responseTrack = {
//         artist: request.body.artist,
//         title: request.body.title,
//         album: request.body.album
//     };
//     response.send(JSON.stringify(responseTrack));
// });

app.listen(8081);
console.log('Listening!!!')