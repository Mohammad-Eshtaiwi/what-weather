import React, { useState, useContext } from 'react';
import { LocationsContext } from '../context/locations-context';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function NewLocation({ navigation }) {
  const { savedLocations, setSavedLocations, activeLocation, setActiveLocation } = useContext(LocationsContext);
  const [location, setLocation] = useState('');
  async function submitHandler() {
    setActiveLocation(location);
    const result = JSON.parse(await AsyncStorage.getItem('user'));
    result.activeLocation = location;
    result.location.push(location);
    AsyncStorage.setItem('user', JSON.stringify(result)).then(() => {
      navigation.navigate('Weather');
    });
  }
  return (
    <View>
      <Text style={styles.paragraph}>Add New Location</Text>

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
        containerStyle={{ width: '100%' }}
        title='Add'
        titleStyle={{ textAlign: 'center' }}
        style={styles.buttom}
        onPress={() => {
          // console.log('Hello Eshtaiwi');
          submitHandler();
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
  },

  paragraph: {
    margin: 24,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#6ec9d9',
  },
  buttom: {
    marginTop: 50,
  },
});
