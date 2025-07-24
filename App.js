import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import StackNavigator from './Navigators/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer> 
      <StackNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
