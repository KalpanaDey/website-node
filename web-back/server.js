const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const posts = require("./routes/api/posts");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");

const db = require("./config/keys").ATLAS_URI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err + "test"));

require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

//Use routes
app.use("/api/posts", posts);
app.use("/api/users", users);
app.use("/api/profile", profile);

app.listen(port, () => {
  console.log("Server is running on port: ${port}");
});
