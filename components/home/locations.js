import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocationsContext } from '../context/locations-context';
import { v4 as uuid } from 'uuid';

export default function Locations({ navigation }) {
  const { savedLocations, setSavedLocations, activeLocation, setActiveLocation } = useContext(LocationsContext);
  console.log('Hiiiiiii its meeee');
  async function reactivateLocation(activeNewLocation) {
    console.log(activeNewLocation);
    setActiveLocation(activeNewLocation);
    const result = JSON.parse(await AsyncStorage.getItem('user'));
    result.activeLocation = activeNewLocation;
    AsyncStorage.setItem('user', JSON.stringify(result)).then(() => {
      navigation.navigate('Weather');
    });
  }

  console.log('locations');
  const Item = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          reactivateLocation(item);
        }}
      >
        <Text style={styles.paragraph}>{item}</Text>
      </TouchableOpacity>
    );
  };
  console.log(savedLocations);

  return (
    <>
      <FlatList data={savedLocations} renderItem={Item} keyExtractor={() => uuid()} />
    </>
  );
}
const styles = StyleSheet.create({
  paragraph: {
    margin: 20,
    fontSize: 35,
    textAlign: 'center',
    color: '#6ec9d9',
    fontWeight: 'bold',
  },
});
