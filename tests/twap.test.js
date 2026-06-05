const { sliceTWAPOrder } = require('../skills/order-execution/twap');

test('slices TWAP correctly into equal intervals', () => {
    const res = sliceTWAPOrder(10, 10, 60); // 10 units, 10 minutes, 60s intervals = 10 intervals
    expect(res.slices).toBe(10);
    expect(res.sliceSize).toBe(1);
    expect(res.intervalMs).toBe(60000);
});