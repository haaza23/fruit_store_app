import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';

import useTypedSelector from 'hooks/useTypedSelector';
import Home from 'views/Home';
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
  const dispatch = useDispatch();
  let productsOrder: IProductForm[] = [];

  const addToCart = (productId: number, quantity: number) => {
    const product: IProductForm = {
      id: productId,
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
      precio: null,
      us_telegram: null,
      direccion: "calle falsa 123",
      estado: "en preparacion",
      productos: productsOrder,
    }
    dispatch(onPlaceOrder(order));
  }

  return (
    <PageContainer>
      {products && <Home products={products} addToCart={addToCart} placeOrder={onSubmit}/>}
    </PageContainer>
  );
};

export default ProductsContainer;
