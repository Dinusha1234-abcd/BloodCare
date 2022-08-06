
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import Login from './src/screen/login';
import Splash from './src/screen/splash';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
   <Stack.Navigator initialRouteName="Splash" >
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}


export default App;
