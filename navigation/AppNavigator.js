import { Platform } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Signup from '../components/signup';
import Login from '../components/Login';

import MainPage from '../components/MainPage';

const AppNavigator = createStackNavigator(
    {
        MainPage: {screen: MainPage},
        Sign:{screen: Signup},
        Log: { screen: Login },
        
    }, 
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? 'black' : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : 'blue'
        }
    }
);

export default createAppContainer(AppNavigator);