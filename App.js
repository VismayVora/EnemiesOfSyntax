import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Auth from './src/screens/auth'
import BottomTabs from './bottomtabs';
import Toast from 'react-native-toast-message';
import Profile from './src/screens/Profile';
const Stack = createStackNavigator();
function App() {
  useEffect(() => {
    console.disableYellowBox = true
  })
  return (
    <><Toast ref={(ref)=>Toast.setRef(ref)}/>
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
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="auth"
          component={Auth}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="bottomtabs"
          component={BottomTabs}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;
