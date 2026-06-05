const express = require('express');
const router = express.Router();
router.post('/order', (req, res) => {
    res.json({ success: true, message: "Order processed locally" });
});
module.exports = router;