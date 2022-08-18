
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import Login from './src/screen/login';
import Splash from './src/screen/splash';
import Home from "./src/screen/home";
import Calendar from "./src/screen/calender";
import History from "./src/screen/history";
const Stack = createNativeStackNavigator();
const App = () => {
  const getData = async (key) => {
    // get Data from Storage
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const type = getData('type');
  const token = getData('token');
  
 return (
    <NavigationContainer>
   <Stack.Navigator initialRouteName="Splash" >
         <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="Calendar" component={Calendar} />  
        <Stack.Screen options={{headerShown:false}} name="History" component={History} />

        </Stack.Navigator>
  </NavigationContainer>
  
    )
   
 }

export default App;
