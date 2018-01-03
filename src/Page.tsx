import * as React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login/login';
import App from './App';
export default () => (
  <Router>
      <Switch>
          <Route exact path="/" render={() => <Redirect to="/app" push />} />        
          <Route path="/app" component={App} />
          <Route path="/login" component={Login} />
      </Switch>
  </Router>
);
