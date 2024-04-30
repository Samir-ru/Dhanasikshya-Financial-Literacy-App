import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { UserContext } from './UserContext'

const UserProfile = ({navigation}) => {
  const { Gemail } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://172.16.1.233:5000/UserProfile', {params: { Gemail }})
        setUser(response.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Name: {user?.fullName}</Text>
      <Text style={styles.label}>Email: {user?.email}</Text>
      <Text style={styles.label}>Phone Number: {user?.Number}</Text>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('LoginOrSignup')}>
        <Text style ={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 20
  },
  button: {
    backgroundColor: '#148A9A',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "baseline"
},
buttonText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},
});

export default UserProfile;
