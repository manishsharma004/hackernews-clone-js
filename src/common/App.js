import React, { StrictMode } from 'react'
import './App.scss'
import Routes from 'common/routes/Routes';
import { Provider } from 'react-redux';
import { store, persistor } from 'common/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({location=''}) {

  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="App">
              <Routes location={location}/>
          </div>
        </PersistGate>
      </Provider>
    </StrictMode>
  );
}