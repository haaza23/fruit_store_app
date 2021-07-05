import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Logo from 'assets/image.jpg';

export const PageContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CustomButton = styled.a`
  margin: 0;
  padding: 15px;
  border-radius: 6px;
  font: 20px/10px 'Arial';
  background: #724eab;
  align-self: center;
  cursor: pointer;
  color: white;
  margin-top: 20px;
  text-decoration: none;
  width: 180px;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 512px;
  border-radius: 6px;
`;

export const Text = styled.p`
  font: normal normal bold 20px/10px 'Arial';
`;

const HomeContainer: FunctionComponent = () => {

  return (
    <PageContainer>
      <Text>¡Bienvenido a la fruit store!</Text>
      <Image src={Logo} alt="logo" />
      <CustomButton href='/productos'>Hacer pedido</CustomButton>
      <CustomButton href='/pedido'>Seguimiento pedido</CustomButton>
    </PageContainer>
  );
};

export default HomeContainer;
