import React from 'react';
import { 
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  TouchableHighlight,
  Text
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import HomeScreen from '../screen/home';
import EditFormScreen from '../screen/editForm';

export const RootStackNavigator = StackNavigator({
  Home:{
    screen: HomeScreen,
  },
  EditForm:{
    screen:EditFormScreen,
    navigationOptions:{
      title:'Edit',
    }
  },
},
 
);

export default class RootNavigator extends React.Component{
  render(){
    return (<RootStackNavigator/>);
  }
}


