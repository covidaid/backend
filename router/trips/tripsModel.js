const db = require("../../database/dbConfig");

let selected = [];

function getAllTrips() {
  return db("trips");
}

function findById(id) {
  return db("trips")
    .where("trips.id", id)
    .first();
}

function getUsersPosts(id) {
  return db("trips").where("trips.user_id", id);
}

function add(newTrip) {
    const [id] = await db("trips").insert(newTrip, "id")

    return findById
}

function remove(id) {
    return db("trips")
      .where({ id })
      .del();
  }
  
  function update(id, changes) {
    return db("trips")
      .where({ id })
      .update(changes)
      .then(count => {
        if (count > 0) {
          return findById(id);
        } else {
          return null;
        }
      });
  }
  
