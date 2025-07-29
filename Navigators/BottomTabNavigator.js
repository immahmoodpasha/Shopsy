// Navigators/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import OrderHistory from '../screens/OrderHistory';
import Profile from '../screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Categories from '../screens/Categories';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle:{
            backgroundColor:"#8404aeff",
        },
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: { fontSize: 12,color:"white" },
        tabBarIcon: ({ size, focused }) => {
          let iconName;
          if (route.name === 'Categories') {
            iconName = focused ? 'apps' : 'apps-outline';
          } else if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'OrderHistory') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={"white"} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="OrderHistory" component={OrderHistory} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
