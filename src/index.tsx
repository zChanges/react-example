import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Page from './Page';
// import { Provider } from 'react-redux';
import './index.css';

ReactDOM.render(
  <div>
    <Page/>
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
