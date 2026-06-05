const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 4004;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock DB path for trading history
const HISTORY_FILE = path.join(__dirname, 'history.json');

app.get('/api/positions', (req, res) => {
  res.json([
    { symbol: "BTCUSDT", side: "LONG", entryPrice: 67200, markPrice: 68150, leverage: 10, liquidationPrice: 61000, margin: 500, pnl: 70.6 },
    { symbol: "ETHUSDT", side: "SHORT", entryPrice: 3500, markPrice: 3420, leverage: 5, liquidationPrice: 4150, margin: 300, pnl: 34.2 }
  ]);
});

app.get('/api/history', (req, res) => {
  if (!fs.existsSync(HISTORY_FILE)) {
    return res.json([
      { id: 1, date: "2026-06-01", type: "LONG", symbol: "BTCUSDT", profit: 150, status: "CLOSED" },
      { id: 2, date: "2026-06-03", type: "SHORT", symbol: "SOLUSDT", profit: -45, status: "CLOSED" }
    ]);
  }
  fs.readFile(HISTORY_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Read error' });
    res.json(JSON.parse(data || '[]'));
  });
});

app.listen(PORT, () => {
  console.log(`Trading Agent running at http://localhost:${PORT}`);
});