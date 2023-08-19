import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import 'normalize.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-06-phonebook">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
