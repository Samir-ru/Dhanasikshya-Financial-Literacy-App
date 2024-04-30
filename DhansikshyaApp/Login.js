import React, { useState, useContext} from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { UserContext } from './UserContext';


const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setGEmail } = useContext(UserContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    }
    try {
      const response = await axios.post('http://172.16.1.233:5000/Login', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data.message === 'Login successful') {
        navigation.navigate('Main');
        setGEmail(email);
        console.log("logged in");
      } else if (response.data.message === 'Incorrect password') {
        alert("Incorrect password! Try again.");
      } else if (response.data.message === 'User does not exist') {
        alert("The user does not exist.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text>
        Don't have an account? 
      </Text>
      <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#148A9A',
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginPage;
