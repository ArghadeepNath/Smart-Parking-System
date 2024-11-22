const express = require("express");

const smartRouter = express.Router()

const smartControllers = require("./../controller/smartControllers.js")

smartRouter.route("/")
    .get(smartControllers.getInfo)
    // .post(smartControllers.createInfo)

smartRouter.route("/createInfo")
    .post(smartControllers.createInfo)

module.exports = smartRouter;
