import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Signup from '../screens/Signup';
import Signin from '../screens/Signin';
import BottomTabNavigator from './BottomTabNavigator';
import Cart from '../screens/Cart';
import OrderSummary from '../screens/OrderSummary'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="MainApp" component={BottomTabNavigator} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="OrderSummary" component={OrderSummary} />
    </Stack.Navigator>
  );
};

export default StackNavigator;