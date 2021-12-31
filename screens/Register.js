import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";

import RegisterForm from './RegisterForm';
import Logo from './Logo';

const Register = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Logo />
            <RegisterForm type="Signup" />
            <View style={styles.signupTextCont}>
                <Text style={styles.signupText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.signupButton}>Login!</Text></TouchableOpacity>
            </View>
        </View>
    );
}

export default Register;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#80cbc4',
        alignItems: 'center',
        justifyContent: 'center',
    },

    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },

    signupText: {
        color: 'rgba(255,255, 255,0.6)',
        fontSize: 16
    },

    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }
});