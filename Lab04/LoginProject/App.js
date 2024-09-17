import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const App = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.loginText}>LOGIN</Text>
      </View>

      {/* Name Input with Icon */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={24} color="black" style={styles.iconStyle} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="black"
        />
      </View>

      {/* Password Input with Eye Icon */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={24} color="black" style={styles.iconStyle} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={!passwordVisible} 
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon
            name={passwordVisible ? "eye" : "eye-slash"} 
            size={24}
            color="black"
            style={styles.eyeIconStyle}
          />
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: 'orange' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    width:'360px',
    height:'640px'
  },
  header: {
    flex: 2,
    backgroundColor: 'orange',
    justifyContent: 'center',
    width: '87px',
    height: '35px',
    top: '75px',
    left: '3px',
  },
  loginText: {
    fontfamily: 'Roboto',
    fontSize: 30,
    fontweight: 700,
    lineheight: '35.16px',
    textalign: 'center',

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 300,
    alignSelf: 'center',
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    top:'192px'
  },
  iconStyle: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,

    color: 'black',
  },
  eyeIconStyle: {
    marginLeft: 10,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    marginTop: 30,
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default App;
