
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const LoginOrSignup = ({ navigation }) => {

    const handleLogin = () => {
        navigation.navigate('Login'); 
    };

    const handleSignup = () => {
        navigation.navigate('Signup'); 
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerText}>Welcome to</Text>
                <Image
                    source={require('./assets/dhansikshyaLOGO.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.headerText}>Dhanasikshya</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#128A9A',
    },
    header: {
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white'
    },
    logo: {
        width: 100,
        height: 100,
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        backgroundColor: '#E19B77',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LoginOrSignup;
