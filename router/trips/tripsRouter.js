const router = require("express").Router();

const Trips = require("./tripsModel")

router.get("/", (req, res) => {
    Trips.getAllTrips()
      .then(trips => {
        res.status(200).json(trips);
      })
      .catch(error => {
        res
          .status(500)
          .json({ req, error, message: "error retrieving all posts" });
      });
  });

module.exports = router;

