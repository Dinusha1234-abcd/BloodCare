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
   tableHead: ['Date', 'Camp Name', 'Location'],
   tableData: [
      ['13-08-2022', 'YOU CAN HELP SAVE A LIFE!', 'Panadura'],
      ['18-08-2022', 'Blood Donation Drive', 'Kalutara'],
      ['29-08-2022', 'BE A HERO DONTAE BLOOD', 'Rathmalana'],
      ['03-09-2022', 'Give Blood and Save a Life', 'Horana'],
      ['11-09-2022', 'SAVE A LIFE, GIVE YOUR BLOOD.', 'Bandaragama'],
   ],
};
export default function History({navigation}){
   return(
   <View style={styles.main}>
      <SlideBar  nav={navigation} headerName="History"/>
      <View style={styles.history}>
         <Text style={styles.totaldonote}>Total Donate 4/10</Text>
         <Image style={styles.cdonate} source={require('../assests/totald.png')}></Image>
         <Image style={styles.badge} source={require('../assests/badge.png')}></Image>
         <Image style={styles.blood} source={require('../assests/bloodOp.png')}></Image>
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

      </View>
   </View>)
}
const styles = StyleSheet.create({
   main:{
      backgroundColor: 'rgba(253, 223, 229, 1)'
   },historyr:{
      position:'absolute',
      marginTop:300,
      marginLeft:25
   },history:{
      position:'absolute'
   },blood:{
      marginTop:20,
      marginLeft:30
   },totaldonote:{
      marginTop:100,
      fontSize:20,
      marginLeft:10
   },cdonate:{
      marginLeft:10,
   },badge:{
      marginTop:-50,
      marginLeft:280,
   }, search: {
      position: 'absolute',
      width: 320,
      height: 40,
      left: 30,
      top: 240,
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
