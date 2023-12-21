const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    adult: {
        type: Boolean,
        default: false
    },
    backdrop_path: String,
    original_language: String,
    original_title: String,
    overview: String,
    popularity: Number,
    poster_path: String,
    release_date: Date,
    title: {
        type: String,
    },
    video: {
        type: Boolean,
        default: false
    },
    vote_average: Number,
    vote_count: Number,
    top_cast: [
        {
            name: {
                type: String,
            },
            age: {
                type: Number,
                default: null
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Movie", movieSchema);
