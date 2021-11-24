import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const CONNECTION_URL = `mongodb+srv://Alwaz:78fF17f@@test.pdqso.mongodb.net/test?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;

// / this is an express app
const app = express();

// server starting at port 5000
app.listen(PORT);

console.log("Server Running");
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect");
}