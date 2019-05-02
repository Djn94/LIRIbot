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
            console.log('this is a ticketmaster grab')
            // console.log(response);
            console.log(response.data)
            const concertInformation = {
                Name: response.name,
                location: response.location,
                date: moment(response.data) //MM/DD/YYYY

            };
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

// if (operator === 'search-movies') {
//     ;
//     if (keyword === "") {
//         keyword = "Mr. Nobody"
//     }
//     axios.get(`http://www.omdbapi.com/?t=${keyword}&apikey=trilogy`).then(
//         function (response) {
//             // console.log(response.data.imdbRating)
//             // console.log(response)
//             const response = response.data;
//             const movieInformation = {
//                 name: response.title,
//                 IMDBrating: response.IMDBrating,
//                 rottenTomatos: response.rottenTomatos,
//                 country: response.country,
//                 language: response.language,
//                 plot: response.plot,
//                 actors: response.actors,
//             };
//         }).catch(function (error) {
//             if (error.response) {

//                 console.log(error.response.data);

//             } else if (error.request) {

//                 console.log(error.request);
//             } else {
//                 console.log("Error", error.message);
//             }
//             console.log(error.config);
//         });
// }
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