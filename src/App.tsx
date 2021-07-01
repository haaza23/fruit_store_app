import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch, SwitchProps } from 'react-router-dom';

import ProductsContainer from 'containers/ProductsContainer';
import OrderContainer from 'containers/OrderContainer';

const App: FunctionComponent<SwitchProps> = () => {

  return (
    <Switch>
      <Redirect exact from="/" to="/productos" />
      <Route path="/productos" component={ProductsContainer} />
      <Route path="/pedido" component={OrderContainer} />
    </Switch>
  );
}

export default App;
