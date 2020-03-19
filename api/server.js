const cors = require("cors");
const express = require("express");
const helmet = require("helmet");

const authRouter = require("../router/auth/authRouter");
const usersRouter = require("../router/users/usersRouter");
const tripRouter = require("../router/trips/tripsRouter")
// const postRidesRouter = require("../router/postRide/postsRidesRouter");
// const bookRidesRouter = require("../router/bookRide/bookRidesRouter");


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/trips", tripRouter);
// server.use("/api/booked", bookRidesRouter);


server.get("/", (req, res) => {
  res.status(200).json({ api: "Api running" });
});

module.exports = server;
