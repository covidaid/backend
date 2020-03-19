exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("accepted_trips")
    // .del()
    .then(function() {
      // Inserts seed entries
      return knex("accepted_trips").insert([
        {
          id: 1,
          senior_id: 2,
          volunteer_id: 1,
          trip_id: 1,
          accepted_by_senior: 0
        },
        {
          id: 2,
          senior_id: 2,
          volunteer_id: 1,
          trip_id: 2,
          accepted_by_senior: 0
        },
        {
          id: 3,
          senior_id: 2,
          volunteer_id: 1,
          trip_id: 3,
          accepted_by_senior: 0
        }
      ]);
    });
};
