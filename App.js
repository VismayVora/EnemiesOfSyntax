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
import Location from './location';
import AddProject from './src/screens/AddProject';
import attendance from './src/screens/attendance';
import ScanQRCode from './src/screens/ScanQRCode';
import Attendance from './src/screens/attendance';
const Stack = createStackNavigator();
function App() {
  useEffect(() => {
    console.disableYellowBox = true
  })
  return (
    <><Toast ref={(ref)=>Toast.setRef(ref)}/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="attendance" independent={true}>
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
      <Stack.Screen
          name="AddProject"
          component={AddProject}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="Location"
          component={Location}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="attendance"
          component={Attendance}
          options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen
          name="ScanQRCode"
          component={ScanQRCode}
          options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;
