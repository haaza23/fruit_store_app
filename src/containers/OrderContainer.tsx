import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import OrderView from 'views/OrderView';
import { ICheckOrderProps } from 'types/order.types';
import { onGetOrderStatus } from 'redux/actions/user.actions';
import useTypedSelector from 'hooks/useTypedSelector';

export const PageContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const OrderContainer: FunctionComponent = () => {
  const dispatch = useDispatch();

  const onSubmit = (formData: ICheckOrderProps) => dispatch(onGetOrderStatus(formData));
  const orderRecieved = useTypedSelector((state) => state.user.data);

  return (
    <PageContainer>
      <OrderView onSubmit={onSubmit} order={orderRecieved} />
    </PageContainer>
  );
};

export default OrderContainer;
