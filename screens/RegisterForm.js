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

const axios = require("axios");

const RegisterForm = () => {
    const [userName, setuserName] = useState("");
    const [passWord, setpassWord] = useState("");
    const [confpassWord, setconfpassWord] = useState("");

    const register_action = () => {
        if (passWord !== confpassWord) {
            Alert.alert("Passwords don't match!");
        } else if (userName !== "" && passWord !== "") {
            api.post(
                '/register', {
                    username: userName,
                    password: passWord
            })
                .then((response) => {
                    console.log(response);
                    Alert.alert("Registered successfully! Now, you can login");
                    navigate("/Login");
                });
        } else {
            Alert.alert("Value cannot be null!");
        };
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Username"
                placeholderTextColor="#ffffff"
                selectionColor="#fff"
                onChangeText={(user) => { setuserName(user); }}
                onSubmitEditing={() => this.password.focus()}
            />
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#ffffff"
                onChangeText={(pass) => { setpassWord(pass); }}
                ref={(input) => this.password = input}
            />

            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Confirm Password"
                secureTextEntry={true}
                placeholderTextColor="#ffffff"
                onChangeText={(pass) => { setconfpassWord(pass); }}
                ref={(input) => this.password = input}
            />

            <TouchableOpacity style={styles.button} onPress={register_action}>
                <Text style={styles.buttonText}>Register!</Text>
            </TouchableOpacity>
        </View>

    );
}

export default RegisterForm;


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
