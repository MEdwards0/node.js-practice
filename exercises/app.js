const fs = require('fs');
const tracks = require('./tracks.js');
const yargs = require('yargs');
const _ = require('lodash');

// var command = process.argv[2];

const argv = yargs.argv;
var command = argv._[0]; // using lodash -> _ (underscore) to represent 

switch (command) {
    case 'add':
        tracks.addTrack(argv.artist, argv.title, argv.album)
        break;
    case 'list':
        var allTracks = tracks.listTracks();
        allTracks.forEach(track => {
            console.log(`${track.title} by ${track.artist} from ${track.album}`)
        });
        break;
    case 'get':
        // tracks.getTrack(argv.title);
        var track = tracks.getTrack(argv.title);
        if (track) {
            console.log(`Title: ${track.title} Artist: ${track.artist} Album: ${track.album}`);
        } else {
            console.log('Track not found');
        }
        break;
    case 'remove':
        var track = tracks.getTrack(argv.title);
        if (track) {
            tracks.removeTrack(argv.title);
            console.log(`${argv.title} has been removed`);
        } else {
            console.log('track could not be found')
        }
        
        break;

    default:
        console.log('Unlisted command');
        break;
}

// console.log(argv);