/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/';

// import Login from './src/pages/Login';
// import Screen from './src/pages/Screen';
// import Register from './src/pages/Register';
import AppMenu from './src/navigation/App';

const App = () => {
  return (
    <Provider store={store}>
      {/* <Login /> */}
      {/* <Screen /> */}
      {/* <Register /> */}
      <AppMenu />
    </Provider>
  );
};
export default App;
