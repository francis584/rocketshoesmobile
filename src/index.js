import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import Routes from './routes';
import store from './store';
import NavigationService from './services/navigation';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <Routes ref={nav => NavigationService.setNavigator(nav)} />
    </Provider>
  );
}

export default App;
