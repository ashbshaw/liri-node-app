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
Include the following NPM installations: npm dotenv, npm install axios, npm node-spotify-api, npm install moment

# Deployment

**BandsinTown**

Run node liri.js 'concert-this' '<artist name here>'


