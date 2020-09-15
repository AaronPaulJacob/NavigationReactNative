import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn, CreateAccount } from './Screens/Screen';

const AuthStack = createStackNavigator();
// const Tabs=createBottomTabNavigator();
export default () => (
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn}  options={{title: "Welcome to SignIn Page"}}/>
      <AuthStack.Screen name="CreateAccount" component={CreateAccount} options={{title:"Hello wecolme to signup"}}/>
    </AuthStack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
