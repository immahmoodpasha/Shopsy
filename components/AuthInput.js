import { Text, TextInput, StyleSheet } from 'react-native';

const AuthInput = ({ label, placeholder, secureTextEntry = false, keyboardType = 'default' }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  input: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});

export default AuthInput;
