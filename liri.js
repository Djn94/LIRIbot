const axios = require("axios");
const inquirer = require("inquirer");
require("dotenv").config();
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const operator = process.argv[2];
exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};
exports.ticketmaster = {
    id: process.env.ticketmaster_ID,
    secret: process.env.ticketmaster
}





const concertInformation = {
    Name: response.name,
    location: response.location,
    date: moment(response.data) //MM/DD/YYYY

};
if (operator === 'search-concerts') { };
axios.get(`TICKETMASTER_API_URL`).then(
    function (response) {

        console.log(response);
        const concertInformation = {
            Name: response.name,
            location: response.location,
            date: moment(response.data) //MM/DD/YYYY

        };
    })
if (operator === 'search-songs') { };
axios.get(`SPOTIFY_API_URL`).then(
    function (response) {
        console.log(response);
        const songInformation = {
            name: response.name,
            previewLink: s,//preview link from spotify api,
            album: response.album,

        };
    })
if (operator === 'search-movies') { };
axios.get(`http://www.omdbapi.com/?t=${movieTitle}&apikey=trilogy`).then(
    function (response) {
        console.log(response.data.imdbRating)
        console.log(response)
        const response = response.data;
        const movieInformation = {
            name: response.title,
            IMDBrating: response.IMDBrating,
            rottenTomatos: response.rottenTomatos,
            country: response.country,
            language: response.language,
            plot: response.plot,
            actors: response.actors,
        };
    })
if (operator === 'feeling-lucky') { };



//search-concerts
    //This will search the Ticket Master Artist Events API (https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) 
// Name of the venue

// Venue location

// Date of the Event (use date-fns to format this as "MM/DD/YYYY")

// ---search-songs

// The song's name

// A preview link of the song from Spotify

// The album that the song is from



// /search-movies
//Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.
// 


// node liri.js feeling-lucky

// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

// It should run search-songs for "I Want it That Way," as follows the text in random.txt.

// Edit the text in random.txt to test out the feature for search-movies and search-concerts.