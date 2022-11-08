import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Pages/LoginScreen';
import Welcome from './src/Pages/Welcome'

const Stack=createNativeStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/> */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#231246",
  },
  input: {

    width: 300,
    height: 40,
    color: 'black',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 18
  },
  inputContainer: {
    paddingBottom: 30,
  },
  btnSubmit: {
    backgroundColor: '#f78ae5',
    width: 200,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
  },


})