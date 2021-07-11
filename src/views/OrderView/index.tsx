import React, { FunctionComponent } from 'react';
import { Form, Field } from 'react-final-form'

import { IOrderViewProps } from './types';
import { Container, Text, SendButton } from './styles';

const OrderView: FunctionComponent<IOrderViewProps> = (props: IOrderViewProps) => {
  const { onSubmit, order } = props;

  return (
    <Container>
      <Text hasBorderBottom>Consultar pedido</Text>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div style={{display: 'flex', flexDirection: 'column', paddingTop: '20px', marginBottom: '0px'}}>
              <Text>Numero de pedido</Text>
              <Field
                name="orderId"
                component="input"
                type="text"
              />
            </div>
            <SendButton type="submit" disabled={submitting || pristine}>
              Consultar
            </SendButton>
          </form>
        )}
      />
      {order && 
      <div style={{paddingTop: '20px'}}>
        <Text>El pedido se encuentra en estado: {order.estado}</Text>
        <Text>El precio final del pedido es de: ${order.precio}</Text>
      </div>
      }
    </Container>
  );
};

export default OrderView;
