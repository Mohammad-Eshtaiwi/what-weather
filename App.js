import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-get-random-values';
import { StyleSheet, View, Text } from 'react-native';

import SavedUserScreen from './components/home/savedUser';
import { Header } from 'react-native-elements';
import { mainColor } from './styles/colors';
import Login from './components/home/login';
// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTitle: props => <Text>Login</Text> }}
        />
        <Stack.Screen
          name="Weather"
          component={SavedUserScreen}
          options={{
            header: () => (
              // {
              //   text: 'Weather',
              //   style: { color: '#fff', fontSize: 26, fontWeight: 'bold' },
              // }
              <Header
                leftComponent={props => (
                  <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Weather</Text>
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
