import React, { useState } from 'react';
import { Alert, View, TextInput, Button, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
//import { styles } from '../styles/styles';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'
import { db, firestore, auth } from '../FirebaseConfig';
var Sex = [
    { label: "Male", value: 0 },
    { label: "Female", value: 1 }
]

var SexualP = [
    { label: "Male", value: 0 },
    { label: "Female", value: 1 },
    { label: "Both", value: 2 }
]

const Signup = props => {


    [registrationEmail, setRegistrationEmail] = useState('');
    [registrationPassword, setRegistrationPassword] = useState('');
    [registed, setRegistered] = useState(false);

    [disable, setDisable] = useState(true);
    registerWithFirebase = () => {
        if (registrationEmail.length < 4) {
            Alert.alert('Please enter an email address.');
            return;
        }

        if (registrationPassword.length < 4) {
            Alert.alert('Please enter a password.');
            return;
        }

        auth.createUserWithEmailAndPassword(registrationEmail, registrationPassword)
            .then(function (_firebaseUser) {

                Disablehandler();
                setRegistrationEmail('');
                setRegistrationPassword('');

            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode == 'auth/weak-password') {
                    Alert.alert('The password is too weak.');
                }
                else {
                    Alert.alert(errorMessage);
                }
                console.log(error);
            }
            );
    }


    Disablehandler = () => {
        setDisable(false);
        Alert.alert('user registered!');
    };
    const [titleValue, setTitleValue] = useState('');

    const titleChangeHandler = text => {
        setTitleValue(text);
    };

    return (
        <View style={styles.form}>

            {disable &&
                <View style={styles.screen}>
                    <Text h4 style={styles.mainText}>Signup</Text>
                    <View >

                        <View>

                            
                            <TextInput
                                style={styles.input}
                                onChangeText={(value) => setRegistrationEmail(value)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                autoCompleteType="email"
                                keyboardType="email-address"
                                placeholder="email"
                                placeholderTextColor="red"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={(value) => setRegistrationPassword(value)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                autoCompleteType="password"
                                keyboardType="visible-password"
                                placeholder="password"
                                placeholderTextColor="red"
                            />
                            <TouchableOpacity onPress={registerWithFirebase}>
                                <View style={styles.buttons2}>
                                    <Text style={styles.buttonText2}>Register</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            }
            { !disable &&
                <View style={styles.layout}>
                    <Text h4 style={styles.mainText}>Enter your information</Text>
                    <View >
                        <Text style={styles.text}>First Name</Text>
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="First Name"
                            placeholderTextColor="red"
                            autoCapitalize="none"
                        />
                        <Text style={styles.text}>Last Name</Text>
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Last Name"
                            placeholderTextColor="red"
                            autoCapitalize="none"
                        />
                        <Text style={styles.text}>Age</Text>
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Age"
                            placeholderTextColor="red"
                            autoCapitalize="none"
                        />
                        <Text style={styles.text}>Phone Number</Text>
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Phone Number"
                            placeholderTextColor="red"
                            autoCapitalize="none"
                        />
                        <Text style={styles.text}>Location</Text>
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Location"
                            placeholderTextColor="red"
                            autoCapitalize="none"
                        />
                        <Text>Your Sex</Text>
                        <RadioForm
                            radio_props={Sex}
                            onPress={(value) => { }}
                            formHorizontal={true}></RadioForm>
                        <Text>Your sexual preference </Text>
                        <RadioForm
                            radio_props={SexualP}
                            onPress={(value) => { }}
                            formHorizontal={true}></RadioForm>

                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home', { screenTitle: titleValue })} >
                        <View style={styles.buttons2}>
                            <Text style={styles.buttonText2}>Enter</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            }

        </View>

    )
}

Signup.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('screenTitle')
    };
}
const styles = StyleSheet.create({

    form: {
        padding: 80,
        textAlign: 'center'
    },
    layout: {

        marginTop: 1,
        flexDirection: "column"
    },
    screen: {
        padding: 40,
        textAlign: 'center'
    },
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
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
    input: {
        margin: 15,
        height: 40,
        borderColor: 'red',
        borderWidth: 1
      },
    slightlySmallerText: {
        marginBottom: 10,
        fontSize: 20,
        textAlign: 'center',
        color: '#a9a9a9',

    }
})

export default Signup;