// @flow

export const getSomething = () => 'Schopenhauer';

export const thought = () => {
  const something = exports.getSomething();
  return `${something} was a friend`;
};
