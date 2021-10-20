import express from "express";
import {
  getUsers,
  getSpecificUser,
  updateUser,
  deleteUser,
  addUser,
  loginUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/").get(getUsers).post(addUser);
router.route("/:id").get(getSpecificUser).patch(updateUser).delete(deleteUser);

export default router;
