/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import attendance from './src/screens/attendance';
import Details from './src/screens/Details';
import Report from './src/screens/Report';

AppRegistry.registerComponent(appName, () => App);
