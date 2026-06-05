const { calculateRSI } = require('../skills/market-analysis/rsi');
test('RSI returns 50 on flat closes input list', () => {
    const closes = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    expect(calculateRSI(closes)).toBe(50.0);
});