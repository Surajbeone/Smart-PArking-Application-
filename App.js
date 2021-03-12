import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Sign from './components/Sign';
import { NavigationContainer } from '@react-navigation/native';
import {StackView} from '@react-navigation/stack'
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./components/Login";
import IconRefer from './components/IconRefer';
import Menu from './components/Menu';
import Form1 from './components/Form1';
import Payments from './components/Payments';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.Navigator}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  options={{headerStyle: {
            backgroundColor: '#343c4c',
            borderColor:'white',
            borderWidth:1,
            borderTopLeftRadius:35,
            borderTopRightRadius:35
          }}}/>
          <Stack.Screen name="IconRefer" component={IconRefer} />
        <Stack.Screen name="Sign" component={Sign} options={{headerStyle: {
            backgroundColor: '#343c4c',
            borderColor:'white',
            borderWidth:1,
            borderTopLeftRadius:35,
            borderTopRightRadius:35
          }}}/>
        <Stack.Screen name="Login" component={Login} options={{headerStyle: {
            backgroundColor: '#343c4c',
            borderColor:'white',
            borderWidth:1,
            borderTopLeftRadius:35,
            borderTopRightRadius:35
          
          }}}/>
          <Stack.Screen name="Menu" component={Menu} options={{headerStyle: {
            backgroundColor: '#343c4c',
            borderColor:'white',
            borderWidth:1,
            borderTopLeftRadius:35,
            borderTopRightRadius:35
          
          }}}/>
          <Stack.Screen name="Payments" component={Payments} options={{headerStyle: {
            backgroundColor: '#343c4c',
            borderColor:'white',
            borderWidth:1,
            borderTopLeftRadius:35,
            borderTopRightRadius:35
          
          }}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Navigator: {
    flex: 1,
    backgroundColor: 'green',
  },
  HeaderBorder : {
    
  }
});
