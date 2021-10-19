import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import users from "./routes/userRoutes.js";

// Config env file
dotenv.config();

// Init server
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

// Listen server
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.TYPE} mode on port: ${PORT}!`.yellow
      .bold
  );
});
