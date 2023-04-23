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
          .json({
            msg: "success!",
            currentUser: { name: user.name, email: user.email },
          });
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
      .json({ name: user.name, email: user.email });
  },
};
