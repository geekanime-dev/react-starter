import React from 'react'
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import rootSaga from './sagas';

function App() {
  rootSaga(configureStore());
  return(
    <Provider store={configureStore()}>
        {/* Your App Here */}
    </Provider>
  )
}

export default App
