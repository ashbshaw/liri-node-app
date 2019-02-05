
// Git init to create Json files

// Install the npms
// Installed NPMs Spotify, Axios, Dotenv, Moment
// Use APIs with Axios for OMDB and Bands in Town

// Require npms according to documentation

require('dotenv').config()
var fs = require('fs');
var axios = require('axios');
var spotify require('node-spotify-api');
var moment = require('moment');

// Load exports from keys.js file that have authorization keys
// BandsInTown & OMDB - These are public so we will use Axios. 
var keys = require("./keys");
var spotifyKey = new Spotify(keys.spotify);

// Read in the command line arguments
// Node is [0], file is [1], LIRI command is [2]
// If band/song/movie is more than one word, use process.argv.slice(3).join(" "); 
var action = process.argv[2];
// var paraneter = process.argv[3];
var parameter = process.argv.slice(3).join(" ");

console.log(process.argv[2])
console.log(process.argv.slice(3).join(" "))

// Bandsintown - use Axios to retrieve data from the Bandsintown API
// `node liri.js concert-this <artist/band name here>`
// Output the following information about the artist:
//      * Name of the venue, Venue location, Date of the Event (use moment to format this as "MM/DD/YYYY")
// STILL NEED TO FORMAT THE DATE USING MOMENT.JS

function concertInfo(parameter) {
    var searchArtist = parameter
}

var artistQuery = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
axios.get(artistQuery).then(
    function (response) {
        console.log("--------------------");
        console.log("Venue: " + response.venue.name);
        console.log("City: " + response.venue.city);
        console.log("Date & Time: " + response.datetime);
        console.log("--------------------");
    }
)

// Spotify - use key to retrieve data
// `node liri.js spotify-this-song '<song name here>'`
//  This will show the following information about the song:
//      * Artist(s)
//      * The song's name
//      * A preview link of the song from Spotify
//      * The album that the song is from
//  If no song is provided then your program will default to "The Sign" by Ace of Base.

function spotifyInfo(parameter) {

    var searchSong;
    if (parameter === undefined) {
        searchSong = "The Sign Ace of Base";
    } else {
        searchSong = parameter;
    }
}

// finish spotify




   
// OMDB - use Axios to retrieve data from the OMDB API
// `node liri.js movie-this '<movie name here>'`
// This will output the following information abou the movie:
//     * Title, Year, IMDB Rating, Rotten Tomatoes Rating, Country, Language, Plot, Actors
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// THIS IS AN IF ELSE STATEMENT... NEED TO WORK ON THIS!

// got json info from Stack Overflow... hope that works
// Question: why does the OMDB site not let you do more testing?? It says I reached my max for no reason?

function movieInfo(parameter) {

    var searchMovie;
    if (searchMovie === undefined) {
        movieInfo = "Mr. Nobody";
    } else {
        searchMovie = parameter;
    }
}

var movieQuery = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
axios.get(movieQuery).then(
    function (response) {
        console.log("--------------------");
        console.log("Movie Name: " + response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
        console.log("Production Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        console.log("--------------------");
    }
)

//    `do-what-it-says`
// 4. `node liri.js do-what-it-says`

//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//      * Edit the text in random.txt to test out the feature for movie-this and concert-this.

// UHHHH.....

function switchCase() {

    switch (action) {

        // case 'concert-this':
        // bandsInTown(parameter);
        // break;

        case 'spotify-this-song':
        searchSong(parameter);
        break;

        case 'movie-this':
        movieInfo(parameter);
        break;

        default:                            
        logIt("Invalid Instructions");
        break;

    }
};