const { add } = require('../arithmetica');

test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
    });

test('200009837390248 + 239048230948230948 is equal to 239248240785621200', () => {
    expect(add(200009837390248, 239048230948230948)).toBe(239248240785621200);
    });

test('0 + 0 is equal to 0', () => {
    expect(add(0, 0)).toBe(0);
    });