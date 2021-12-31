import React from "react";
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  PermissionsAndroid,
  Platform,
} from "react-native";
import {
  init,
  Geolocation,
  setInterval,
  setNeedAddress,
  setLocatingWithReGeocode,
} from "react-native-amap-geolocation";

const style = StyleSheet.create({
  body: {
    padding: 16,
    paddingTop: Platform.OS === "ios" ? 48 : 16,
  },
  controls: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginBottom: 16,
  },
  button: {
    flexDirection: "column",
    marginRight: 8,
    marginBottom: 8,
  },
  result: {
    fontFamily: Platform.OS === "ios" ? "menlo" : "monospace",
  },
});

class MapData extends React.Component {
  state = { location: null };

  async componentDidMount() {
    if (Platform.OS === "android") {
      const result = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);
      console.log(result);
    }
    await init({
      ios: "9bd6c82e77583020a73ef1af59d0c759",
      android: "043b24fe18785f33c491705ffe5b6935",
    });
  }

  componentWillUnmount() {
    stop();
  }

  updateLocationState(location) {
    if (location) {
      location.updateTime = new Date().toLocaleString();
      this.setState({ location });
      console.log(location);
    }
  }

  getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => this.updateLocationState(position),
      (error) => this.updateLocationState(error)
    );
  };

  watchPosition = () => {
    if (!this.watchId) {
      this.watchId = Geolocation.watchPosition(
        (position) => this.updateLocationState(position),
        (error) => this.updateLocationState(error)
      );
    }
  };

  clearWatch = () => {
    if (this.watchId) {
      Geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
    this.setState({ location: null });
  };

  setInterval2000 = () => setInterval(2000);
  setInterval10000 = () => setInterval(10000);
  setNeedAddressTrue = () => setNeedAddress(true);
  setNeedAddressFalse = () => setNeedAddress(false);
  setLocatingWithReGeocodeTrue = () => setLocatingWithReGeocode(true);
  setLocatingWithReGeocodeFalse = () => setLocatingWithReGeocode(false);

  render() {
    const { location } = this.state;
    return (
      <ScrollView contentContainerStyle={style.body}>
        <View style={style.controls}>
          <View style={style.button}>
            <Button onPress={this.getCurrentPosition} title="Geolocation.getCurrentPosition" />
          </View>
          <View style={style.button}>
            <Button onPress={this.watchPosition} title="Geolocation.watchPosition" />
          </View>
          <View style={style.button}>
            <Button onPress={this.clearWatch} title="Geolocation.clearWatch" />
          </View>
          <View style={style.button}>
            <Button onPress={this.setInterval2000} title="setInterval(2000)" />
          </View>
          <View style={style.button}>
            <Button onPress={this.setInterval10000} title="setInterval(10000)" />
          </View>
          <View style={style.button}>
            <Button onPress={this.setNeedAddressTrue} title="setNeedAddress(true)" />
          </View>
          <View style={style.button}>
            <Button onPress={this.setNeedAddressFalse} title="setNeedAddress(false)" />
          </View>
          <View style={style.button}>
            <Button
              onPress={this.setLocatingWithReGeocodeTrue}
              title="setLocatingWithReGeocode(true)"
            />
          </View>
          <View style={style.button}>
            <Button
              onPress={this.setLocatingWithReGeocodeFalse}
              title="setLocatingWithReGeocode(false)"
            />
          </View>
        </View>
        <Text style={style.result}>{`${JSON.stringify(location, null, 2)}
`}</Text>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent("RNAMapGeolocation", () => MapData);