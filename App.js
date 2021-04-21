import React, { useState } from 'react';
import { TouchableOpacity, Button, Text, TextInput, View, StyleSheet, ScrollView, FlatList, Modal } from 'react-native';


import AppNavigator from './navigation/AppNavigator';

export default function App() {


  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  screen: { 
    padding: 40,
    textAlign: 'center'
   },
  buttons: {
    padding: 12,
    backgroundColor: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin : 2,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1
  },
  buttonText:{
    color: 'black',
    fontSize: 20,
    fontFamily: 'serif'
  },
  buttons2: {
    padding: 12,
    backgroundColor: 'red', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin : 2,
    marginBottom: 10,
    borderColor: 'white',
    borderWidth: 1
  },
  buttonText2:{
    color: 'white',
    fontSize: 20,
    fontFamily: 'serif'
  },
  mainText: {
    marginBottom: 20,
    color: '#a9a9a9',
    fontFamily: 'serif',
    textAlign: 'center',
    fontSize: 35
  },
  slightlySmallerText: {
    marginBottom: 10,
    fontSize: 20,
    textAlign: 'center',
    color: '#a9a9a9',
    fontFamily: 'serif'
  }
})

