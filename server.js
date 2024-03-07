const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(","),
};
app.use(cors(corsOptions));

app.get("/", (request, response) => {
  console.log("Hello World");
  response.send("Yes, my file js app is running!");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
