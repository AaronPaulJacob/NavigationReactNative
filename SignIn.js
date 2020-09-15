import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: "center"
    },
    button: {
      padding:10,
        marginVertical:10,
        borderRadius: 5
        }
    }
);

class SignIn extends React.Component{

 render()
 {
    console.log(this.props);

    return ( 
        <View style={styles.container}>
             <Text>Sign In Screen</Text>
            <Button title="Create Account" onPress={()=>{ this.props.navigation.push("CreateAccount")}} style={styles.button}  />
            <Button  title="Sin In" onPress={()=>{ alert("todo")}} style={styles.button}  />
        </View>
    );
 }
}
export default SignIn;