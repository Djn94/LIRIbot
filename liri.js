const axios = require("axios");
//const inquirer = require("inquirer");
require("dotenv").config();
const keys = require("./keys.js");
//const spotify = new Spotify(keys.spotify);
const operator = process.argv[2];
let keyword = process.argv[3];
exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};
exports.ticketmaster = {
    id: process.env.ticketmaster_ID,
    secret: process.env.ticketmaster
}
console.log('Welcome to LIRIbot. Please enter your search query under the following format: search-(concerts/songs/movies) "keyword".')
//console.log(exports.ticketmaster.id)




if (operator === 'search-concerts') {

    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&apikey=${exports.ticketmaster.id}`).then(

        function (response) {
            const concertInformation = {
                date: response.data._embedded.events[0].dates.start.localDate,
                venue: response.data._embedded.events[0]._embedded.venues[0].name,                //     date: moment(response.data) //MM/DD/YYYY
                location: response.data._embedded.events[0].dates.timezone,
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
if (operator === 'search-movies') {
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

                // } else if (error.request) {

                //     console.log(error.request);
                // } else {
                //     console.log("Error", error.message);
                // }
                // console.log(error.config);
                // });
            }
        })
}
// if (operator === 'search-songs') { };
// axios.get(`SPOTIFY_API_URL`).then(
//     function (response) {
//         console.log(response);
//         const songInformation = {
//             name: response.name,
//             previewLink: s,//preview link from spotify api,
//             album: response.album,

//         };
//     }).catch(function (error) {
//         if (error.response) {
//             console.log(error.response.data);
//         } else if (error.request) {
//             console.log(error.request);
//         } else {
//             console.log("Error", error.message);
//         }
//         console.log(error.config);
//     });


// if (operator === 'feeling-lucky') { };



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