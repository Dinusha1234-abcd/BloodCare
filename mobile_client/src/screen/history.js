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
         <Image style={styles.historyr} source={require('../assests/history.png')}></Image>

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

   }

})
