const express = require("express");
const app = express();
const MONGO_URL = require("./database/db");

MONGO_URL();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening port is runnig at ${port}`));
