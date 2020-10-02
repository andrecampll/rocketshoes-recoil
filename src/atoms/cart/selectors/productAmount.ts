import { selector } from 'recoil';

import { cartState } from '../index';

export const productAmount = selector({
  key: 'productAmount',
  get: ({ get }) => {
    const cart = get(cartState);

    console.log(cart);

    // return cart.reduce((sumAmount: any, product) => {
    //   sumAmount[product.id] = product.amount;

    //   return sumAmount;
    // }, {});
  }
})
