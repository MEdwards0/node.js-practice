const fs = require('fs');

const fetchTracks = () => {
    try {
        var tracksString = fs.readFileSync('track-data.json');
        return JSON.parse(tracksString);
    } catch (e) {
        return [];
    }
}

const saveTracks = (tracks) => {
    fs.writeFileSync('track-data.json', JSON.stringify(tracks));
}

const addTrack = (artist, title, album) => {

    // console.log('Adding a track ', artist, title, album);
    var tracks = fetchTracks();
    var track = {
        artist,
        title,
        album
    };
    
    tracks.push(track);
    saveTracks(tracks);    
    
};

const listTracks = (artist, title, album) => {
    // console.log('Listing all tracks');
    return fetchTracks();
}

const getTrack = (title) => {
    // console.log('Getting the track ',title)
    var tracks = fetchTracks();
    var filteredTracks = tracks.filter((track) => {
        return track.title === title;
    });
    return filteredTracks[0];
}

const removeTrack = (title) => {
    // console.log('Removing the track ', title)
    var tracks = fetchTracks();
    var filteredTracks = tracks.filter((track) => {
        return track.title !== title;
    });
    saveTracks(filteredTracks);
};

module.exports = {
    addTrack,
    listTracks,
    getTrack,
    removeTrack
}