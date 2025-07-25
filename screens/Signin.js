import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Signin = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Icon name="box-open" size={50} color="#8404aeff" style={{ alignSelf: 'center', marginTop: 50 }} />
      <Text style={styles.heading}>Shopsy Login</Text>

      <View style={styles.InputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.InputField}
          placeholder='Enter your email'
          keyboardType='email-address'
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.InputField}
          placeholder='Enter your password'
          secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}>forgot password?</Text>

        <TouchableOpacity
        onPress={() => navigation.navigate('Categories')}
        activeOpacity={0.7}
        style={styles.SigninButton}>
          <Text style={styles.SigninText}>Sign In</Text>
        </TouchableOpacity>
        
      </View>
      

      <Text style={{ textAlign: 'center', marginTop: 20 }}>
        Don't have an account?{' '}
        <Text 
          onPress={() => navigation.navigate('Signup')} 
          style={{ color: '#8404aeff' }}
        >
          Sign Up
        </Text>
        
      </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8404aeff',
    marginTop: 10,
    textAlign: 'center',
  },
  InputField: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  InputContainer: {
    margin: 30,
    marginTop: 60,
    backgroundColor: '#ffffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
  },
  label: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  SigninButton: {
    backgroundColor: '#8404aeff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
    marginLeft: '10%',
    marginBottom: 20,
  },
  SigninText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  forgotPassword: {
    textAlign: 'right',
    marginTop: 10,
    color: '#8404aeff',
  },
});

export default Signin;
