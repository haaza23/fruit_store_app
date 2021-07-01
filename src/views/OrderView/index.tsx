import React, { FunctionComponent } from 'react';
import { Form, Field } from 'react-final-form'

import { IOrderViewProps } from './types';
import { Container } from './styles';

const OrderView: FunctionComponent<IOrderViewProps> = (props: IOrderViewProps) => {
  const { onSubmit } = props;

  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
              <label>Numero de pedido</label>
              <Field
                name="orderId"
                component="input"
                type="text"
              />
            </div>
            <button type="submit" disabled={submitting || pristine}>
              Consultar
            </button>
          </form>
        )}
      />
    </Container>
  );
};

export default OrderView;
