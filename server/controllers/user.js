import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const signUp = async (req, res) => {
  const data = req.body;
  const email = data.email.trim().toLowerCase();
  const hashed = await bycrypt.has(data.password, 10);
  try {
    const user = await models.User.create({
      username,
      email,
      password: hashed,
    });
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  } catch (err) {
    console.log(err);
    //if theres a problem creating account throw and error
    throw new Error("Error creating account");
  }
};
