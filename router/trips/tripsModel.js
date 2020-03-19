const db = require("../../database/dbConfig");

let selected = [];

module.exports = {
    add,
    remove,
    update,
    getUserPosts,
    getAllTrips,
    findById
  };

function getAllTrips() {
  return db("trips");
}

function findById(id) {
  return db("trips")
    .where("trips.id", id)
    .first();
}

function getUserPosts(id) {
  return db("trips").where("trips.user_id", id);
}

async function add(newTrip) {
    const [id] = await db("trips").insert(newTrip, "id")

    return findById(id)
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
  
