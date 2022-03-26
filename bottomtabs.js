import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home';
import Dashboard from './src/screens/Dashboard';
// import Events from './Events';
// import HomeNavigator from './HomeNavigator';
// import Dashboard from './dashboard';
// import Profile from './Profile';
// import News from './News';

const Tab = createBottomTabNavigator();

const BottomTabs = ({ route }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"

      independent={true}
      screenOptions={{
        tabBarActiveBackgroundColor: "#00CBA9",
        tabBarInactiveBackgroundColor: "#00CBA9",

      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Events"
        component={Events}
        options={{
          headerShown: false,
          tabBarLabel: 'Events',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="card-outline" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Dashboard"
        options={{
          headerShown: false,
          // title:'Project Details'
          tabBarLabel: 'Dashboard',
          tabBarColor: '#1f65ff',

          tabBarIcon: ({ color }) => (
            <Icon name="md-desktop-outline" color={color} size={26} />
          ),
        }}
        component={Dashboard}
      />
      {/* <Tab.Screen
        name="News"
        component={News}
        options={{
          headerShown: false,
          tabBarLabel: 'News',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="card-outline" color={color} size={26} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
        component={Profile}
      /> */}
    </Tab.Navigator>
  );
};
export default BottomTabs;
