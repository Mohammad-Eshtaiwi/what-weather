import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-get-random-values';
import { StyleSheet, View, Text } from 'react-native';

import Home from './components/home/home';
import { Header } from 'react-native-elements';
import { mainColor } from './styles/colors';
import Login from './components/home/login';
import LocationsProvider from './components/context/locations-context';
// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  const Stack = createStackNavigator();

  return (
    <LocationsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerTitle: props => <Text>Login</Text> }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: () => (
                <Header
                  leftComponent={props => (
                    <Text style={{ color: '#fff', fontSize: 13, fontWeight: 'bold' }}>Weather</Text>
                  )}
                  containerStyle={{
                    backgroundColor: mainColor,
                  }}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LocationsProvider>
    // <View style={styles.container}>
    // </View>
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
