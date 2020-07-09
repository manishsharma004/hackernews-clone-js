import React, { StrictMode } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'common/redux/store'
import { Provider } from 'react-redux'
import { App } from './App'

export function ConnectedApp() {

  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </StrictMode>
  )
}

export default ConnectedApp