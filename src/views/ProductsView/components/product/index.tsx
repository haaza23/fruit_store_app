import React, { FunctionComponent, useEffect, useState } from 'react';
import ReactLibComponent from 'fruitstore_react_lib';
import 'fruitstore_react_lib/dist/index.css'

import TicImg from "assets/tic.png";

import { IProductProps } from './types';
import { ProductContainer, PriceContainer, CustomButton, RowDiv, Quantity, SendButton, Tic } from './styles';

const Product: FunctionComponent<IProductProps> = (props: IProductProps) => {
  const { product, addToCart, resetCart } = props;
  const [itemsCount, setItemsCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    resetCart && setItemsCount(0);
  }, [resetCart]);
  
  const renderButton = (text: string, onClick: () => void) => (
    <CustomButton onClick={onClick}>{text}</CustomButton>
    )
    
    const modifyPoints = (isAdd: boolean) => {
      isAdd ? setItemsCount(itemsCount => itemsCount+1) : itemsCount > 0 && setItemsCount(itemsCount => itemsCount - 1);
  }

  const click = () => {
    addToCart(product.id, itemsCount);
    setIsClicked(true);
  }

  return (
    <ProductContainer>
      <ReactLibComponent producto={product.nombre} text={product.descripcion} precio={product.precio} />
      <RowDiv>
        <PriceContainer>
          {renderButton("-", () => modifyPoints(false))}
          <Quantity>{itemsCount}</Quantity>
          {renderButton("+", () => modifyPoints(true))}
        </PriceContainer>
        <SendButton disabled={isClicked} onClick={click}>Agregar</SendButton>
        {isClicked && 
          <Tic src={TicImg} />
        }
      </RowDiv>
    </ProductContainer>
  );
};

export default Product;
