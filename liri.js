const axios = require("axios");
const axios = require("inquirer");
require("dotenv").config();
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const movieTitle = process.argv[2];
exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};
exports.ticketmaster = {
    id: process.env.ticketmaster_ID,
    secret: process.env.ticketmaster
}




axios.get(`http://www.omdbapi.com/?t=${movieTitle}&apikey=trilogy`).then(
    function (response) {
        console.log(response.data.imdbRating)
        console.log(response)
    })

