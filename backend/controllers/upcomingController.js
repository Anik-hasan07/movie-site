const Upcoming = require("../models/upcoming");

exports.getAllUpcoming = async(req, res) => {
    try {
      const movies = await Upcoming.find()
      res.status(200).json({
          success: true,
          movies,
         
        });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
}

exports.createUpcoming = async (req, res) => {
    try {
        const newMovie = await Upcoming.create(req.body);
        res.status(201).json({ message: "Movie created successfully", newMovie });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

   
}