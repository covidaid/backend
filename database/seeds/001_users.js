exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    // .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          role: 1,
          id: 1,
          email: "ijd.irving@gmail.com",
          first_name: "irving",
          last_name: "duran",
          phone_number: "3472655234"
        },

        {
          role: 2,
          id: 2,
          email: "fmlcycling@gmail.com",
          first_name: "maria",
          last_name: "lopez",
          phone_number: "3472655234",
          profile_photo: "https://images.unsplash.com/photo-1498757581981-8ddb3c0b9b07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80",
          id_photo: "https://fakenotesplug.com/wp-content/uploads/2019/01/af4aab97-eca9-4c2a-8285-0f9fff03-600x378.jpg",
          verified: 0,
          zipcode: "11237",
          birth_date: "1949-11-29T00:00:00.000Z",
          wheelchair: 0,
          emergency_contact_first_name:"irving",
          emergency_contact_last_name: "duran",
          emergency_contact_phone_number: "3472655234",
          emergency_contact_relationship: "son"
        }
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'}
      ]);
    });
};
