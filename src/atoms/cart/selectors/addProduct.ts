import { selector } from 'recoil';

import { cartState } from '../index';

export const addProductState = selector({
  key: 'addProductState',
  get: ({ get }) => {
    const cart = get(cartState);

    console.log(cart);
  }
})
