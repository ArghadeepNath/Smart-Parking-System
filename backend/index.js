// index.js

const express = require("express");
const cors = require("cors"); // Import CORS
const smartRouter = require('./router/smartRouter.js');

const app = express();

// Use the CORS middleware to handle CORS issues
app.use(cors());

// To get data from client
app.use(express.json());

// Set up routing
app.use("/api/v1/smart", smartRouter);



module.exports = app;
