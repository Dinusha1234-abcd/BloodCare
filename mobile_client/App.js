 
import React from 'react'; 
 
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './src/screen/login';
import Home from './src/screen/home';
// import AppRouter from './src/router/router';
 const App = () =>{
     return( <Home/> ) 
 }  
 
 
export default App;
