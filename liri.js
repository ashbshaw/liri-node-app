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
var spotify = new Spotify(keys.spotify);

// Read in the command line arguments
// If band/song/movie is more than one word, use process.argv.slice(3).join(" "); 
var action = process.argv[2];
var parameter = process.argv.slice(3).join(" ");

// Test
// console.log(process.argv[2])
// console.log(process.argv.slice(3).join(" "))

// Switch case
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
};


// Bandsintown - use Axios to retrieve data from the Bandsintown API
// `node liri.js concert-this <artist/band name here>`
// Output: Name of the venue, Venue location, Date of the Event

function concertInfo(parameter) {
    var artistQuery = "https://rest.bandsintown.com/artists/" + parameter + "/events?app_id=codingbootcamp";
    axios.get(artistQuery).then(
        function (response) {
            for (var i = 0; i < response.data.length; i++) {
                // Print each element of the array/
                console.log("--------------------");
                console.log("Venue: " + response[i].data.venue[0].name);
                console.log("City: " + response[i].data.venue[0].city);
                console.log("Date & Time: " + moment(response[i].data[0].datetime).format("MM/DD/YYYY"));
                console.log("--------------------");
            };
            fs.appendFile("./log.txt", function (err) {
                if (err) {
                    console.log("Error: " + err);
                } else {
                    console.log("Liri log is updated.")
                }
            })
        }
    ).catch(function (err) {
        console.log("Error: " + err)
    })
};

// Spotify - use key to retrieve data
// `node liri.js spotify-this-song '<song name here>'`
//  Output: Artist(s), song name, album
//  If no song is provided then your program will default to "The Sign" by Ace of Base.
//  Q: not sure how to attach random.txt 

function spotifyInfo(parameter) {
    if (!parameter) {
        parameter = "the sign ace of base";
    }
    spotify.search({ type: 'track', query: parameter }, function (err, data) {
        var songInfo = data.tracks.items;
        for (var i = 0; i < 5; i++) {
            if (err) {
                console.log("Error: " + err);
                return;
            } else {
                console.log("--------------------");
                console.log("Artist: " + songInfo[i].artists[0].name);
                console.log("Song: " + songInfo[i].name);
                console.log("Album: " + songInfo[i].album.name);
                console.log("Preview Link: " + songInfo[i].preview_url);
                console.log("--------------------");
            };
            fs.appendFile("./log.txt", function (err) {
                if (err) {
                    console.log("Error: " + err);
                } else {
                    console.log("Liri log is updated.")
                }
            });
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
            fs.appendFile("./log.txt", function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Liri log is updated.")
                }
            })
        }
    ).catch(function (err) {
        console.log("Error: " + err)
    })
};

// `node liri.js do-what-it-says`
// Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
// Edit the text in random.txt to test out the feature for movie-this and concert-this

function doThis(parameter) {
    fs.readFile("./random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log("Error: " + err);
        } else {
            doThisResult = data.split(",");
            spotifyInfo(doThisResult[0], doThis[1])
        }
    })
}
