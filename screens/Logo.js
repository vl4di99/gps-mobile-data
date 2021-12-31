import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image
} from "react-native";

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image style={{ width: 130, height: 130 }}
                source={require('../images/logo-color.png')} />
            <Text style={styles.logoText}>ShareLocation</Text>
        </View>
    );
}

export default Logo;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#80cbc4',
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(255, 255, 255 , 07)'
    }
});

{/* <div>Logo made with <a href="https://
www.designevo.com/" title="Free Online Logo Maker">DesignEvo</a></div>
 */}



