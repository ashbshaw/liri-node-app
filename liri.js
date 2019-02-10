// Git init to create Json files
// Install the npms Spotify, Axios, Dotenv, Moment
// Use APIs for OMDB and Bands in Town

// Require npms according to documentation
require('dotenv').config();
var fs = require('fs');
var axios = require('axios');
var Spotify = require('node-spotify-api');
var moment = require('moment');

// Load exports from keys.js file that have authorization keys
var keys = require("./keys");

// Switch statement function
function runCommand(action, parameter) {
    switch (action) {
        case 'concert-this':
            concertInfo(parameter)
            break;

        case 'spotify-this-song':
            spotifyInfo(parameter);
            break;

        case 'movie-this':
            movieInfo(parameter);
            break;

        case 'do-what-it-says':
            doThis(parameter);
            break;
    }
}

// Bandsintown - use Axios to retrieve data from the Bandsintown API
// `node liri.js concert-this <artist/band name here>`
// Output: Name of the venue, Venue location, Date of the Event
function concertInfo(parameter) {
    var artistQuery = "https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp";
    axios.get(artistQuery).then(
        function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var data =
                    "\n--------------------" +
                    "\nVenue: " + response.data[i].venue.name +
                    "\nCity: " + response.data[i].venue.city +
                    "\nDate & Time: " + moment(response.data[i].datetime).format("MM/DD/YYYY HH:mm:ss") +
                    "\n--------------------";
                console.log(data);
                logData(data);
            };
        }).catch(function (err) {
            console.log("Error: " + err)
        })
};

// Spotify - use key to retrieve data
// `node liri.js spotify-this-song '<song name here>'`
//  Output: Artist(s), song name, album
//  If no song is provided then your program will default to "The Sign" by Ace of Base.
function spotifyInfo(parameter) {
    if (!parameter) {
        parameter = "the sign ace of base";
    }
    var spotify = new Spotify(keys.spotify);
    spotify.search({ type: 'track', query: parameter }, function (err, data) {
        var songInfo = data.tracks.items;
        if (err) {
            console.log("Error: " + err);
        } else {
            // To loop through the songs
            for (var i = 0; i < songInfo.length; i++) {
                var artistArray = songInfo[i].artists;
                var artists = [];
                // To loop through the array of artists that is returned
                for (var j = 0; j < artistArray.length; j++) {
                    artists.push(artistArray[j].name);
                }
                var data =
                    "\n--------------------" +
                    "\nArtists: " + artists.join(", ") +
                    "\nSong: " + songInfo[i].name +
                    "\nAlbum: " + songInfo[i].album.name +
                    "\nPreview Link: " + songInfo[i].preview_url +
                    "\n--------------------";
                console.log(data);
                logData(data);
            }
        }
    })
}

// OMDB - use Axios to retrieve data from the OMDB API
// `node liri.js movie-this '<movie name here>'`
// Output: Title, Year, IMDB Rating, Rotten Tomatoes Rating, Country, Language, Plot, Actors
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
function movieInfo(parameter) {
    if (!parameter) {
        parameter = "mr nobody";
    }
    var movieQuery = "http://www.omdbapi.com/?t=" + parameter + "&y=&plot=short&apikey=trilogy";
    axios.get(movieQuery).then(
        function (response) {
            var data =
                "\n--------------------" +
                "\nMovie Name: " + response.data.Title +
                "\nRelease Year: " + response.data.Year +
                "\nIMDB Rating: " + response.data.imdbRating +
                "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
                "\nProduction Country: " + response.data.Country +
                "\nLanguage: " + response.data.Language +
                "\nPlot: " + response.data.Plot +
                "\nActors: " + response.data.Actors +
                "\n--------------------";
            console.log(data);
            logData(data);
        }).catch(function (err) {
            console.log("Error: " + err)
        })
}

// `node liri.js do-what-it-says`
// Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
function doThis() {
    fs.readFile("./random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log("Error: " + err);
        } else {
            var random = data.split(",");
            action = random[0];
            parameter = random[1];
            runCommand(action, parameter);
        }
    })
}

function logData(data) {
    fs.appendFile("log.txt", data, function (err) {
        if (err) {
            console.log("Error: " + err);
        }
    })
}

function start() {
    var action = process.argv[2];
    var parameter = process.argv.slice(3).join(" ");
    var data = "\n-------------------\n" +
        "node liri.js " + action + " " + parameter + "\n";
    logData(data);
    runCommand(action, parameter);
}

start();