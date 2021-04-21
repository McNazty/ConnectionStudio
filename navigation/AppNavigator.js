import { Platform } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Signup from '../components/signup';
import Login from '../components/Login';
import Home from '../components/Home';
import MainPage from '../components/MainPage';
import Likes from '../components/Likes';

const AppNavigator = createStackNavigator(
    {
        MainPage: {screen: MainPage},
        Sign:{screen: Signup},
        Log: { screen: Login },
        Home:{ screen:Home},
        Likes: {screen:Likes}
        
        
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