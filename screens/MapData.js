import React from 'react';
import {View, Text} from 'react-native';
import GeoLocation from "@react-native-community/geolocation";

import { publicUser } from './LoginForm';

const MapData =() => {
    return(
        <View>
            <Text>This is MapData</Text>
            <Text>{publicUser}</Text>
        </View>
    );
}

export default MapData;