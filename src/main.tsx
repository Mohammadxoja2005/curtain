import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import card from "./features/card";
import order from './features/order';
import products from './features/products';
import App from './App'
import './index.css'
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from "redux-persist";
import { HelmetProvider } from "react-helmet-async";

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const reducer = combineReducers({
  card: card,
  order: order,
  products: products
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer
})

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
