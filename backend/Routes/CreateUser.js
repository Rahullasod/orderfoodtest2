const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtSecret = "MyNameisRahulLasodmakingorderfoodappusigMERNstack";

router.post("/createuser", [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
    body('phonenumber', 'Phone number must be 10 digits').isNumeric().isLength({ min: 10, max: 10 })]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt);


        try {
            // Await User creation
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPassword,
                phonenumber: req.body.phonenumber
            });

            res.json({ success: true });
        } catch (error) {
            console.error("Error in /createuser route:", error.message); // Log error details
            res.status(500).json({ success: false, error: error.message }); // Return error message
        }
    });

router.post("/loginuser", [
    body('email', 'Email is incorrect').isEmail(),
    body('password', 'Password is incorrect').isLength({ min: 5 })],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;
        try {
            // Await User login
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Email is incorrect or Does not exist" });
            }

            const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
            
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Password is incorrect" });
            }

            const data = {
                user: {
                    id: userData.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret);
            return res.json({ success: true, authToken:authToken });
        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    });

module.exports = router;
