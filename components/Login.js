import React, { useState } from 'react';
import { Alert, View, TextInput, Button, StyleSheet, Modal, Text,TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

const Login = props => {

    const cancelDialog = {
        text: 'Close',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
    };

    const promptForQuestionResponse = () => {
        Alert.alert(
            'Punchline',
            'Cross-country.',
            [
                cancelDialog
            ],
            { cancelable: false },
        );
    }

    return (
        <View style={styles.form}>
            <View style={styles.screen}>
                <Text h4 style={styles.subtext}>Login</Text>
                <View >
                    <Text style={styles.label} ></Text>
                    <View><Button style={styles.button} title="See Joke Answer" onPress={() => promptForQuestionResponse()} /></View>
                </View>
            </View>
        </View>
    )
}

Login.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('screenTitle')
    };
}

export default Login;