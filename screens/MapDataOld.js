import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, PermissionsAndroid, Platform, StyleSheet, Image, Button, Alert } from 'react-native';
//import Geolocation from '@react-native-community/geolocation';
import Geolocation from 'react-native-geolocation-service';
//import { init, Geolocation } from "react-native-amap-geolocation";
//import * as Location from 'expo-location';

import { publicUser } from './LoginForm';

const MapData = () => {
/*
    const [currentLongitude, setCurrentLongitude] = useState("");
    const [currentLatitude, setCurrentLatitude] = useState("");
    const [locationStatus, setLocationStatus] = useState("");

    useEffect(() => {
        const requestLocationPermission = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                this.setState({
                    errorMessage: 'Permission to access location was denied',
                });
                Alert.alert("GPS Permission not granted");
            } else {
                Alert.alert("GPS Permission GRANTED!");
            }
        };
        requestLocationPermission();
    });

    const getOneTimeLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => updateLocationState(position),
            (error) => updateLocationState(error)
        );
    }

        const updateLocationState = (location) => {
            if (location) {
                location.updateTime = new Date().toLocaleString();
                this.setState({ location });
                console.log(location);
                Alert.alert(location);
            }
        };
        /*
                setLocationStatus('Getting Location ...');
                Geolocation.getCurrentPosition(
                    //Will give you the current location
                    (position) => {
                        setLocationStatus('You are Here');
        
                        //getting the Longitude from the location json
                        const currentLongitude =
                            JSON.stringify(position.coords.longitude);
        
                        //getting the Latitude from the location json
                        const currentLatitude =
                            JSON.stringify(position.coords.latitude);
        
                        //Setting Longitude state
                        setCurrentLongitude(currentLongitude);
        
                        //Setting Longitude state
                        setCurrentLatitude(currentLatitude);
                    },
                    (error) => {
                        setLocationStatus(error.message);
                    },
                    {
                        enableHighAccuracy: false,
                        timeout: 30000,
                        maximumAge: 1000
                    },
                );*/
    /*
        const subscribeLocationLocation = () => {
            watchID = Geolocation.watchPosition(
                (position) => {
                    //Will give you the location on location change
    
                    setLocationStatus('You are Here');
                    console.log(position);
    
                    //getting the Longitude from the location json        
                    const currentLongitude =
                        JSON.stringify(position.coords.longitude);
    
                    //getting the Latitude from the location json
                    const currentLatitude =
                        JSON.stringify(position.coords.latitude);
    
                    //Setting Longitude state
                    setCurrentLongitude(currentLongitude);
    
                    //Setting Latitude state
                    setCurrentLatitude(currentLatitude);
                },
                (error) => {
                    setLocationStatus(error.message);
                },
                {
                    enableHighAccuracy: false,
                    maximumAge: 1000
                },
            );
        };
        */
       
/*

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.container}>
                    <Image
                        source={{
                            uri:
                                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png',
                        }}
                        style={{ width: 100, height: 100 }}
                    />
                    <Text style={styles.boldText}>
                        {locationStatus}
                    </Text>
                    <Text
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 16,
                        }}>
                        Longitude: {currentLongitude}
                    </Text>
                    <Text
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 16,
                        }}>
                        Latitude: {currentLatitude}
                    </Text>
                    <View style={{ marginTop: 20 }}>
                        <Button
                            title="Get GPS Data"
                            onPress={getOneTimeLocation}
                        />
                    </View>
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                    React Native Geolocation
                </Text>
            </View>
        </SafeAreaView>
    );
    */

    const [info,setInfo] = useState(0)
    Geolocation.getCurrentPosition(data=> {
        setInfo(data.coords.latitude)
    })
    console.warn("Geolocation")
    return(
        <View>
            <Text style = {{fontSize:70}}>latitude,longitude, {info}</Text>
        </View>
    )

    
}

export default MapData;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boldText: {
        fontSize: 25,
        color: 'red',
        marginVertical: 16,
    },
});