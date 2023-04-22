/** @jsx jsx */
import { jsx } from '@emotion/react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import configureStore from './store/configure-store';
import App from './App';
import { Provider } from 'react-redux';

const history = createBrowserHistory();
const store = configureStore(history);
const rootEl = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  rootEl,
);
