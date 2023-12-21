const Movie = require("../models/movieModel");


exports.getAllPopular = async(req, res) => {
      try {
        const movies = await Movie.find()
        res.status(200).json({
            success: true,
            movies,
           
          });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



exports.createMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(201).json({ message: "Movie created successfully", movie: newMovie });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

   
}