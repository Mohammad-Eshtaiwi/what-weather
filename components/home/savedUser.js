import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { Dimensions } from 'react-native';

let width1 = Dimensions.get('window').width;
let width2 = Dimensions.get('window').width - 20; //full width
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuid } from 'uuid';

function SavedUser() {
  const [weatherInLocation, setWeatherInLocation] = useState([]);
  async function getweather() {
    const { location } = JSON.parse(await AsyncStorage.getItem('user'));

    const key = 'abfde05b4f62407ebd4acb95e3c1c071';
    const days = 5;
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${key}&city=${location[0]}&days=${days}`;
    const { data } = await axios({ method: 'get', url });
    console.log(data);
    setWeatherInLocation(data);
  }

  useEffect(() => {
    getweather();
    console.log('hi');
  }, []);

  const weatherCard = ({ item }) => {
    const date = new Date(item.datetime).toDateString().split(' ');

    return (
      <TouchableOpacity style={styles.card}>
        <View style={styles.item}>
          <Text>{item.temp}</Text>
          <Text>{item.weather.description}</Text>
          <Text>{weatherInLocation.city_name}</Text>
        </View>
        <View style={styles.item}>
          <Image source={{ uri: `https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png` }} style={{ width: 50, height: 50 }} />
        </View>
        <View style={styles.item}>
          <Text>{item.rh}%</Text>
          <Text>{date[0]}</Text>
          <Text>{date[2]}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return <FlatList style={styles.flat} data={weatherInLocation.data} renderItem={weatherCard} keyExtractor={() => uuid()} />;
}
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 25,
    width: '100%',
    flex: 1,
  },
  flat: {
    backgroundColor: '#ddd',
    padding: 20,
    width: width1,
  },
  item: {
    // alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    width: '33.3333%',
  },
});

export default SavedUser;
