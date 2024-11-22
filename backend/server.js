const app = require('./index')
const express = require('express')

app.use(express.json());
app.listen(4040, () => {
    console.log("server has started ......");
});
