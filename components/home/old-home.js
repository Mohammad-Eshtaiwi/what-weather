import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native';
import { If, Else, Then } from 'react-if';
import SavedUser from './savedUser';
import SetUp from './home';
function HomeScreen() {
  async function getUser() {
    const result = await AsyncStorage.getItem('user');
    console.log(result && true);
    setLogedIn(result);
  }
  const [logedIn, setLogedIn] = useState(false);

  useEffect(() => {
    getUser();
    console.log('hi');
  }, [logedIn]);

  return (
    <>
      <If condition={logedIn}>
        <Then>
          <SavedUser></SavedUser>
        </Then>
        <Else></Else>
      </If>
    </>
  );
}

export default HomeScreen;
