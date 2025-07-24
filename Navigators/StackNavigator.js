import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/login';
import Signup from '../screens/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackNavigator = () => {
   const Stack = createNativeStackNavigator();
  return (
    
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default StackNavigator;