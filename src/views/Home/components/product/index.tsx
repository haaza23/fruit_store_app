import React, { FunctionComponent, useEffect, useState } from 'react';

import { IProductProps } from './types';
import { ProductTitle, ProductPrice, ProductContainer, PriceContainer, CustomButton, RowDiv, Quantity, SendButton } from './styles';

const Product: FunctionComponent<IProductProps> = (props: IProductProps) => {
  const { product, addToCart, resetCart } = props;
  const [itemsCount, setItemsCount] = useState(0)

  useEffect(() => {
    resetCart && setItemsCount(0);
  }, [resetCart]);
  
  const renderButton = (text: string, onClick: () => void) => (
    <CustomButton onClick={onClick}>{text}</CustomButton>
    )
    
    const modifyPoints = (isAdd: boolean) => {
      isAdd ? setItemsCount(itemsCount => itemsCount+1) : itemsCount > 0 && setItemsCount(itemsCount => itemsCount - 1);
  }

  return (
    <ProductContainer>
      <RowDiv>
        <ProductTitle>{product.nombre}</ProductTitle>
        <ProductPrice>${product.precio}</ProductPrice>
      </RowDiv>
      <RowDiv>
        <PriceContainer>
          {renderButton("-", () => modifyPoints(false))}
          <Quantity>{itemsCount}</Quantity>
          {renderButton("+", () => modifyPoints(true))}
        </PriceContainer>
        <SendButton onClick={() => addToCart(product.id, itemsCount)}>Agregar</SendButton>
      </RowDiv>
    </ProductContainer>
  );
};

export default Product;
