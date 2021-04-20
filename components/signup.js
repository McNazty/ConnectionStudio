import React, { useState } from 'react';
import { Alert, View, TextInput, Button, StyleSheet, Modal, Text,TouchableOpacity } from 'react-native';
//import { styles } from '../styles/styles';
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
    const [titleValue, setTitleValue] = useState('');

    const titleChangeHandler = text => {
        setTitleValue(text);
    };

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
                <TouchableOpacity onPress={() => props.navigation.navigate('Home', { screenTitle: titleValue })} >
                            <View style={styles.buttons2}>
                                <Text style={styles.buttonText2}>Enter</Text>
                            </View>
                        </TouchableOpacity>
            </View>
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
    layout:{
        
        marginTop:20,
        flexDirection:"column"
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
    slightlySmallerText: {
        marginBottom: 10,
        fontSize: 20,
        textAlign: 'center',
        color: '#a9a9a9',
       
    }
})

export default Signup;