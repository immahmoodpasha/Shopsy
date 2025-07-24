import { View, Text,StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';


const Signup = () => {
  const navigate = useNavigation();
  return (
    <View>
     <Icon name="box-open" size={50} color="#8404aeff" style={{alignSelf: 'center', marginTop: 50}} />
      <Text style={styles.heading}>Shopsy Signup</Text>
      <Text style={{alignSelf:'center',marginTop:10}}>Register as a New User</Text>
      <View style={styles.InputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
            style={styles.InputField}
          placeholder='Enter your email'
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.InputField}
          placeholder='Enter your password'
          secureTextEntry={true}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
            style={styles.InputField}
          placeholder='Confirm your password'
          secureTextEntry={true}
        />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
         style={styles.InputField}
          placeholder='Enter your phone number'
          keyboardType='phone-pad'
        />
        <TouchableOpacity style={styles.SignupButton}>
          <Text style={styles.SignupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={{textAlign: 'center', marginTop: 20}}>Already have an account? <Text style={{color: '#8404aeff'}}>Login</Text></Text>
    </View>
  )
}
const styles = StyleSheet.create({
    heading:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#8404aeff',
        marginTop: 10,
        textAlign: 'center',
    },
    InputField:{
        marginVertical: 10, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5
    },
    InputContainer:
    {margin: 30,
    backgroundColor: '#ffffffff',
     padding: 20,
      borderRadius: 10,
       shadowColor: '#000'
    },
    label:{
        fontWeight: 'bold',
        marginLeft:5
    },
    SignupButton:{backgroundColor: '#8404aeff', padding: 10, borderRadius: 5, marginTop: 20,width: '80%',marginLeft: '10%'},
    SignupText:{color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 18},
    
  
});

export default Signup