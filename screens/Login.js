import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Alert
} from "react-native";

import LoginForm, {loggedIN} from './LoginForm';
import Logo from './Logo';

const Login = ({navigation}) => {

    const logg = () =>{
        if(loggedIN==true)
        {
            navigation.navigate('MapData');
        }else{
            Alert.alert("You need to login first!");
        }
    }

  return (
    <View style={styles.container}>
      {/* <StatusBar barstyle="dark-content"/> */}
      <Logo />
      <LoginForm type="Login" />
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Don't have an account yet?</Text>
        <Text style={styles.signupButton} onPress={logg}>Go To Map </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={styles.signupButton}>Register</Text></TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;

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