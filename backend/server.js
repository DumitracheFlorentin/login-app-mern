import express from "express";
import dotenv from "dotenv";

// Config env file
dotenv.config();

// Init server
const app = express();

// Middleware
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Listen server
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.TYPE} mode on port: ${PORT}!`
  );
});
