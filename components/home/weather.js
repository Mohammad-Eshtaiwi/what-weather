import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import { mainColor, secondaryColor } from '../../styles/colors';
import { Entypo } from '@expo/vector-icons';
// import weatherCard from './weatherCard';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jsonData from '../../data.json';
import { Dimensions } from 'react-native';
let width1 = Dimensions.get('window').width;
const Weather = () => {
  const [weatherInLocation, setWeatherInLocation] = useState([]);
  async function getweather() {
    const { location } = JSON.parse(await AsyncStorage.getItem('user'));

    const key = 'abfde05b4f62407ebd4acb95e3c1c071';
    const days = 5;
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${key}&city=${location[0]}&days=${days}`;
    // const { data } = await axios({ method: 'get', url });

    setWeatherInLocation(jsonData);
  }

  useEffect(() => {
    getweather();
    console.log('hi');
  }, []);
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text>1</Text>
    </View>
  );
  console.log(uuid());
  const weatherCard = ({ item }) => {
    const date = new Date(item.datetime).toDateString().split(' ');
    return (
      <TouchableOpacity style={styles.card}>
        <View style={styles.item}>
          <Text style={styles.unit}>&#176;</Text>
          <Text style={styles.temp}>{Math.round(item.high_temp)}</Text>
          <Text style={styles.description}>{item.weather.description}</Text>
          <Text style={styles.city}>{weatherInLocation.city_name}</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={{ uri: `https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png` }}
            style={{ width: 80, height: 80 }}
          />
        </View>
        <View style={styles.item}>
          <Text style={(styles.description, styles.rh)}>
            <Entypo name="drop" size={16} color="#f1f1f1" />
            <View style={styles.spaceBetween}></View>
            {item.rh}%
          </Text>
          <Text style={(styles.mainColor, styles.fontDate)}>{date[2]}</Text>
          <Text style={(styles.mainColor, styles.fontDay)}>{date[0]}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <FlatList
        style={styles.flat}
        data={weatherInLocation.data}
        renderItem={weatherCard}
        keyExtractor={() => uuid()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  flat: {
    backgroundColor: '#ddd',
    padding: 5,
    width: width1,
  },
  card: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: 5,
    padding: 25,
    width: '100%',
    flex: 1,
  },

  item: {
    // alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    width: '33.3333%',
  },
  temp: {
    fontSize: 65,
    position: 'relative',
  },
  unit: { position: 'absolute', top: -25, right: 0, fontSize: 60, color: mainColor },
  description: {
    textAlign: 'center',
    color: secondaryColor,
    fontWeight: 'bold',
  },
  rh: {
    textAlign: 'center',
    fontSize: 16,
    color: '#f1f1f1',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 14,
    backgroundColor: secondaryColor,
  },
  spaceBetween: {
    paddingRight: 4,
    alignItems: 'center',
  },
  city: { color: mainColor, fontWeight: 'bold' },

  fontDate: { fontSize: 40, color: mainColor, fontWeight: 'bold', opacity: 0.5 },
  fontDay: { fontSize: 20, color: mainColor, fontWeight: 'bold' },
});

export default Weather;
