import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About.js';
import DebtCalculator from './DebtCalculator.js';
import Share from './Share.js';
import Wardplan from './WardPlan.js';
import LoginOrSignup from './LoginOrSignup.js'
import Login from './Login.js';
import Signup from './Signup.js';
import UserProfile from './UserProfile'
import { UserProvider } from './UserContext';
import SIPCalculator from './SipCalculator.js';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = ({navigation}) => (
  <Drawer.Navigator 
  screenOptions={{
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#148A9A', 
      height: 100,
    },
    headerTintColor: '#fff', 
    headerTitle: () => (
      < >
            <Image
        source={require('./assets/dhansikshyaLOGO.png')}
        style={{ width: 80, height: 80, resizeMode: 'contain' }} 
        resizeMode="contain" 
      />
      </>
    ),
    headerRight: () => (
      < >
      <TouchableOpacity onPress={()=>navigation.navigate('UserProfile')}>
      <Image
        source={require('./assets/acntIcon.png')}
        style={{ width: 30, height: 30, resizeMode: 'contain', margin: 10 }} 
        resizeMode="contain" 
      />
      </TouchableOpacity>
      </>
    ),
  }}
  >
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="About" component={About} />
    <Drawer.Screen name="Debt Calculator" component={DebtCalculator} />
    <Drawer.Screen name="Trading" component={Share} />
    <Drawer.Screen name="Wardplan" component={Wardplan} />
    <Drawer.Screen name="Contact" component={Contact} />
    <Drawer.Screen name="Sip Calculator" component={SIPCalculator} />
  </Drawer.Navigator>
);

function StackNavigation(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#148A9A', 
        height: 100,
      },
      headerTintColor: '#fff', 
    }}
    >
    <Stack.Screen name="LoginOrSignup" component={LoginOrSignup} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={Login} options={{  }} />
    <Stack.Screen name="Signup" component={Signup} options={{  }} />
    <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="UserProfile" component={UserProfile} options={{  }} />
  </Stack.Navigator>
  )
}

const App = () => (
  <NavigationContainer>
    <UserProvider>
      <StackNavigation/>
    </UserProvider>
  </NavigationContainer>
);

export default App;
