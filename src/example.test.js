// @flow
import * as example from './example';

describe('Example tests', () => {
  const spies = {};
  Object.keys(example).map(x => (spies[x] = jest.spyOn(example, x)));

  test('getSomething', () => {
    expect(example.getSomething()).toEqual('Schopenhauer');
  });

  test('thought', () => {
    spies.getSomething.mockReturnValueOnce('Nietzsche');
    expect(example.thought()).toEqual('Nietzsche was a friend');
  });
});
