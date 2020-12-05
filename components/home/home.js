import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { If, Else, Then } from 'react-if';
import SavedUser from './savedUser';
import SetUp from './setup';

function Home() {
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
        <Else>
          <SetUp></SetUp>
        </Else>
      </If>
    </>
  );
}

export default Home;
