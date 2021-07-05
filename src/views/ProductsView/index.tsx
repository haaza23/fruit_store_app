import React, { FunctionComponent, useState } from 'react';
import { IProduct } from 'types/products.types';

import { IHomeProps } from './types';
import { Container, SendButton, Text } from './styles';
import Product from './components/product';

const ProductsView: FunctionComponent<IHomeProps> = (props: IHomeProps) => {
  const { products, addToCart, placeOrder, order } = props;
  const [buttonPressed, setButtonPressed] = useState(false);

  const makeOrder = () => {
    setButtonPressed(true);
    placeOrder();
  }

  return (
    <Container>
      <Text hasBorderBottom>Realizar pedido</Text>
      {products.map((product: IProduct) => (
        <Product product={product} key={product.id} addToCart={addToCart} resetCart={buttonPressed} />
      ))}
      <SendButton onClick={makeOrder}>Comprar</SendButton>
      {order && 
      <>
        <Text>Su pedido se registró exitosamente, puede consultar el estado con el numero de id: {order.id}</Text>
        <Text>El precio final es de: ${order.precio}</Text>
      </>
      }
    </Container>
  );
};

export default ProductsView;
