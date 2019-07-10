const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const posts = require("./routes/api/posts");

const db = require("./config/keys").ATLAS_URI;

const uri =
  "mongodb+srv://root:root@cluster0-jip80.mongodb.net/test?retryWrites=true&w=majority"; //process.env.ATLAS_URI;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err + "test"));
//uri, { useNewUrlParser: true, useCreateIndex: true });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB connection established");
// });
require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());

app.get("/", (req, res) => res.send("Hello"));

//Use routes
app.use("/api/posts", posts);

app.listen(port, () => {
  console.log("Server is running on port: ${port}");
});
