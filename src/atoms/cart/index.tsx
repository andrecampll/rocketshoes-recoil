import { atom } from 'recoil';

interface IProduct {
  id: number;
  title: string;
  price: string;
  image: string;
  amount: number;
};

export const cartState = atom<IProduct[]>({
  key: 'cartState',
  default: [],
});
