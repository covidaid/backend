exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();

    tbl.integer("role", 128);

    tbl.string("password", 128);

    tbl
      .string("email", 128)
      .notNullable()
      .unique();

    tbl.string("first_name", 128).notNullable();

    tbl.string("last_name", 128).notNullable();

    tbl
      .string("phone_number", 128)
      .notNullable();

    tbl.string("vehicle_type", 128);

    tbl.string("vehicle_no", 128);

    tbl.string("id_photo");

    tbl.string("profile_photo");

    tbl.boolean("verified");

    tbl.integer("zipcode", 128);

    tbl.string("address");

    tbl.float("address_lon");

    tbl.float("address_lat");

    tbl.date("birth_date", 128);

    tbl.boolean("flu_symptoms");

    tbl.boolean("wheelchair");

    tbl.string("emergency_contact_first_name", 128);

    tbl.string("emergency_contact_last_name", 128);

    tbl.string("emergency_contact_phone_number", 128);

    tbl.string("emergency_contact_relationship", 128);

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
