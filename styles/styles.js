import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    screen: { 
        padding: 40,
        textAlign: 'center'
       },
    subtext: {
        fontSize: 20,
        fontFamily: 'serif',
        color: 'red',
        marginLeft: 40
    },
    label: {
        paddingBottom: 25
    },
    form2: {
        margin: 5,
        marginTop: 20 
    },
    form: {
        margin: 20,
        marginTop: 60 
    },
    textInput: {
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2,
        textAlignVertical: 'top'
    },
    buttonContainer: {
      paddingVertical: 40,
      justifyContent: 'space-between',
      width: '100%',
    },
    button: {
        width: '40%',
    }  
});