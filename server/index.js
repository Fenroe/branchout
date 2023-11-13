require("dotenv").config();
const express = require("express");
const apiRouter = require("./routes");
const cors = require("cors");

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
