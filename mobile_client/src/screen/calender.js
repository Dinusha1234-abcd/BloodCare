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
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
export default function CalendarPage({ navigation }) {
   return (
      <View style={styles.main}>
         <SlideBar nav={navigation} headerName="Calender" />
         <View style={styles.sele}>

            <TextInput style={styles.search} ></TextInput>
            <Image style={styles.searchIcon} source={require('../assests/Vector.png')} />
         </View>
         <View style={styles.calendar}>
            <Calendar />
         </View>
         <View style={styles.events}>
            <ImageBackground resizeMode={'stretch'} source={require('../assests/BloodCare.png')} />
         </View>

      </View>)
}

const styles = StyleSheet.create({
   main: {
      backgroundColor: 'rgba(253, 223, 229, 1)'
   }, calendar: {
      position: 'absolute',
      marginTop: 200,
      marginLeft: 10
   }, events: {
      position: 'absolute',
      marginTop: 200
   }, search: {
      position: 'absolute',
      width: 280,
      height: 40,
      left: 65,
      top: 20,
      borderColor: 'rgba(246, 156, 174, 1)',
      borderWidth: 1,
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: 20,
      textAlign: "center",
      fontSize: 20
   }, searchIcon: {
      marginTop: 35,
      marginLeft: 80,

   }, sele:{
      position:'absolute',
      marginTop:60
   }
})
