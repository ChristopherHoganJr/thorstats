const User = require("../models/User.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = {
  register: async (req, res) => {
    let exist = await User.findOne({ email: req.body.email });
    if (exist) {
      res.status(400).json({ error: "user already exists" });
    } else {
      User.create(req.body).then((user) => {
        const userToken = jwt.sign(
          {
            id: user._id,
          },
          process.env.SECRET_KEY
        );

        res
          .cookie("usertoken", userToken, process.env.SECRET_KEY, {
            httpOnly: true,
          })
          .json({ username: user.username, id: user._id });
      });
    }
  },
  login: async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
      return res.status(400).json({ error: "account does not exist" });
    }
    const correctPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!correctPassword) {
      return res.status(400).json({ error: "invalid email or password" });
    }

    const userToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.SECRET_KEY
    );

    res
      .cookie("usertoken", userToken, process.env.SECRET_KEY, {
        httpOnly: true,
      })
      .json({ username: user.username, id: user._id });
  },
  findPrivateContext: async (req, res) => {
    if (!req.cookies.usertoken) return res.status(400);
    let decoded = jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY);
    User.findById(decoded.id)
      .then((user) =>
        res.status(200).json({ username: user.username, id: user._id })
      )
      .catch((error) =>
        res.status(400).json({ errors: "you are not logged in" })
      );
  },
  logout: (req, res) => {
    res.clearCookie("usertoken").sendStatus(200);
  },
};
