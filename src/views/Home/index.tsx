import React, { FunctionComponent, useState } from 'react';
import { IProduct } from 'types/products.types';

import { IHomeProps } from './types';
import { Container, SendButton } from './styles';
import Product from './components/product';

const Home: FunctionComponent<IHomeProps> = (props: IHomeProps) => {
  const { products, addToCart, placeOrder } = props;
  const [buttonPressed, setButtonPressed] = useState(false);

  const makeOrder = () => {
    setButtonPressed(true);
    placeOrder();
  }

  return (
    <Container>
      {products.map((product: IProduct) => (
        <Product product={product} key={product.id} addToCart={addToCart} resetCart={buttonPressed} />
      ))}
      <SendButton onClick={makeOrder}>Comprar</SendButton>
    </Container>
  );
};

export default Home;
