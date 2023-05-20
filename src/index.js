import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Quotes from './quote';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import quoteReducer from './quoteReducer';
import { StyledEngineProvider } from '@mui/material/styles';

const store = createStore(quoteReducer);




ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <React.StrictMode>
        <Quotes />
      </React.StrictMode>
    </Provider>
  </StyledEngineProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();