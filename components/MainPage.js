import React, { useState } from 'react';
import { TouchableOpacity, Button, Text, TextInput, 
    View, StyleSheet, ScrollView, FlatList, Modal } from 'react-native';
    import { HeaderButtons, Item } from 'react-navigation-header-buttons';
    
import CustomHeaderButton from '../header/CustomHeaderButton';




const MainPage = props => {
  

  const [titleValue, setTitleValue] = useState('');

    const titleChangeHandler = text => {
        setTitleValue(text);
    };

  return (
    <View style={styles.screen}>
      <Text h3 style={styles.slightlySmallerText}>Connection Studios </Text>
      <Text h4 style={styles.mainText}>ITender </Text>
      
            
      <TouchableOpacity onPress={ () => props.navigation.navigate('Sign', { screenTitle: titleValue }) } >
        <View style={styles.buttons}>
          <Text style={styles.buttonText}>Signup</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={ () => props.navigation.navigate('Log', { screenTitle: titleValue }) } >
        <View style={styles.buttons2}>
          <Text style={styles.buttonText2}>Login</Text>
        </View>
      </TouchableOpacity>

      
    </View>
  );
}
MainPage.navigationOptions = navData => {
    return {
        headerTitle: 'Home',
        headerRight: (
            <Text> </Text>
        )
    }
}

export default MainPage;

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

