import { useNavigation } from '@react-navigation/native';
import React, { use } from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import LottieView from 'lottie-react-native';
import Logo1 from '../assets/Logo1.png'
import Logo2 from '../assets/Logo2.png'


const Home = () => {
  const navigate=useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      
      <View style={styles.container}>
        <View style={{display:'flex',flexDirection: 'row',justifyContent: 'center', alignItems: 'center',marginBottom: 20}}>
          <Image source={Logo2} style={{width: 240, height: 70}} />
        </View>
       
        <LottieView
  source={require('../assets/deliveryman.json')}
  autoPlay
  loop
  style={styles.image}
/>

        <Text style={styles.text}>Welcome to Rapidd</Text>

        <Text style={styles.tagline}>
          Your one stop solution for all the grocery needs
        </Text>

        <Pressable style={styles.button} onPress={() =>navigate.navigate('Signin')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
        <Text style={styles.copyText}>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 600,
    height: 350,
    marginRight:41
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#8404aeff'
  },
  tagline: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#555',
  },
  button: {
    backgroundColor: '#8404aeff',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 8,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  copyText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  mainheading: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#8404aeff',
    marginLeft: 8,
    
  },
});
