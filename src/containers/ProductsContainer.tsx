import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';

import useTypedSelector from 'hooks/useTypedSelector';
import ProductsView from 'views/ProductsView';
import { useDispatch } from 'react-redux';
import { onGetProducts } from 'redux/actions/products.actions.';
import { ICreateOrderProps, IOrder, IProductForm } from 'types/order.types';
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
  const [order, setOrder] = useState<IOrder>({us_telegram: null, estado: '', productos: [], direccion: ''});

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

  const onCreateCart = () => {
    const order: IOrder = {
      us_telegram: "test",
      estado: "en preparacion",
      productos: productsOrder,
    }
    setOrder(order);
  }
  
  const placeOrder = (props: ICreateOrderProps) => {
    const direccion = props.address;
    setOrder({...order, direccion});
    dispatch(onPlaceOrder(order));
  }

  return (
    <PageContainer>
      {products && 
        <ProductsView 
          products={products} 
          addToCart={addToCart} 
          createCart={onCreateCart} 
          order={orderRecieved} 
          onSubmit={placeOrder}
        />
      }
    </PageContainer>
  );
};

export default ProductsContainer;
