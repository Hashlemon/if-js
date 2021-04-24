const min = require('../src/js/index')

test('Min number between 2 and 3 is 2', () => {
    expect(min(2, 3)).toBe(2);
})
