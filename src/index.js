import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { GlobalStyle,Container } from './GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="vin-decoder">
      <GlobalStyle />
      <Container>
        <App />
      </Container>
    </BrowserRouter>
  </React.StrictMode>
);
