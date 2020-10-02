import { atom } from 'recoil';

interface IProduct {
  id: number;
  title: string;
  price: string;
  image: string;
};

export const cartState = atom<IProduct[]>({
  key: 'cartState',
  default: [],
});
