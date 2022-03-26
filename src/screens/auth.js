import React from 'react';
import {
  StyleSheet,
  Alert,
} from 'react-native';

import TouchId from 'react-native-touch-id';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../../bottomtabs';
import AddProject from './AddProject';
import Location from '../../location';

const Stack = createNativeStackNavigator();


export default function Auth() {
  TouchId.authenticate('Place your fingerprint!', {
    title: 'Authentication',
  })
    .then(() => {
      Alert.alert('Authentication Successful!');
      console.log("Done")
    })
    .catch(() => {
      Alert.alert('Fingerprint Did not match');
    });

  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen name="bottomtabs" component={BottomTabs}  options={{ headerShown: false }} />
      <Stack.Screen
          name="AddProject"
          component={AddProject}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="Location"
          component={Location}
          options={{ headerShown: false }}></Stack.Screen>

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#19181f',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 45,
    borderWidth: 2,
    borderColor: '#7159c1',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    width: 200,
    height: 45,
    borderWidth: 2,
    borderColor: '#7159c1',
    backgroundColor: '#7159c1',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
