import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { publicRoutes } from '../routes';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
// const screenOptions = ({ route }) => {
//   headerShown: false,
//   tabBarActiveTintColor: 'red',
// };
const options = ({ route }) => ({
  headerShown: false,
  tabBarActiveTintColor: '#de9076',
  tabBarInactiveTintColor: '#de9076',
  tabBarIcon: ({ focused, color, size }) => {
    let screen = route.name;
    let icoName = 'facebook-square';
    if (screen === 'Chat') {
      icoName = 'comments';
    } else if (screen === 'Login') {
      icoName = 'sign-in';
    } else if (screen === 'Register') {
      icoName = 'plus-circle';
    }
    return (
      <Icon
        name={icoName}
        style={{
          fontSize: 20,
          color: '#de9076',
        }}
      />
    );
  },
});

function UITab(props) {
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen name={'Screen'} component={publicRoutes.Screen} />
      <Tab.Screen name={'Chat'} component={publicRoutes.Chat} />
      <Tab.Screen name={'Login'} component={publicRoutes.Login} />
      <Tab.Screen name={'Register'} component={publicRoutes.Register} />
    </Tab.Navigator>
  );
}

export default UITab;
