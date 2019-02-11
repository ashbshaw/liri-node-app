# liri-node-app

LIRI - Language Interpretation and Recognition Interface

This is a LIRI application (Language Interpretation and Recognition Interface) which allows the user to use the command line node app that accepts the values of certain parameters and returns data. For instance, a user can run node liri.js and include the following command and it will output the data related to the user’s request.

* `concert-this` for BandsinTown information
* `spotify-this-song` for Spotify information
* `movie-this` for OMDB information
* `do-what-it-says`

# Getting Started

Create your own Spotify and API keys and replace it with the information in the file called .env. This file should not have a file extension (important).

**Spotify API Keys**

SPOTIFY_ID=your-spotify-id SPOTIFY_SECRET=your-spotify-secret

**NPM Installations**

Navigate to the root of your project. Then in the terminal command line run npm init, this will initalize a package.json for your project.
Include the following NPM installations: npm dotenv, npm install axios, npm node-spotify-api, npm install moment.

# Deployment

**BandsinTown**

Run node liri.js 'concert-this' 'artist name here'

* This will show the concert venue, city, date, and time from in your terminal/bash window

![bandsintown](/images/bandsintown_capture.PNG)


**Spotify**

Run node liri.js 'spotify-this-song' 'song name here'

* This will show the artist(s), name of song, album song is from, and song preview link in your terminal/bash window

![spotify](/images/spotify_capture.PNG)


**OMDB**

Run node liri.js 'movie-this' 'movie name here'
 
* This will show title of the movie, year movie was released, IMDB Rating, Rotten Tomatoes Rating, country movie was made, language, plot, actors in your terminal/bash window

![movie](/images/movie_capture.PNG)


**Random**

Run node liri.js do-what-it-says

* Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI’s commands

![random](/images/random_capture.PNG)



# Built With

* Visual Studio Code (https://code.visualstudio.com) - Text editor
* Javascript
* Node.js (https://nodejs.org/en) - Framework used
* JSON (http://www.json.org) - Data format used
* Bandsintown API (http://www.artists.bandsintown.com/bandsintown-api) - API for concerts
* Spotify API (https://developer.spotify.com/documentation/web-api) - API for music
* OMDB API (http://www.omdbapi.com) - API for movies

# Author

**Ashley Shaw** - https://ashbshaw.github.io/Ashley-Shaw-Portfolio/



