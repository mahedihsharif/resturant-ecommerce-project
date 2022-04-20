const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const MONGO_URL = require("./database/db");

app.use(cors());
app.use(morgan());
app.use(express.json());

MONGO_URL();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening port is runnig at ${port}`));
