import React from 'react';
import {
    ImageBackground, SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Button,
    Image,
    View,
    Pressable,
    TextInput
} from 'react-native';
import SlideBar from '../component/slidebar';
export default function Calendar({navigation}){
   return(<View>
      <SlideBar  nav={navigation} headerName="Calender"/>
   </View>)
}
