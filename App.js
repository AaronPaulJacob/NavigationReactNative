import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SignIn, CreateAccount, Home, Profile, Details,Profile2 ,Search, Search2} from './Screens/Screen';

const AuthStack = createStackNavigator();
const Tabs= createBottomTabNavigator();

const HomeTabStack =createStackNavigator();
const ProfileTabStack = createStackNavigator();
const SearchStack= createStackNavigator();
const SearchComponent=()=>(
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>);


const HomeTabComponent= () =>{
  return(  <HomeTabStack.Navigator>
            <HomeTabStack.Screen name="Home" component={Home} />
            <HomeTabStack.Screen
             name="Details" 
             component={Details} 
             options= {  ( {route} ) => ({
                                           title: route.params.headingLine
                                         })
                       } 
            />
          </HomeTabStack.Navigator>
  )
}

const ProfileTabComponent=() => (
  <ProfileTabStack.Navigator>
    <ProfileTabStack.Screen name={"Profile"} component={Profile} />
    <ProfileTabStack.Screen name={"Profile2"} component ={Profile2} />
  </ProfileTabStack.Navigator>
)
export default () => (
  <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeTabComponent} />
      <Tabs.Screen name="Search" component={SearchComponent} />
    </Tabs.Navigator>
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
