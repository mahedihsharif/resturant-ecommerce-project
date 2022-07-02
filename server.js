const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const MONGO_URL = require("./database/db");
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");

// middleware
app.use(cors());
app.use(morgan());
app.use(express.json());

MONGO_URL();

app.get("/", (req, res) => {
  res.send("Hitting my server");
});

app.use("/api/auth/", authRoutes);
app.use("/api/category/", categoryRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening port is runnig at ${port}`));
