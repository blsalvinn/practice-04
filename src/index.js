import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider from './redux/Provider';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from './redux/store'
 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
      <Provider>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </PersistGate>
      </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
