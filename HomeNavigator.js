import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Cricket from './Cricket';
import CategoryScreen from './CategoryScreen';
import Graph from './Graph';
import QRCode from './QRCode';
import ScanQRCode from './ScanQRCode';
import Football from './Football';
import Fitness from './Fitness';
import Yoga from './Yoga';
import Video from './Video';
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator independent={true}>
      <Stack.Screen
        component={Home}
        name="Home"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={Cricket}
        name="Cricket"
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={Football}
        name="Football"
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={Fitness}
        name="Fitness"
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={Yoga}
        name="Yoga"
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={CategoryScreen}
        name="CategoryScreen"
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={Graph}
        name="Graph"
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={QRCode}
        name="QRCode"
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={ScanQRCode}
        name="ScanQRCode"
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={Video}
        name="Video"
      />
    </Stack.Navigator>

  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
