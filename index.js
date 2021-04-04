const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// setup express server

const app = express();

app.use(express.json());

app.listen(5000, () => console.log("Server started on port 5000"));

app.use("/snippet", require("./routers/snippetRouter"));

// connect to mongodb aewYWlE0HiFX4tpd

mongoose.connect(process.env.MDB_CONNECT_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) return console.error(err);
  console.log("Connected to MongoDB");
});


//MongoTc

//mongodb+srv://MongoTc:<password>@cluster0.cpif3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
