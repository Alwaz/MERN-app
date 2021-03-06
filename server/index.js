import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRoutes from "./routes/post.js";

const CONNECTION_URL =
  "mongodb+srv://Alwaz:hello@test.pdqso.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// / this is an express app
const app = express();

// to create  middlewares
// api is passed through middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// middleware : agar pehle post he to yeah route chale
app.use("/posts", postRoutes);

// server starting at port 5000
app.listen(PORT);

console.log(`Server Running at ${PORT}`);
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
