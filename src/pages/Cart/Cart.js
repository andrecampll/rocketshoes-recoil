import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete, MdRemoveShoppingCart } from 'react-icons/md';
import { Container, ProductTable, Total, EmptyCart, StartShopping } from './Cart_Styles';
import { useRecoilValue } from 'recoil';
import { cartState } from '../../atoms/cart';

export default function Cart() {
  const cart = useRecoilValue(cartState);

  return (
    <Container>
      {cart.length === 0 ? (
        <EmptyCart>
          <MdRemoveShoppingCart />

          <div>
            <h2>Oops...</h2>
            <p>Looks like your shopping cart is empty!</p>
            <StartShopping to="/">Start Shopping</StartShopping>
          </div>
        </EmptyCart>
      ) : (
        <>
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>PRODUCT</th>
                <th>AMOUNT</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(product => (
                <tr key={product.id}>
                  <td>
                    <figure>
                      <img src={product.image} alt={product.title} />
                    </figure>
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button" onClick={() => {}}>
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input type="text" readOnly value={product.amount} />
                      <button type="button" onClick={() => {}}>
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{product.subtotal}</strong>
                  </td>
                  <td>
                    <button type="button" onClick={() => {}}>
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>

          <footer>
            <button type="submit">Proceed to Checkout</button>
            <Total>
              <span>TOTAL:</span>
              {/* <strong>{total}</strong> */}
            </Total>
          </footer>
        </>
      )}
    </Container>
  );
}
