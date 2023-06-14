import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { publicRoutes } from '../routes';
import UITab from './UITab';

const Stack = createNativeStackNavigator();

function AppMenu(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UITab" screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Screen'} component={publicRoutes.Screen} />
        <Stack.Screen name={'Login'} component={publicRoutes.Login} />
        <Stack.Screen name={'Register'} component={publicRoutes.Register} />
        <Stack.Screen name={'Chat'} component={publicRoutes.Chat} />
        <Stack.Screen name={'UITab'} component={UITab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppMenu;
