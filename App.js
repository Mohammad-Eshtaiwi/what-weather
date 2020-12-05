import React, { useState } from 'react';
import axios from 'axios';
import 'react-native-get-random-values';
import { StyleSheet, View } from 'react-native';
import SetUp from './components/home/setup';
import Home from './components/home/home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home></Home>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
