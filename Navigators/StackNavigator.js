import { NavigationContainer } from '@react-navigation/native';
import Signup from '../screens/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Signin from '../screens/Signin';
import Categories from '../screens/Categories';
import Dashboard from '../screens/Dashboard';
import OrderHistory from '../screens/OrderHistory';
import OrderSummary from '../screens/OrderSummary'
import UserProfile from '../screens/UserProfile';



const StackNavigator = () => {
   const Stack = createNativeStackNavigator();
  return (
    
    <Stack.Navigator initialRouteName="OrderHistory" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Dashboard" component={Dashboard}/>
      <Stack.Screen name="OrderHistory" component={OrderHistory}/>
      <Stack.Screen name="OrderSummary" component={OrderSummary}/>
      <Stack.Screen name="UserProfile" component={UserProfile}/>

      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
}

export default StackNavigator;