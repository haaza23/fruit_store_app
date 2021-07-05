import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';

import useTypedSelector from 'hooks/useTypedSelector';
import ProductsView from 'views/ProductsView';
import { useDispatch } from 'react-redux';
import { onGetProducts } from 'redux/actions/products.actions.';
import { IOrder, IProductForm } from 'types/order.types';
import { onPlaceOrder } from 'redux/actions/user.actions';

export const PageContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const ProductsContainer: FunctionComponent = () => {
  const products = useTypedSelector((state) => state.products.items);
  const orderRecieved = useTypedSelector((state) => state.user.data);
  const dispatch = useDispatch();
  let productsOrder: IProductForm[] = [];

  const addToCart = (productId: number, quantity: number) => {
    const product: IProductForm = {
      id_producto: productId,
      cantidad: quantity,
    }
    productsOrder.push(product);
  }
  
  useEffect(() => {
    dispatch(onGetProducts());
    productsOrder = [];
  }, [dispatch]);

  const onSubmit = () => {
    const order: IOrder = {
      us_telegram: "test",
      estado: "en preparacion",
      productos: productsOrder,
      direccion: "calle falsa 123",
    }
    dispatch(onPlaceOrder(order));
  }

  console.log('ODER', orderRecieved);
  return (
    <PageContainer>
      {products && <ProductsView products={products} addToCart={addToCart} placeOrder={onSubmit} order={orderRecieved} />}
    </PageContainer>
  );
};

export default ProductsContainer;
