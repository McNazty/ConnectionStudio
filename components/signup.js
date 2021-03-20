import React, { useState } from 'react';
import { Alert, View, TextInput, Button, StyleSheet, Modal, Text } from 'react-native';
import { styles } from '../styles/styles';
import RadioForm,{RadioButton, RadioButtonInput,RadioButtonLabel} from 'react-native-simple-radio-button'

var Sex = [
    {label: "Male", value:0},
    {label: "Female", value:1}  
]

var SexualP  = [
    {label: "Male", value:0},
    {label: "Female", value:1},  
    {label: "Both", value:2} 
]

const Signup = props => {

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
                <Text h4 style={styles.subtext}>Signup</Text>
                <View >
                    <TextInput placeholder="First Name"></TextInput>
                    <TextInput placeholder="Last Name"></TextInput>
                    <TextInput placeholder="Age"></TextInput>
                    <TextInput placeholder="Phone Number"></TextInput>
                    <TextInput placeholder="Your Email"></TextInput>
                    <Text>Your Sex</Text>
                    <RadioForm
                    radio_props={Sex}
                    onPress= {(value)=>{}}
                    formHorizontal={true}></RadioForm>
                     <Text>Your sexual preference </Text>
                     <RadioForm
                    radio_props={SexualP}
                    onPress= {(value)=>{}}
                    formHorizontal={true}></RadioForm>
                    
                </View>
            </View>
        </View>
    )
}

Signup.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('screenTitle')
    };
}

export default Signup;