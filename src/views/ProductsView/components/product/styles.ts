import styled from 'styled-components';

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const CustomButton = styled.div`
  margin: 0;
  padding: 15px;
  border-radius: 6px;
  font: 20px/10px 'Arial';
  background: #d6d6d6;
  align-self: center;
  cursor: pointer;
`;

export const Quantity = styled.p`
  font: normal normal bold 18px/20px 'Arial';
  padding: 0 20px;
`;

export const ProductTitle = styled.p`
  font: normal normal bold 18px/20px 'Arial';
`;

export const ProductPrice = styled.p`
  font: 14px/20px 'Arial';
  flex: 1;
  text-align: right;
  align-self: center;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SendButton = styled.div`
  margin: 0;
  padding: 15px;
  border-radius: 6px;
  font: 20px/10px 'Arial';
  background: ${({ disabled }: { disabled?: boolean }) =>
    disabled ? `gray` : '#724eab'};
  align-self: center;
  cursor: pointer;
  color: white;
  pointer-events: ${({ disabled }: { disabled?: boolean }) =>
    disabled && `none`};
`;

export const Tic = styled.img`
  width: 10%;
`;