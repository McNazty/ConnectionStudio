import React, { useState } from 'react';
import { Alert, View, TextInput, Button, StyleSheet, Modal, Text,TouchableOpacity } from 'react-native';
//import { styles } from '../styles/styles';
import { db, firestore, auth } from '../FirebaseConfig';
const Login = props => {

    [loginEmail, setLoginEmail] = useState('');
    [loginPassword, setLoginPassword] = useState('');
    const [titleValue, setTitleValue] = useState('');
    [disable, setDisable] = useState(true);
    loginWithFirebase = () => {
        if (loginEmail.length < 4) {
            Alert.alert('Please enter an email address.');
            return;
        }

        if (loginPassword.length < 4) {
            Alert.alert('Please enter a password.');
            return;
        }

        auth.signInWithEmailAndPassword(loginEmail, loginPassword)
            .then(function (_firebaseUser) {
                Disablehandler();



                // load data
                //retrieveDataFromFirebase();
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode === 'auth/wrong-password') {
                    Alert.alert('Wrong password.');
                }
                else {
                    Alert.alert(errorMessage);
                }
            }
            );
    }



    const titleChangeHandler = text => {
        setTitleValue(text);
    };
    Disablehandler = () => {
        setDisable(false);
        Alert.alert('user logged in!');
    };

    return (
        <View style={styles.form}>

        {disable &&
            <View style={styles.screen}>
                <Text h4 style={styles.mainText}>Login</Text>
                <View >

                    <View>


                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => setLoginEmail(value)}
                            autoCapitalize="none"
                            autoCorrect={false}
                            autoCompleteType="email"
                            keyboardType="email-address"
                            placeholder="email"
                            placeholderTextColor="red"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => setLoginPassword(value)}
                            autoCapitalize="none"
                            autoCorrect={false}
                            autoCompleteType="password"
                            keyboardType="visible-password"
                            placeholder="password"
                            placeholderTextColor="red"
                        />
                        <TouchableOpacity onPress={loginWithFirebase}>
                            <View style={styles.buttons2}>
                                <Text style={styles.buttonText2}>Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        }
        { !disable &&
            <View style={styles.layout}>
                <Text h4 style={styles.mainText}>Welcome back</Text>
                <View>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home', { screenTitle: titleValue })} >
                        <View style={styles.buttons2}>
                            <Text style={styles.buttonText2}>Enter</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        }

    </View>
    )
}

Login.navigationOptions = navData => {
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

export default Login;