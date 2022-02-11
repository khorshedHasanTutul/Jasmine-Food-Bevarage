import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './responsive.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import ScroltoTop from './pages/ScroltoTop';
import AppContextProvider from './components/Store/AppContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScroltoTop />
    <AppContextProvider>
    <App />
    </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
