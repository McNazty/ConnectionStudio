import React, { useState, useEffect } from 'react';
import {
    Image, TouchableOpacity, Button, Text, TextInput,
    View, StyleSheet, ScrollView, FlatList, Modal
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { db, firestore, auth } from '../FirebaseConfig';
import * as SMS from 'expo-sms';
import * as MailComposer from 'expo-mail-composer';

import CustomHeaderButton from '../header/CustomHeaderButton';




const Home = props => {
    //var Array = ["0","1","2","3","4","5","6"]
    var Users = ["0","1","2"]
    var index = 0;
    [databaseData, setDatabaseData] = useState('');
    [fname, setName] = useState('');
    [interest, setInterest] = useState('');
    [location, setLocation] = useState('');
    [age, setAge ]= useState('');
   
    function retrieveDataFromFirebase() {
        
        console.log(index);
     

        firestore.collection("itender").doc(Users[index]).get()
            .then(function (doc) {
                if (doc.exists) {
                    setName(doc.data().Name);
                    setInterest(doc.data().Interest);
                    setLocation(doc.data().Location);
                    setAge(doc.data().Age);
                    //console.log("Document data:", doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
            .catch(function (error) {
                console.log("Error getting document:", error);
            });

            index++;
    }
    function Next(){
        retrieveDataFromFirebase;
       console.log( index);
       index++;

    }


    return (
        <View style={styles.screen}>
            <Text h3 style={styles.slightlySmallerText}>Itender Find Your Match </Text>
            <Text h4 style={styles.mainText}>Connection Studios</Text>

            <View style={styles.search}>
                <Text>Name </Text>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(value) => setName(value)}
                    value={fname}
                    style={{ borderBottomWidth: 2, borderBottomColor: 'black' }}
                />
               
                
               <Text>Location </Text>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(value) => setLocation(value)}
                    value={location}
                    style={{ borderBottomWidth: 2, borderBottomColor: 'black' }}
                />

                <Text> Age</Text>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(value) => setAge(value)}
                    value={age}
                    style={{ borderBottomWidth: 2, borderBottomColor: 'black' }}
                />

                <Text>Interest</Text>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(value) => setInterest(value)}
                    value={interest}
                    style={{ borderBottomWidth: 2, borderBottomColor: 'black' }}
                />

                <TouchableOpacity onPress={retrieveDataFromFirebase}>
                    <View style={styles.buttons2}>
                        <Text style={styles.buttonText2}>Next</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.buttons2}>
                        <Text style={styles.buttonText2}>Email</Text>
                    </View>
                </TouchableOpacity>
               


            </View>
        </View>




    );
}


export default Home;

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
        margin: 2,
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        
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
    mainText: {
        marginBottom: 20,
        color: '#a9a9a9',
        
        textAlign: 'center',
        fontSize: 35
    },
    slightlySmallerText: {
        marginBottom: 10,
        fontSize: 20,
        textAlign: 'center',
        color: '#a9a9a9',
        
    },
    container: {
        margin: 2,
        height: 200
    },
    search: {
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
        minHeight: 100
    },
    button: {
        paddingVertical: 1,
        width: '100%',
    }
})

