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
         <Image style={styles.historyr} source={require('../assests/history.png')}></Image>

      </View>
   </View>)
}
const styles = StyleSheet.create({
   main:{
      backgroundColor: 'rgba(253, 223, 229, 1)'
   },historyr:{
      position:'absolute',
      marginTop:250,
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
   }

})
