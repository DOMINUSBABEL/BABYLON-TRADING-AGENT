CREATE TABLE IF NOT EXISTS trade_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    symbol TEXT NOT NULL,
    side TEXT NOT NULL,
    leverage INTEGER NOT NULL,
    entry_price REAL NOT NULL,
    exit_price REAL,
    realized_pnl REAL,
    kelly_fraction REAL,
    status TEXT DEFAULT 'open',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS risk_settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    max_leverage INTEGER DEFAULT 10,
    kelly_fraction REAL DEFAULT 0.5,
    max_drawdown_stop REAL DEFAULT 10.0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);