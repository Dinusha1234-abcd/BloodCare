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
import { DataTable } from 'react-native-paper';
export default function Home({ navigation }) {


   return (
      <View style={styles.main}>

         <SlideBar nav={navigation} headerName="Home" />
         <View style={styles.tablecontainer}>
            <View>

               <TextInput style={styles.searchBar} ></TextInput>
            </View>
            <View>
            <Text  style={styles.headername}>Your Area Upcoming Camp</Text>
            <DataTable style={styles.tableconent}>
                  <DataTable.Header style={styles.tableHeader}>
                     <DataTable.Title>Data</DataTable.Title>
                     <DataTable.Title>Camp Name</DataTable.Title>
                     <DataTable.Title>Location</DataTable.Title>
                  </DataTable.Header>
                  <DataTable.Row>
                     <DataTable.Cell>13-08-2022</DataTable.Cell>
                     <DataTable.Cell>YOU CAN HELP SAVE A LIFE!</DataTable.Cell>
                     <DataTable.Cell>Panadura</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                     <DataTable.Cell>18-08-2022</DataTable.Cell>
                     <DataTable.Cell>Blood Donation Drive</DataTable.Cell>
                     <DataTable.Cell>Kalutara</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                     <DataTable.Cell>29-08-2022</DataTable.Cell>
                     <DataTable.Cell>BE A HERO DONTAE BLOOD</DataTable.Cell>
                     <DataTable.Cell>Rathmalana</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                     <DataTable.Cell>03-09-2022</DataTable.Cell>
                     <DataTable.Cell>Give Blood and Save a Life</DataTable.Cell>
                     <DataTable.Cell>Horana</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                     <DataTable.Cell>11-09-2022</DataTable.Cell>
                     <DataTable.Cell>SAVE A LIFE, GIVE YOUR BLOOD.</DataTable.Cell>
                     <DataTable.Cell>Bandaragama</DataTable.Cell>
                  </DataTable.Row>
               </DataTable>
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
      height: 600,
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
   }, tableconent: {
      top: 40,
      padding: 5,

   }, tableHeader: {
      backgroundColor: 'rgba(246, 156, 174, 1)'
   }, headername: {
      fontSize: 20,
      marginTop: 65
   }
})