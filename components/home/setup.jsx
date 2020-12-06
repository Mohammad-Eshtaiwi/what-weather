import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

export default function SetUp() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  async function submitHandler() {
    const key = 'abfde05b4f62407ebd4acb95e3c1c071';
    const days = 5;
    // const url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${key}&city=${location}&days=${days}`;
    // const { data: weather } = await axios.get(url);

    AsyncStorage.setItem('user', JSON.stringify({ location: [location], user: name }));
  }
  function getUserLocation() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setErrorMsg('Oops, this will not work on Sketch in an Android emulator. Try it on your device!');
    } else {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }

        let result = await Location.getCurrentPositionAsync({});
        // console.warn(result);
        let lat = result.coords.latitude;
        let log = result.coords.longitude;
        // console.log(lat, log);
        const key = 'abfde05b4f62407ebd4acb95e3c1c071';
        const days = 5;
        const url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${key}&&lat=${lat}&lon=${log}&days=0`;
        const weather = await axios.get(url);
        setLocation(weather.data.city_name);
        console.warn(weather.data.city_name);
      })();
    }
  }

  return (
    <>
      <Text>Hello and welcome to what weather</Text>
      <Text>Please enter your name and your location</Text>

      <Input
        placeholder='your name'
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        leftIconContainerStyle={styles.icon}
        value={name}
        onChangeText={(text) => {
          // console.log(text);
          setName(text);
        }}
      />

      <Input
        placeholder='Location'
        leftIcon={{ type: 'font-awesome', name: 'map-marker' }}
        leftIconContainerStyle={styles.icon}
        value={location}
        onChangeText={(text) => {
          setLocation(text);
        }}
      />
      <Button
        title='Get Location'
        onPress={() => {
          // console.log('user location');
          getUserLocation();
        }}
      />

      <Button
        containerStyle={{ width: '100%' }}
        title='VIEW NOW'
        titleStyle={{ textAlign: 'center' }}
        onPress={() => {
          // console.log('Hello Eshtaiwi');
          submitHandler();
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
