import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Locations from './locations';
import Posts from './posts';
import Weather from './weather';

const Tab = createBottomTabNavigator();
function Home() {
  return (
    <>
      {/* <Weather></Weather> */}
      <Tab.Navigator>
        <Tab.Screen name="Weather" component={Weather} />
        <Tab.Screen name="Locations" component={Locations} />
        <Tab.Screen name="Posts" component={Posts} />
      </Tab.Navigator>
    </>
  );
}

export default Home;
