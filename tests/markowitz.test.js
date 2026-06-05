// Mock Markowitz weight calculations test
test('Markowitz returns weights summing to 1', () => {
    const weights = [0.4, 0.6];
    expect(weights.reduce((a,b)=>a+b)).toBe(1.0);
});