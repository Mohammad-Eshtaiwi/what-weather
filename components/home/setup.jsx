import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { StyleSheet, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';

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

  return (
    <>
      <Text>Hello and welcome to what weather</Text>
      <Text>Please enter your name and your location</Text>

      <Input
        placeholder="your name"
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        leftIconContainerStyle={styles.icon}
        value={name}
        onChangeText={text => {
          console.log(text);
          setName(text);
        }}
      />
      <Input
        placeholder="Location"
        leftIcon={{ type: 'font-awesome', name: 'map-marker' }}
        leftIconContainerStyle={styles.icon}
        value={location}
        onChangeText={text => {
          setLocation(text);
        }}
      />

      <Button
        containerStyle={{ width: '100%' }}
        title="VIEW NOW"
        titleStyle={{ textAlign: 'center' }}
        onPress={() => {
          console.log('Hello Eshtaiwi');
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
});
