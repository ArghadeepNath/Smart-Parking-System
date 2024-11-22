const express = require("express");
const fs = require("fs")
const app = express();

const Smart = require("../models/smartModel.js");
const Apifeatures = require("../utils/ApiFeatures.js");

exports.getInfo = async (req, res) => {
    try {

        const features = new Apifeatures(Smart.find(), req.query)
            .filter().sort().limitFields().paginate()

        let smarts = await features.query;

        res.status(200).json({
            status: "success",
            length: smarts.length,
            data: {
                smarts: smarts
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.createInfo = async (req, res) => {
    try {
        const smart = await Smart.create(req.body)
        // console.log(movie);
        res.status(201).json({
            status: "success",
            data: {
                smart: smart
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}
