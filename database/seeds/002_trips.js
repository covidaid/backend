exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("trips")
    // .del()
    .then(function() {
      // Inserts seed entries
      return knex("trips").insert([
        {
          id: 1,
          user_id: 2,
          description: "need my medication picked up",
          preferred_date: "2020-03-23T00:00:00.000Z",
          preferred_time: "11:00:00",
          need_by_date: "2020-03-30T00:00:00.000Z",
          completed: 0,
          cancelled: 0
        },
        {
          id: 2,
          user_id: 2,
          description: "need my dog walked",
          preferred_date: "2020-03-23T00:00:00.000Z",
          preferred_time: "11:00:00",
          completed: 0,
          cancelled: 0
        },
        {
          id: 3,
          user_id: 2,
          description:
            "need groceries: please help me go to the supermarket to buy what i need. i need eggs, bread, chicken breast",
          need_by_date: "2020-03-30T00:00:00.000Z",
          preferred_date: "2020-03-23T00:00:00.000Z",
          preferred_time: "11:00:00",
          completed: 0,
          cancelled: 0
        }
      ]);
    });
};
