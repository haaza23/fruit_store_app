import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Text = styled.p`
  font: normal normal bold 20px/10px 'Arial';
  margin: 0;
  padding: 0 0 20px 0;
  border-bottom: ${({ hasBorderBottom }: { hasBorderBottom?: boolean }) =>
    hasBorderBottom && `1px solid black`};
`;

export const SendButton = styled.button`
  margin: 0;
  padding: 15px;
  border-radius: 6px;
  font: 20px/10px 'Arial';
  background: #724eab;
  align-self: center;
  cursor: pointer;
  color: white;
  margin-top: 20px;
`;
