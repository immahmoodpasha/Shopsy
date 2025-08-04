import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import sharedStyles from '../styles/authStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Signin = () => {
  const navigation = useNavigation();
  const [formData, setFormData] =useState({
      email: '',  
      password: '',
    });
    const isFormValid = formData.email.trim() !=='' &&  formData.password.trim() !=='';
    const handleInputChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
    };
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('https://bd1a05ac5838.ngrok-free.app/api/auth/login',formData);

    if (res.status === 200) {
      const token = res.data.data.jwtToken;
      await AsyncStorage.setItem('token', token);
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainApp' }],
      });
    }
  } catch (error) {
    console.error("login failed:", error);
    alert("Login Failed failed");
  }
};
  return (
    <View>
      <Icon name="box-open" size={50} color="#8404aeff" style={{ alignSelf: 'center', marginTop: 50 }} />
      <Text style={sharedStyles.heading}>Shopsy Login</Text>

      <View style={sharedStyles.container}>
       <AuthInput name="email" label="Email" placeholder="Enter your email" keyboardType="email-address" InputChange={handleInputChange}/>
        <AuthInput name="password" label="Password" placeholder="Enter your password" secureTextEntry InputChange={handleInputChange}/>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
        <AuthButton title="Sign In" onPress={(e) =>handleSubmit(e)} disabled={!isFormValid}/>
      </View>

      <Text style={styles.footer}>
        Don't have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    textAlign: 'right',
    marginTop: 10,
    color: '#8404aeff',
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    color: '#8404aeff',
  },
});

export default Signin;
