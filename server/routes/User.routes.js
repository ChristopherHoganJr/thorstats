const User = require("../controllers/User.controllers");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/user/register", User.register);
  app.post("/api/user/login", User.login);
};
