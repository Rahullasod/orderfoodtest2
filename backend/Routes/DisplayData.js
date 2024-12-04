const express = require("express");
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        if (global.food_items && global.food_category) {
           
            res.json([
                global.food_items, 
                global.food_category  
            ]);
        } else {
           
            res.status(404).json({ error: "Data not found" });
        }
    } catch (error) {
        console.error("Error in /foodData route:", error.message);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;


