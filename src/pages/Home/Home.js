import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { productsListState } from '../../atoms/products';
import { cartState } from '../../atoms/cart';
import { productAmount } from '../../atoms/cart/selectors/productAmount';
import { useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import Loader from 'react-loader-spinner';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import GridPlaceholder from '../../components/GridPlaceholder/GridPlaceholder';
import { ProductList } from './Home_Styles';
import ProductModal from '../../components/ProductModal/index';

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const [products, setProducts] = useRecoilState(productsListState);
  const setCart = useSetRecoilState(cartState);

  const toggleModal = useCallback((id) => {
    setIsOpenModal(!isOpenModal);
    setSelectedProductId(id);
  }, [isOpenModal]);

  // const products = useSelector(state => state.products);

  const amount = useRecoilValue(productAmount);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        loading: false,
      }));

      // dispatch(ProductActions.storeProducts(data));
      setProducts(data);
    }

    loadProducts();
  }, [dispatch, setProducts]);

  const handleAddProduct = useCallback(async (id) => {
    // dispatch(CartActions.addToCartRequest(id));
    const response = await api.get(`products/${id}`);

    setCart((oldCartList) => [
      ...oldCartList, response.data
    ]);
  }, [setCart]);

  return (
    <ProductList>
      {products === null ? (
        <GridPlaceholder repeatCount={6} />
      ) : (
        products.map(product => (
          <li key={product.id}>
            <figure>
              <img
                src={product.image}
                alt={product.title}
                onClick={() => toggleModal(product.id)}
              />
            </figure>
            <strong>{product.title}</strong>

            <div>
              <span>{product.priceFormatted}</span>

              <button type="button" onClick={() => handleAddProduct(product.id)}>
                {product.loading ? (
                  <Loader type="Oval" color="#FFF" height={16} width={24} />
                ) : (
                  <div>
                    <MdAddShoppingCart size={16} color="#FFF" />
                    {amount || 0}
                  </div>
                )}

                <span>ADD TO CART</span>
              </button>
            </div>
          </li>
        ))
      )}

      <ProductModal
        isOpen={isOpenModal}
        toggleModal={toggleModal}
        selectedProductId={selectedProductId}
        handleAddProduct={handleAddProduct}
      />
    </ProductList>
  );
}
