import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { store, persistor } from './redux/store.js';
import ModalProvider from './context/ModalProvider.jsx';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <ModalProvider>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </ModalProvider>
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
);
