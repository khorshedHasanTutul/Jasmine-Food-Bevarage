import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './responsive.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import ScroltoTop from './pages/ScroltoTop';
import CartContextProvider from './components/Store/CartContextProvider';
import AddressContextProvider from './components/Store/AddressContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScroltoTop />
    <AddressContextProvider>
    <CartContextProvider>
    <App />
    </CartContextProvider>
    </AddressContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
