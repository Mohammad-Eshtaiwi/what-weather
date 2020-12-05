import React, { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SavedUser() {
  const [weatherInLocation, setWeatherInLocation] = useState([]);
  async function getweather() {
    const { location } = JSON.parse(await AsyncStorage.getItem('user'));

    const key = 'abfde05b4f62407ebd4acb95e3c1c071';
    const days = 5;
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${key}&city=${location[0]}&days=${days}`;
    const result = await axios({ method: 'get', url });
    console.log(result);
    setWeatherInLocation(result);
  }

  useEffect(() => {
    getweather();
    console.log('hi');
  }, []);
  // return <FlatList />;
  return <Text> Hellow Osama</Text>;
}

export default SavedUser;
