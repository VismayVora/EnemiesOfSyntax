/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import attendance from './src/screens/attendance';
import Report from './src/screens/Report';

AppRegistry.registerComponent(appName, () => Report);
