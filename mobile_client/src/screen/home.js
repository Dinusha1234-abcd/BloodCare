import React,{useState} from 'react';
import axios from 'axios';
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

// const CONTENT = {
//    tableHead: ['Date', 'Camp Name', 'Location'],
//    tableData: [
//       ['13-08-2022', 'YOU CAN HELP SAVE A LIFE!', 'Panadura'],
//       ['18-08-2022', 'Blood Donation Drive', 'Kalutara'],
//       ['29-08-2022', 'BE A HERO DONTAE BLOOD', 'Rathmalana'],
//       ['03-09-2022', 'Give Blood and Save a Life', 'Horana'],
//       ['11-09-2022', 'SAVE A LIFE, GIVE YOUR BLOOD.', 'Bandaragama'],
//    ],
// };
export default function Home({ navigation }) {
   const regDonorNic = localStorage.getItem('userNic');
   const CONTENT = {
      tableHead: ['Date', 'Camp Name', 'Location'],
      tableData: [
         // ['13-08-2022', 'YOU CAN HELP SAVE A LIFE!', 'Panadura'],
         // ['18-08-2022', 'Blood Donation Drive', 'Kalutara'],
         // ['29-08-2022', 'BE A HERO DONTAE BLOOD', 'Rathmalana'],
         // ['03-09-2022', 'Give Blood and Save a Life', 'Horana'],
         // ['11-09-2022', 'SAVE A LIFE, GIVE YOUR BLOOD.', 'Bandaragama'],
      ],
   };
   useEffect((() => { getCampData() }), [])
   function getCampData() {
      const regDonorNic =localStorage.getItem('userNic');
      const regDonor = {
          regDonorNic
      } 
      axios.post(`http://10.0.2.2:8070/registerdonor/homeselectcamp`, regDonor).then()
   }

   return (
      <View style={styles.main}>

         <SlideBar nav={navigation} headerName="Home" />
         <View style={styles.tablecontainer}>
            <View>
               <Text style={styles.headername}>Your Area Upcoming Camp</Text>

            </View>
            <View>
               <TextInput style={styles.search} ></TextInput>
               <Image style={styles.searchIcon} source={require('../assests/Vector.png')} />
               <View style={styles.tablecontent}>
               <Table borderStyle={{ borderWidth: 1,borderColor: 'pink'}}>
                  <Row data={CONTENT.tableHead}
                     flexArr={[1, 3, 1]}
                     style={styles.head}
                     textStyle={styles.textheader} />
                  <TableWrapper style={styles.wrapper}>
                     <Col
                        heightArr={[28, 28]}
                        textStyle={styles.text}
                     />

                     <Rows
                        data={CONTENT.tableData}
                        flexArr={[1, 3, 1]}
                        style={styles.row}
                        textStyle={styles.text}
                     />
                  </TableWrapper>
               </Table>
               </View>
               <Image style={styles.homeI} source={require('../assests/donate.png')}></Image>
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
      backgroundColor: 'rgba(255, 255, 255, 1)',
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
   }, searchIcon: {
      marginTop: 35,
      marginLeft: 80,

   }, tableconent: {
      top: 40,
      padding: 5,
      fontSize: 8

   }, tableHeader: {
      backgroundColor: 'rgba(246, 156, 174, 1)'
   }, headername: {
      fontSize: 20,
      marginTop: 40,
      marginLeft: 60
   }, upcomigcamp: {
      marginTop: 20,
      marginLeft: 15
   }, search: {
      position: 'absolute',
      width: 320,
      height: 40,
      left: 30,
      top: 30,
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
      marginTop: 45,
      marginLeft: 60,

   },tablecontent:{
      marginTop:30,
      padding:10
   },
   container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
   head: { height: 40, backgroundColor: 'pink', },
   wrapper: { flexDirection: 'row' },
   row: { height: 30 },
   text: { textAlign: 'center',fontSize:10
   },textheader:{
      textAlign:'center', 
      fontSize:14
   },homeI:{
      opacity:0.3,
      

   }




})