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

// export const Home = ({navigation}) => (
//     <ScreenContainer >
//         <Text>Welcome to Home screen</Text>
//         <View style={styles.button}><Button  title="Do something on home" onPress={()=>{}} /></View>
//         <View style={styles.button}><Button  title="Go to details screen " onPress={()=>{navigation.push("Details")}} /></View>
//         <View style={styles.button}><Button  title="Drawer" onPress={()=>{}} /></View>
//     </ScreenContainer>
// )
// equivalent class component of above mentioned below
export class Home extends React.Component{
    render()
    {
      return (  <ScreenContainer >
        <Text>Welcome to Home screen</Text>
        <View style={styles.button}>
            <Button  
                    title="Item 1 Details" 
                    onPress={()=>
                       {this.props.navigation.push("Details", {info:'React Native Details of Item 1', headingLine:"Item 1"} )}} />
        </View>
        <View style={styles.button}><Button  title="Item 2 Details " onPress={()=>{this.props.navigation.push("Details", {info:"Details of Item 2 are asdfaosidcoin" , headingLine:"Item2 Details"})}}  /></View>
        <View style={styles.button}><Button  title="Drawer" onPress={()=>{}} /></View>
    </ScreenContainer>
      )
    }
}

export const Details = ({route})=>{
    console.log(route);
    return ( <ScreenContainer>
        <Text> Welcome to Details Page </Text>   
        {route.params.info && <Text>{route.params.info}</Text>}
        </ScreenContainer>
    )

};
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
        <View style={styles.button}><Button  title="React Native by Example" onPress={()=>{}} /></View>
        <View style={styles.button}><Button  title="React Native School" onPress={()=>{}} /></View>
        <View style={styles.button}><Button  title="Drawer" onPress={()=>{}} /></View>
    </ScreenContainer>
    )

};

export const Profile2 = ({navigation})=>{
    return ( <ScreenContainer>
        <Text> Welcome to Profile 2 Page </Text>   
        <View style={styles.button}><Button  title="React Native by Example" onPress={()=>{}} /></View>
        <View style={styles.button}><Button  title="React Native School" onPress={()=>{}} /></View>
        <View style={styles.button}><Button  title="Drawer" onPress={()=>{}} /></View>
    </ScreenContainer>
    )

};
export const Search = ({navigation})=>{
    return ( <ScreenContainer>
        <Text> Welcome to Search Page </Text>   
        <View style={styles.button}><Button  title="Search Page" onPress={()=>{}} /></View>
        <View style={styles.button}><Button  title="Press The button to perform detailed search" onPress={()=>{navigation.push("Search2")}} /></View>
    </ScreenContainer>
    )

};

export const Search2 = ({navigation})=>{
    return ( <ScreenContainer>
        <Text> Welcome to Search 2 Page </Text>   
      
        <View style={styles.button}><Button  title="Jump to item 2 details" onPress={()=>{
            navigation.navigate("Home" , {
                screen: "Details",
                params: {info:"This is item 2 displayed from the search stack screen", headingLine:"Item 2 from search"}
            })
        }} /></View>   
    </ScreenContainer>
    )

};


