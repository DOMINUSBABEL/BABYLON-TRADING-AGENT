const express = require('express');
const router = express.Router();
router.get('/performance', (req, res) => {
    res.json({ winRate: 58.3, totalProfit: 450.0 });
});
module.exports = router;