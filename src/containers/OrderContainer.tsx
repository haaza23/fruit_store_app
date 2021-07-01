import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import OrderView from 'views/OrderView';
import { useDispatch } from 'react-redux';
import { ICheckOrderProps } from 'types/order.types';
import { onGetOrderStatus } from 'redux/actions/user.actions';

export const PageContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;



const OrderContainer: FunctionComponent = () => {
  const dispatch = useDispatch();

  const onSubmit = (formData: ICheckOrderProps) => dispatch(onGetOrderStatus(formData));

  return (
    <PageContainer>
      <OrderView onSubmit={onSubmit} />
    </PageContainer>
  );
};

export default OrderContainer;
