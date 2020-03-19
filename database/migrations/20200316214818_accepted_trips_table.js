exports.up = function(knex) {
  return knex.schema.createTable("accepted_trips", tbl => {
    tbl.increments();

    tbl
      .integer("senior_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    tbl
      .integer("volunteer_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    tbl
      .integer("trip_id")
      .references("id")
      .inTable("trips")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();

    tbl.boolean("accepted_by_senior");

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("accepted_trips");
};
