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
export default function Home({navigation}){
   return(<View>
      <SlideBar  nav={navigation} headerName="Home"/>
   </View>)
}
