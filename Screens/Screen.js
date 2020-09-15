import React from "react";
import { View , Text, StyleSheet, Button } from "react-native";

const styles= StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",

        },
        button : {
            margin: 10,
            borderRadius: 5
        }
    }
);

const ScreenContainer = (props) => {
   
    return (<View style={styles.container}>{props.children}</View>)
}
;

export const Home = () => (
    <ScreenContainer >
        <Text>Master List screen</Text>
        <View style={styles.button}><Button  title="React Native by Example" onPress={()=>{}} /></View>
        <View style={styles.button}><Button  title="React Native School" onPress={()=>{}} /></View>
        <View style={styles.button}><Button  title="Drawer" onPress={()=>{}} /></View>
    </ScreenContainer>
)

export const SignIn= ({navigation}) => {
    return (
        <ScreenContainer >
            <Text>Sign In Screen</Text>
            <View style={styles.button}><Button  title="SignIn" onPress={()=>{}} /></View>
            <View style={styles.button}><Button  title="Create Account" onPress={()=>{navigation.push("CreateAccount")}} /></View>
        </ScreenContainer>
    )
}
export const CreateAccount= ({navigation}) => {
    return (
        <ScreenContainer>
            <Text>Create Account Screen</Text>
            <View style={styles.button}><Button  title="Sign Up" onPress={()=>{}} /></View>
            <View style={styles.button}><Button  title="Sign In Instead" onPress={()=>{navigation.push("SignIn")}} /></View>
        </ScreenContainer>
    )
}


export const Profile = ({navigation})=>{
    return ( <ScreenContainer>
        <Text> Welcome to Profile Page </Text>
        
    </ScreenContainer>
    )

};

