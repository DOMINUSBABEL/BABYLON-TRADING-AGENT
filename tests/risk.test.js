const { calculateLiquidationPrice } = require('../skills/futures-risk/liquidation');
test('calculates correct LONG liquidation price', () => {
    const price = calculateLiquidationPrice(100, 10, 'LONG', 0.005);
    expect(price).toBe(90.5); // 100 * (1 - 0.1 + 0.005)
});