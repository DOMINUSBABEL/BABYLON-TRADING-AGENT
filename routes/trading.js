const express = require('express');
const crypto = require('crypto');
const router = express.Router();

// Generate Binance Futures API payload signature (HMAC SHA256)
function generateBinanceSignature(queryString, apiSecret) {
    return crypto
        .createHmac('sha256', apiSecret)
        .update(queryString)
        .digest('hex');
}

router.post('/order', (req, res) => {
    // Generate signature locally to ensure data security
    const timestamp = Date.now();
    const query = `symbol=${req.body.symbol}&side=${req.body.side}&type=LIMIT&quantity=${req.body.qty}&price=${req.body.price}&timestamp=${timestamp}`;
    const signature = generateBinanceSignature(query, 'mock_secret');
    res.json({ success: true, payload: query, signature });
});

module.exports = router;