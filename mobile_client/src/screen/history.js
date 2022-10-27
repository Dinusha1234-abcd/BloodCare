import React,{useState,useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

export default function History({ navigation }) {
   const regDonorNic = AsyncStorage.getItem('userNic');
   const [data, setData] = useState([]);
   const [unsuccess, setUnSuccess] = useState(false);
   const [lastRow, setLastRow] = useState(0);
   const [loading, setLoading] = useState(true);
   const [unsuccessMessage, setUnsuccessMessage] = useState("");
   const CONTENT = {
      tableHead: ['Date', 'Donation Packet No', 'Location'],
      tableData: [],
   };
   useEffect((() => { getHistoryRecords() }), [])
   function getHistoryRecords() {
      const regDonorNic ='981234566V';
      const regDonor = {
          regDonorNic
      }
      axios.post(`http://10.0.2.2:8070/registerdonor/historyrecordsselect/`, regDonor).then(
            (res) => {
                setData(res.data.records);
                if (data.length < 11) {
                    setLastRow(data.length);
                } else {
                    setLastRow(10);
                }
                console.log(lastRow);
                setLoading(!loading);
            }).catch((err) => {
                setLoading(!loading);
                setUnsuccessMessage("Network Connection Issue Pleace Try Again");
                setUnSuccess(true)
            })
   }
   for (let i = 0; i < data.length; i++) {
      CONTENT.tableData.push(
         [data[i]['date'].substring(0, 10), data[i]['bloodCounterNumber'],data[i]['place']]
         )
   }
   return (
      <View style={styles.main}>
         <SlideBar nav={navigation} headerName="History" />
         <View style={styles.history}>
            {/* <Text style={styles.totaldonote}>Total Donate 4/10</Text> */}
            {/* <Image style={styles.cdonate} source={require('../assests/totald.png')}></Image>
            <Image style={styles.badge} source={require('../assests/badge.png')}></Image> */}
            <Image style={styles.blood} source={require('../assests/bloodOp.png')}></Image>
            <View style={styles.historyrecoder}>
            <TextInput style={styles.search} ></TextInput>
            <Image style={styles.searchIcon} source={require('../assests/Vector.png')} />
            <View style={styles.tablecontent}>
               <Table borderStyle={{ borderWidth: 1, borderColor: 'pink' }}>
                  <Row data={CONTENT.tableHead}
                     flexArr={[1, 2, 1]}
                     style={styles.head}
                     textStyle={styles.textheader} />
                  <TableWrapper style={styles.wrapper}>
                     <Col
                        heightArr={[28, 28]}
                        textStyle={styles.text}
                     />

                     <Rows
                        data={CONTENT.tableData}
                        flexArr={[1, 2, 1]}
                        style={styles.row}
                        textStyle={styles.text}
                     />
                  </TableWrapper>
               </Table>
               </View>
            </View>

         </View>
      </View>)
}
const styles = StyleSheet.create({
   main: {
      backgroundColor: 'rgba(253, 223, 229, 1)'
   }, historyr: {
      position: 'absolute',
      marginTop: 300,
      marginLeft: 25
   }, history: {
      position: 'absolute'
   }, blood: {
      marginTop: 20,
      marginLeft: 30
   }, totaldonote: {
      marginTop: 100,
      fontSize: 20,
      marginLeft: 10
   }, cdonate: {
      marginLeft: 10,
   }, badge: {
      marginTop: -50,
      marginLeft: 280,
   }, search: {
      position: 'absolute',
      width: 320,
      height: 40,
      left: 30,
      marginTop:10,
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
      marginTop: 15,
      marginLeft: 60,

   }, tablecontent: {
      marginTop: 30,
      padding: 10
   },
   container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
   head: { height: 40, backgroundColor: 'pink', },
   wrapper: { flexDirection: 'row' },
   row: { height: 30 },
   text: {
      textAlign: 'center', fontSize: 14
   }, textheader: {
      textAlign: 'center',
      fontSize: 18
   },historyrecoder:{
      position: 'absolute',

      marginTop: 250,
      marginLeft: 10,
      width: 370,
      height: 350,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: 10
   }

})
