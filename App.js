import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Register} from './components/Register'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAklA7DUCX0hjOURfmCjR9xyhlpRA6M_gk",
  authDomain: "instagram-dev-ea720.firebaseapp.com",
  projectId: "instagram-dev-ea720",
  storageBucket: "instagram-dev-ea720.appspot.com",
  messagingSenderId: "638107488188",
  appId: "1:638107488188:web:7fbaf216145ae6c28f25b9",
  measurementId: "G-TDZD3QBV99"
};
import LandingScreen from './components/Landing'

app = firebase.initializeApp(firebaseConfig)

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Landing'>
        <Stack.Screen
          name = "Landing"
          component={LandingScreen}
          options = {{headerShown: false}}/>
        <Stack.Screen
          name = "Register"
          component={Register}
          options = {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
