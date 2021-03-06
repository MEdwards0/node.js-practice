const express = require('express');
const app = express();
const tracks = require('./tracks');

app.use(express.urlencoded({extended: true}));
app.use(express.json()); // here we are telling app to be expecting json objects

app.get('/', (request, response) => {
    response.sendFile(__dirname + "//tracks.html")
});

app.get('/doGet', (request, response) => {
    var responseTrack = tracks.getTrack(request.query.title);
    response.send(JSON.stringify(responseTrack));
})

app.get('/remove', (request, response) => {
    var title = request.query.title;
    tracks.removeTrack(title);
    response.send(`<h1>Removed track ${title}</h2>`);
})

app.get ('/list', (request, response) => {
    response.send(JSON.stringify(tracks.listTracks()));
})

app.post('/doPost', (request, response) => {
    tracks.addTrack(request.body.artist, request.body.title, request.body.album )
    responseTrack = {
        artist: request.body.artist,
        title: request.body.title,
        album: request.body.album
    };
    response.send(JSON.stringify(responseTrack));
});

app.listen(8081);
console.log('Listening!!!')