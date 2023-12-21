const express = require("express");
var cors = require('cors')
const app = express();
const bodyParser = require("body-parser");


app.use(cors())

const movie =  require("./routes/productRoute")


app.use(express.json());
app.use(bodyParser.json());
app.use("/api/v1",movie);
module.exports = app;