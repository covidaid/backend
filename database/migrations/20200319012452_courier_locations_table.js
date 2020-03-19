exports.up = function(knex) {
  return knex.schema.createTable("courier_locations", tbl => {
    tbl.increments();

    tbl
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();

    tbl.integer("zipcode").notNullable();

    tbl.string("city", 128);

    tbl.string("area", 128);

    tbl.string("country");

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("courier_locations");
};
