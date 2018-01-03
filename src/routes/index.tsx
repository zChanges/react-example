import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import login from '../components/Login/login';
interface Props {
  children?: React.ReactNode;
}
export default class Router extends React.Component<Props> {
  render() {
    return (
      <Switch>
        <Route exact path="/app/login" component={login} />
      </Switch>
    );
  }
}
