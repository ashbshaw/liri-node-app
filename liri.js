
// FIRST install all the npms
    // Installed Spotify, Axios, Dot Env
        // Did not download an api for OMDB or Bands in Town... will just need the key for those I think
        // Unclear on moment.js npm? Do I need to install this??

// THEN git init
    // I think I successfully completed this. I have a package.json and a package-lock.json

// THEN require all of the npms
    // ex: require("dotenv").config();

var Spotify = require('spotify').config();
var axios = require('axios').config();
var bandsInTown = require('bandsInTown').config(); // ??
var OMDB = require('OMDB').config();
var dotEnv = require('dotenv').config()
var request = require('request');
var fs = require('fs');

// Load keys
var keys = require("../liri-node-app/keys");

// Load exports from keys.js file which has authorization keys
// ex: var spotify = new Spotify(keys.spotify);

var spotifyCredentials = // why does the keys file point to the env.js?
var bandsInTownCredentials = // where do I put these?
var omdbCredentials = // where do I put these?

// Read in the command line arguments
// The LIRI command will always be the second command line argument

// Make it so liri.js can take in one of the following commands:
//    `concert-this`
//    `spotify-this-song`
//    `movie-this`
//    `do-what-it-says`

// Do I need to install inquirer? The instructions don't say to, but how else do I take in the command?

function Spotify() {
    this.concert = concert;
    this.song = song;
}

function Omdb() {
    this.movie = movie;
}
    // what is `do-what-it-says"?




// ### What Each Command Should Do
// 1. `node liri.js concert-this <artist/band name here>`
//    * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
//      * Name of the venue
//      * Venue location
//      * Date of the Event (use moment to format this as "MM/DD/YYYY")



// 2. `node liri.js spotify-this-song '<song name here>'`

//    * This will show the following information about the song in your terminal/bash window
//      * Artist(s)
//      * The song's name
//      * A preview link of the song from Spotify
//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base.

// 3. `node liri.js movie-this '<movie name here>'`

// This will output the following information to your terminal/bash window:
//   
//     * Title of the movie.
//     * Year the movie came out.
//     * IMDB Rating of the movie.
//     * Rotten Tomatoes Rating of the movie.
//     * Country where the movie was produced.
//     * Language of the movie.
//     * Plot of the movie.
//     * Actors in the movie.
//   
// * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// * You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.

// 4. `node liri.js do-what-it-says`

//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//      * Edit the text in random.txt to test out the feature for movie-this and concert-this.