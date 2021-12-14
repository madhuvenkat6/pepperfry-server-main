const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user.model");

//auth with google;

router.get("/", passport.authenticate("google", { scope: ["profile"] }));

//googleauth callback we will add redirect later

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/products" }),
  (req, res) => {
    res.redirect("/products");
  }
);

module.exports = router;
