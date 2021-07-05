import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch, SwitchProps } from 'react-router-dom';

import ProductsContainer from 'containers/ProductsContainer';
import OrderContainer from 'containers/OrderContainer';
import HomeContainer from 'containers/HomeContainer';

const App: FunctionComponent<SwitchProps> = () => {

  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/productos" component={ProductsContainer} />
      <Route path="/pedido" component={OrderContainer} />
      <Route path="/home" component={HomeContainer} />
    </Switch>
  );
}

export default App;
