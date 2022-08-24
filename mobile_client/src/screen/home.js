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
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
export default function Home({ navigation }) {
   
     
  

   return (
      <View style={styles.main}>

         <SlideBar nav={navigation} headerName="Home" />
         <View style={styles.tablecontainer}>
         <View>
            <Text  style={styles.headername}>Your Area Upcoming Camp</Text>
           
            </View>
            <View>

               <Image style={styles.upcomigcamp} source={require('../assests/upcomig_camp.png')}></Image>
            </View>
            
         </View>
      </View>

   )

}
const styles = StyleSheet.create({
   main: {
      backgroundColor: 'rgba(253, 223, 229, 1)'
   }, tablecontainer: {
      position: 'absolute',
      
      marginTop: 110,
      marginLeft: 10,
      width: 370,
      height: 500,
      backgroundColor: 'rgba(255, 255, 255, 0.73)',
      borderRadius: 10
   }, searchBar: {
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
   },searchIcon:{
      marginTop:35,
      marginLeft:80,
      
   },tableconent: {
      top: 40,
      padding: 5,
      fontSize: 8

   }, tableHeader: {
      backgroundColor: 'rgba(246, 156, 174, 1)'
   }, headername: {
      fontSize: 20,
      marginTop: 65,
      marginLeft:40
   },upcomigcamp:{
      marginTop:60,
   }

   
   
})