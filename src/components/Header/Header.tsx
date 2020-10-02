import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart } from './Header_Styles';
import logo from '../../assets/images/logo.svg';
import { useRecoilValue } from 'recoil';
import { cartAmount } from '../../atoms/cart/selectors/cartAmount';

export default function Header() {
  const cartSize = useRecoilValue(cartAmount);

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
