import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/configureStore';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Router>
                  <App />
              </Router>
          </ThemeProvider>
      </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
