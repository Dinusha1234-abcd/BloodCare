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
export default function BloodCamp({ navigation }) {
    return(
        <View style={styles.main}>
            <SlideBar nav={navigation} headerName="Blood Camp" />
            <View style={styles.sele}>
                <TextInput style={styles.search} ></TextInput>
                <Image style={styles.searchIcon} source={require('../assests/Vector.png')} />
            </View>
            <View style={styles.container}>
                <Text style={styles.campName}>Pepole Live When People Give</Text>
                <Text style={styles.content}></Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        backgroundColor:'rgba(253, 223, 229, 1)'
    },sele:{
        position:'absolute',
        marginTop:60
    },search:{
        position: 'absolute',
      width: 330,
      height: 40,
      left: 30,
      top: 35,
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
        marginLeft: 50,
  
     },container:{
        position: 'absolute',
        width: 329,
        height: 500,
        left: 30,
        top: 151,
        borderRadius:20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        
     },campName:{
        position: 'absolute',
        width: 319,
        height: 23,
        left: 35,
        top: 30,
        fontSize:20,
        color:'rgba(255, 101, 101, 1)',

     }
})