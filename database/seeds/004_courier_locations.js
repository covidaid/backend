exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("courier_locations")
    // .del()
    .then(function() {
      // Inserts seed entries
      return knex("courier_locations").insert([
        {
          id: 1,
          user_id: 1,
          zipcode: 11206,
          area: "brooklyn",
          city: "new york",
          country: " United States Of America"
        },
        {
          id: 2,
          user_id: 1,
          zipcode: 11207,
          area: "brooklyn",
          city: "new york",
          country: " United States Of America"
        },
        {
          id: 3,
          user_id: 1,
          zipcode: 11221,
          area: "brooklyn",
          city: "new york",
          country: " United States Of America"
        },
        {
          id: 4,
          user_id: 1,
          zipcode: 11237,
          area: "brooklyn",
          city: "new york",
          country: " United States Of America"
        },
        {
          id: 5,
          user_id: 1,
          zipcode: 11211,
          area: "brooklyn",
          city: "new york",
          country: " United States Of America"
        },
        {
          id: 6,
          user_id: 1,
          zipcode: 11206,
          area: "brooklyn",
          city: "new york",
          country: " United States Of America"
        }
      ]);
    });
};
