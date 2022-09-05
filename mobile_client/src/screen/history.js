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
const CONTENT = {
   tableHead: ['Date', 'Donation Packet No', 'Location'],
   tableData: [
      ['04-07-2022', 'D 000 8574 555', 'Panadura'],
      ['18-05-2019', 'D 000 5675 273', 'Colombo'],
      ['25-09-2017', 'D 00 98 2634 59', 'Rathmalana'],
      ['30-11-2016', 'D 00 16 2054 17', 'Horana'],
      ['07-09-2015', 'D 00 58 4057 83', 'Kalutara'],
   ],
};
export default function History({ navigation }) {
   return (
      <View style={styles.main}>
         <SlideBar nav={navigation} headerName="History" />
         <View style={styles.history}>
            <Text style={styles.totaldonote}>Total Donate 4/10</Text>
            <Image style={styles.cdonate} source={require('../assests/totald.png')}></Image>
            <Image style={styles.badge} source={require('../assests/badge.png')}></Image>
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
