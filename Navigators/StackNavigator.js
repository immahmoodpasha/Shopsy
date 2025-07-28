// Navigators/StackNavigator.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Signup from '../screens/Signup';
import Signin from '../screens/Signin';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="MainApp" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
