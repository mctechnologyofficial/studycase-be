const express = require("express");
const cors = require("cors");
let app = express();
let bodyParser = require("body-parser");

app.use(
  cors({
    origin: "*",
  })
);  
  
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();
require("./app/routes/routes")(app);

app.get("/", (req, res) => {
  res.json({ message: "Application is running." });
});

const model = require("./app/models");
model.sequelize
  .sync()
  .then(() => {
    console.log("Database connection established.");
  })
  .catch((err) => {
    console.log("Failed to connect db : " + err.message);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
