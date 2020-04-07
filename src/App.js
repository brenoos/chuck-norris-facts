import React from 'react';
import { Provider } from 'react-redux';
import { Main } from './pages/Main';
import store from './store';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Main />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
