exports.up = function(knex) {
  return knex.schema.createTable("trips", tbl => {
    tbl
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();

    tbl.increments();

    tbl.string("description", 1000).notNullable();

    tbl.date("preferred_date").notNullable();

    tbl.time("preferred_time").notNullable();

    tbl.date("need_by_date")

    tbl.boolean("completed");

    tbl.boolean("cancelled");

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trips");
};
