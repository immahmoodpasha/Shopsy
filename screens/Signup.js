import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import sharedStyles from '../styles/authStyles';
import axios from 'axios';

const Signup = () => {
  const navigation = useNavigation();
  const [formData, setFormData] =useState({
    email: '',  
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
  e.preventDefault();
  const { email, password, confirmPassword, phoneNumber } = formData;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  const payload = { email, password, phoneNumber };
  try {
    const res = await axios.post('https://bd1a05ac5838.ngrok-free.app/api/auth/register-customer', payload);
    if(res.status==201)
      navigation.navigate('Signin');
  } catch (error) {
    alert("Registration failed");
  }
};

  return (
    <View>
      <Icon name="box-open" size={50} color="#8404aeff" style={{ alignSelf: 'center', marginTop: 50 }} />
      <Text style={sharedStyles.heading}>Shopsy Signup</Text>
      <Text style={{ alignSelf: 'center', marginTop: 10 }}>Register as a New User</Text>
      <View style={sharedStyles.container}>
        <AuthInput name="email" label="Email" placeholder="Enter your email" keyboardType="email-address" InputChange={handleInputChange}/>
        <AuthInput name="password" label="Password" placeholder="Enter your password" secureTextEntry InputChange={handleInputChange}/>
        <AuthInput name="confirmPassword" label="Confirm Password" placeholder="Confirm your password" secureTextEntry InputChange={handleInputChange}/>
        <AuthInput name="phoneNumber" label="Phone Number" placeholder="Enter your phone number" keyboardType="phone-pad"  InputChange={handleInputChange}/>
        <AuthButton   title="SignUp" onPress={(e) => {handleSubmit(e)}} />
      </View>
      <Text style={styles.footer}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Signin')}>
          Login
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    color: '#8404aeff',
  },
});

export default Signup;
