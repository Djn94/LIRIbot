
require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const keys = require("./keys.js");
const Spotify = require('node-spotify-api')
const spotify = new Spotify(keys.spotify);
let operator = process.argv[2];
let keyword = process.argv[3];
exports.ticketmaster = {
    id: process.env.ticketmaster_ID,
    secret: process.env.ticketmaster
}
function spotifySearch() {
    spotify.search({ type: 'track', query: `${keyword}`, limit: 1, offset: 0 }, function (err, response) {
        const songInfo = {
            songName: response.tracks.items[0].name,
            songPreview: response.tracks.items[0].preview_url,
            songAlbum: response.tracks.items[0].album.name,
            songArtist: response.tracks.items[0].album.artists[0].name,
        }
        console.log(songInfo)
        if (err) {
            return console.log('Error occurred: ' + err);
        }
    });
}
function searchMovies() {
    axios.get(`http://www.omdbapi.com/?t=${keyword}&apikey=trilogy`).then(
        function (response) {
            console.log(response.data.Title)
            const movieInformation = {
                Name: response.data.Title,
                IMDBrating: response.data.Ratings[0],
                RottenTomatos: response.data.Ratings[1],
                Country: response.data.Country,
                Language: response.data.Language,
                Plot: response.data.Plot,
                Actors: response.data.Actors,
            };
            console.log('helo this is after')
            console.log(movieInformation)
        }).catch(function (error) {
            if (error.response) {

                console.log(error.response.data);

            } else if (error.request) {

                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}
function searchConcerts() {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&apikey=${exports.ticketmaster.id}`).then(

        function (response) {
            const concertInformation = {
                date: response.data._embedded.events[0].dates.start.localDate,
                venue: response.data._embedded.events[0]._embedded.venues[0].name,
                location: response.data._embedded.events[0].dates.timezone, //MM/DD/YYYY
            };
            console.log(concertInformation)
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
            }
            else if (error.request) {
                console.log(error.request);
            }
            else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
};
if (operator === 'search-concerts') {

    searchConcerts();
}
if (operator === 'search-movies') {
    searchMovies();
}
if (operator === 'search-songs') {
    spotifySearch();
}
if (operator === 'feeling-lucky') {


    fs.readFile("randomtext.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data)
        let datasplit = data.split();
        console.log(datasplit);
        operator = datasplit[0];
        keyword = datasplit[1]
        console.log(datasplit[0])
        console.log(keyword)
        console.log(operator)
        if (operator === 'search-concerts') {
            console.log('searchin concerts')
            searchConcerts();
        }
        if (operator === 'search-movies') {
            searchMovies();
        }
        if (operator === 'search-songs') {
            spotifySearch();
        }
    })
};




// node liri.js feeling-lucky

// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

// It should run search-songs for "I Want it That Way," as follows the text in random.txt.

// Edit the text in random.txt to test out the feature for search-movies and search-concerts.