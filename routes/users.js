const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/register", (req, res) => {
    res.render("site/register");
});

router.post("/register", (req, res) => {
    User.create(req.body)
        .then(user => {
            res.redirect("/");
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Internal Server Error");
        });
});

module.exports = router;
