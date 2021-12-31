import React, { Component, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";
import api from "../api/api";

var publicUser = "";
var loggedIN = false;

const LoginForm = () => {
    const [userName, setuserName] = useState("");
    const [passWord, setpassWord] = useState("");
    const [pbUser, setpbUser] = useState("");

    const login_action = () => {
        api.post('/login', {
            username: userName,
            password: passWord,
        }).then((response) => {
            console.log(response);
            if (response.data.message) {
                Alert.alert(response.data.message);
            } else {
                setpbUser(response.data[0].username);
                publicUser = "";
                publicUser = pbUser;
                loggedIN = true;
                Alert.alert("Logged in successfully!"); 
            }
        });
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Username"
                placeholderTextColor="#ffffff"
                selectionColor="#fff"
                onChangeText={(user) => { setuserName(user); publicUser = userName; }}
            />
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#ffffff"
                onChangeText={(pass) => { setpassWord(pass); publicPass = passWord; }}
            />

            <TouchableOpacity style={styles.button} onPress={login_action}>
                <Text style={styles.buttonText}>Login!</Text>
            </TouchableOpacity>
        </View>

    );
}

export default LoginForm;
export {publicUser, loggedIN};


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputBox: {
        width: 300,
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
        textAlign: 'center'
    },

    button: {
        backgroundColor: '#4f9b94',
        borderRadius: 25,
        width: 300,
        marginVertical: 10,
        paddingVertical: 13
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});
