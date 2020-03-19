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

    tbl.date("preferred_date")

    tbl.time("preferred_time")

    tbl.date("need_by_date")

    tbl.boolean("completed");

    tbl.boolean("canceled");

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trips");
};
