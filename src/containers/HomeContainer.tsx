import React, { FunctionComponent, useEffect } from 'react';

import useTypedSelector from 'hooks/useTypedSelector';
import Home from 'views/Home';
import { useDispatch } from 'react-redux';
import { onGetProducts } from 'redux/actions/products.actions.';

const HomeContainer: FunctionComponent = () => {
  const products = useTypedSelector((state) => state.products.items);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(onGetProducts());
  }, [dispatch]);
  

  console.log("Products", products);

  return (
  <Home />
  );
};

export default HomeContainer;
