import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart } from './Header_Styles';
import logo from '../../assets/images/logo.svg';
import { useRecoilValue } from 'recoil';
import { cartState } from '../../atoms/cart';

export default function Header() {
  const cart = useRecoilValue(cartState);

  const cartSize = cart.length;

  return (
    <Container>
      <Link to="/">
        <figure>
          <img src={logo} alt="RocketShoes" />
        </figure>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My Cart</strong>
          <span>{cartSize === 1 ? `${cartSize} product` : `${cartSize} products`}</span>
        </div>
        <MdShoppingCart size={36} color="#FFF" />
        <span>{cartSize}</span>
      </Cart>
    </Container>
  );
}
