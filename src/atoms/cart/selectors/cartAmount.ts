import { selector } from 'recoil';

import { cartState } from '../index';

export const cartAmount = selector({
  key: 'cartAmount',
  get: ({ get }) => {
    const cart = get(cartState);

    return cart.length;
  }
})
