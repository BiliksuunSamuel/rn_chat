/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {persistor, store} from './src/app/store';
import {Provider as ThemeProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import React from 'react';
import theme from './src/constants/theme';
import {PersistGate} from 'redux-persist/integration/react';

AppRegistry.registerComponent(appName, () => () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
));
