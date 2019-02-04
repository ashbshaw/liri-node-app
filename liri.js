
// Git init to create Json files

// Install the npms
// Installed NPMs Spotify, Axios, Dotenv, Moment
// Use APIs with Axios for OMDB and Bands in Town

// Require npms according to documentation

require('node-spotify-api');
// Had var spotify here before, but removed it since I created a var spotify below as specified in instructions
var axios = require('axios');
var moment = require('moment');
require('dotenv').config()
var fs = require('fs');

// Load exports from keys.js file that have authorization keys
// BandsInTown & OMDB - These are public so we will use Axios. 
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

// Read in the command line arguments
// Node is [0], file is [1], LIRI command is [2]
// If band/song/movie is more than one word, use process.argv.slice(3).join(" "); 
process.argv[2];
process.argv[3];
console.log(process.argv[2])
console.log(process.argv.slice(3).join(" "))

// Bandsintown - use Axios to retrieve data from the Bandsintown API
// `node liri.js concert-this <artist/band name here>`
// Output the following information about the artist:
//      * Name of the venue, Venue location, Date of the Event (use moment to format this as "MM/DD/YYYY")
// STILL NEED TO FORMAT THE DATE USING MOMENT.JS

// concert-this = process.argv[2]
var artist = process.argv.slice(3).join(" ");
var bandQuery = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
axios.get(bandQuery).then(
    function (response) {
        console.log("Playing at " + response.venue.name + " in " + response.venue.city + " on " + response.datetime + ".")
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

// spotify-this-song = process.argv[2]
var artist = process.argv.slice(3).join(" ");

// ASK: DO I DO THIS LIKE THE OTHERS WITH AXIOS, OR DO I USE A FUNCTION BECAUSE THE NPM IS LOADED? IF A FUNCTION, HOW DO I START?
// use a switch statement with this function?
    // function spotify() {
    //     this.song = song;
    // }


// OMDB - use Axios to retrieve data from the OMDB API
// `node liri.js movie-this '<movie name here>'`
// This will output the following information abou the movie:
//     * Title, Year, IMDB Rating, Rotten Tomatoes Rating, Country, Language, Plot, Actors
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// THIS IS AN IF ELSE STATEMENT... NEED TO WORK ON THIS!

// got json info from Stack Overflow... hope that works
// Question: why does the OMDB site not let you do more testing?? It says I reached my max for no reason?

// movie-this = process.argv[2]
var movie = process.argv.slice(3).join(" ");
var movieQuery = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
axios.get(movieQuery).then(
    function (response) {
        console.log("Movie Name: " + response.data.Title + ", Year Released: " + response.data.Year + ", IMDB Rating: " + response.data.imdbRating +
            ", Rotten Tomatoes Rating: " + response.data.tomatoRating + ", Produced in: " + response.data.Country + ", Language: " + response.data.Language +
            ", Plot: " + response.data.Plot + ", Actors: " + response.data.Actors + ". Phew! That was a lot of information!")
    }
)

//    `do-what-it-says`
// 4. `node liri.js do-what-it-says`

//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//      * Edit the text in random.txt to test out the feature for movie-this and concert-this.

// UHHHH.....