import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { db, firestore, auth } from '../FirebaseConfig';
import * as SMS from 'expo-sms';
import * as MailComposer from 'expo-mail-composer';

import CustomHeaderButton from '../header/CustomHeaderButton';




const Likes = props => {
    const [inputs, setInputs] = useState([{key: '', name: '',interest:'',location:'',age:''}]);
    
    var Likes =[];
    const addHandler = ()=>{
      const _inputs = [...inputs];
      for(var i = 0  ;i < Likes.length; i++ ){
      _inputs.push({key: '', name: Likes[i].name,interest: Likes[i].interest ,location:Likes[i].location,age:Likes[i].Age});
      setInputs(_inputs);
      }
    }
    
    
    function Load()
    {
        var userId = auth.currentUser.uid;
        firestore.collection(userId).onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data()); // For data inside doc
            Likes.push(doc.data());
            console.log(doc.data().interest); // For doc name
        })
        console.log(Likes.length);
        addHandler();
    })
}
  
    return (
      <View style={styles.container}>
        <ScrollView style={styles.inputsContainer}>
        {inputs.map((input, key)=>(
          <View style={styles.inputContainer}>

    <View style={styles.iCont}>
            <Text>Name: </Text>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={4}
                   
                    value={input.name}
                    style={{ borderBottomWidth: 2, borderBottomColor: 'black' }}
                />
               
                
               <Text>Location: </Text>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={4}
                 
                    value={input.location}
                    style={{ borderBottomWidth: 2, borderBottomColor: 'black' }}
                />
                </View>
                <View style={styles.iCont}>
                <Text> Age: </Text>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={4}
                   
                    value={input.age}
                    style={{ borderBottomWidth: 2, borderBottomColor: 'black' }}
                />

                <Text>Interest: </Text>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={4}
                    
                    value={input.interest}
                    style={{ borderBottomWidth: 2, borderBottomColor: 'black' }}
                />
                </View>
            
            
          </View>
        ))}
        </ScrollView>
       
        <TouchableOpacity onPress={Load}>
                    <View style={styles.buttons2}>
                        <Text style={styles.buttonText2}>Load</Text>
                    </View>
                </TouchableOpacity>
      </View>
      
    );
  }


export default Likes;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'white'
    },
    buttons2: {
        padding: 12,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        margin: 2,
        marginBottom: 10,
        borderColor: 'white',
        borderWidth: 1
    },
    buttonText2: {
        color: 'white',
        fontSize: 20,
       
    },
    inputsContainer: {
      flex: 1, marginBottom: 20
    },
    inputContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: "lightgray"
    },
    iCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "lightgray"
      }
  })
