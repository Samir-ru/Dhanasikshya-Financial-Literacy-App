import React, { useState, useContext} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { UserContext } from './UserContext';
import axios from 'axios';

const Contact = () => {
  const [Subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { Gemail } = useContext(UserContext);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      subject: Subject,
      message: message,
      email: Gemail
    }
    
    try {
      const response = await axios.post('http://172.16.1.233:5000/Contact', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.log(error);
    }
    setSubject('');
    setMessage('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Contact Us</Text>

      <TextInput
        style={{ marginBottom: 10, padding: 10, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Subject"
        value={Subject}
        onChangeText={text => setSubject(text)}
      />
      <TextInput
        style={{ marginBottom: 20, padding: 10, borderColor: 'gray', borderWidth: 1, height: 100 }}
        placeholder="Your Message"
        multiline
        value={message}
        onChangeText={text => setMessage(text)}
      />
      <TouchableOpacity style={{backgroundColor: '#148A9A', padding: 5, marginTop: 10, justifyContent: 'center', alignItems: 'center'}} onPress={handleSubmit}><Text style={{color: 'white', fontSize: 20}}>Submit</Text></TouchableOpacity>

      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Contact Information:</Text>
        <Text>Email: info@dhanasikhshya.com</Text>
        <Text>Phone: +977-123-456-789</Text>
        <Text>Address: Kathmandu, Nepal</Text>
      </View>
    </View>
  );
};

export default Contact;
