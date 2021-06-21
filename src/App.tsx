import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch, SwitchProps } from 'react-router-dom';

import HomeContainer from 'containers/HomeContainer';

const App: FunctionComponent<SwitchProps> = () => {

  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={HomeContainer} />
    </Switch>
  );
}

export default App;
