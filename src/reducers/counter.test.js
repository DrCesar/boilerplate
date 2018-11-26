import counter from './counter';

test('counter inc', () => {
  expect(
    counter(1, {
      type: 'INC_NUM',
    }),
  ).toBe(2);
});

test('counter dec', () => {
  expect(
    counter(2, {
      type: 'DEC_NUM',
    }),
  ).toBe(1);
});
