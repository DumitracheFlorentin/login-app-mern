import express from "express";
import {
  getUsers,
  getSpecificUser,
  updateUser,
  deleteUser,
  addUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.route("/").get(getUsers).post(addUser);
router.route("/:id").get(getSpecificUser).patch(updateUser).delete(deleteUser);

export default router;
