import { View, Text,StyleSheet,TextInput } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';


const Signup = () => {
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

      </View>
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
    }
    
  
});

export default Signup