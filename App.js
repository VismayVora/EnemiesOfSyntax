import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Auth from './screens/auth';
import BottomTabs from './screens/bottomtabs';

const Stack = createStackNavigator();
function App() {
  useEffect(() => {
    console.disableYellowBox = true
  })
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" independent={true}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}></Stack.Screen>

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="auth"
          component={Auth}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="bottomtabs"
          component={BottomTabs}
          options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
