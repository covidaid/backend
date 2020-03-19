const router = require("express").Router();
const restricted = require("../auth/middleware/restrictedMiddleware");

const Trips = require("./tripsModel");

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

router.post("/", restricted, async (req, res) => {
  const trip = req.body;
  trip.user_id = req.decodedToken.id
  trip.completed = 0
  trip.canceled = 0
  try {
    const inserted = await Trips.add(trip);
    res.status(201).json(inserted);
  } catch (error) {
    res.status(500).json({
      error,
      message: "we ran into an error posting your trip"
    });
  }
});

router.put("/:id", restricted, (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  Trips.update(id, changes)
    .then(update => {
      res.status(200).json(update);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: error
      });
    });
});

router.delete("/:id", restricted, (req, res) => {
    Trips.remove(req.params.id)
    .then(del => {
      res
        .status(200)
        .json({ message: "the trip has successfully been deleted" })
        .end(del);
    })
    .catch(err => {
      res.status(500).json({ err, message: "this trip does not exist" });
    });
});

module.exports = router;
