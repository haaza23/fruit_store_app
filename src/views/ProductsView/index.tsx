import React, { FunctionComponent, useState } from 'react';
import { Form, Field } from 'react-final-form'

import { IProduct } from 'types/products.types';

import { IHomeProps } from './types';
import { Container, SendButton, Text } from './styles';
import Product from './components/product';

const ProductsView: FunctionComponent<IHomeProps> = (props: IHomeProps) => {
  const { products, addToCart, createCart, order, onSubmit } = props;
  const [buttonPressed, setButtonPressed] = useState(false);

  const makeOrder = () => {
    setButtonPressed(true);
    createCart();
  }

  return (
    <Container>
      <Text hasBorderBottom>Realizar pedido</Text>
      {products.map((product: IProduct) => (
        <Product product={product} key={product.id} addToCart={addToCart} resetCart={buttonPressed} />
      ))}
      <SendButton disabled={buttonPressed} onClick={makeOrder}>Hacer pedido</SendButton>
      {buttonPressed && 
        <>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <div style={{display: 'flex', flexDirection: 'column', paddingTop: '20px', marginBottom: '20px'}}>
                  <label>Direccion</label>
                  <Field
                    name="address"
                    component="input"
                    type="text"
                  />
                </div>
                <button type="submit" disabled={submitting || pristine}>
                  Comprar
                </button>
              </form>
            )}
          />
        </>
      }
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
