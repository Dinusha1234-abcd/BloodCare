import React, { useStae, useState } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
const SlideBar = (props)  =>{
    const [show, setShow] = useState(false);
    const [option, setOption] = useState(false);
    
   function Logout ( ){ 
    console.log("call");
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('firstName'); 
    AsyncStorage.removeItem('lastName');
    AsyncStorage.removeItem('type');
    props.nav.replace('Login');
   }
    function navgationToHome({navigation}){
        props.nav.replace('Home');
    }
    function navigationToHistory(){
        props.nav.replace('History');
    }
    function navgationToCalender(){
        props.nav.replace('Calendar');
     }
    return (
        <><View style={styles.slideBarHeadertab}>
            <Pressable onPress={() => { setShow(!show) }}><Image style={styles.slideBaruserIcon} source={require('../assests/menu.png')} onPress={() => { setShow(!show) }} /></Pressable>

            <Text style={styles.slideBarHeaderName}>{props.headerName}</Text>
            <Image style={styles.slideBaruserIconuser} source={require('../assests/user.png')} />
            <Image style={styles.slideBaruserIconnotification} source={require('../assests/notification.png')} />
            <Pressable  onPress={() => { setOption(!option) }}><Image style={styles.slideBaruserIconselect} source={require('../assests/select.png')} /></Pressable>

        </View>
            <View style={option ? styles.selecttabActive : styles.selecttab}>
                <Pressable style={styles.viewProfile} color="rgba(255, 63, 101, 1)" onPress={Logout}  >

                    <Text style={styles.profile}>Log Out</Text>
                </Pressable>
            </View>
            <View style={show ? styles.slideBarActive : styles.slideBar} >
                <Pressable style={styles.HomeButton} color="rgba(255, 63, 101, 1)" onPress={navgationToHome} >

                    <Text style={styles.NavText}>  <Image style={styles.homeicon} source={require('../assests/home.jpg')} />{"   "} Home</Text>
                </Pressable>
                <Pressable style={styles.CalendarButton} color="rgba(255, 63, 101, 1)" onPress={navgationToCalender} >

                    <Text style={styles.NavText}>  <Image style={styles.calender} source={require('../assests/calendar.jpg')} />{"  "}  Calendar</Text>
                </Pressable>
                <Pressable style={styles.HistoryButton} color="rgba(255, 63, 101, 1)" onPress={navigationToHistory}  >
                    <Text style={styles.NavTextCalendar}> <Image style={styles.history} source={require('../assests/history.jpg')} />{"  "} History</Text>
                </Pressable>
      </View></>
    )

}
const styles = StyleSheet.create({
    slideBarHeadertab: {
        width: '100%',
        height: 55,
        backgroundColor: 'rgba(221, 45, 80, 0.79)',
    }, slideBaruserIcon: {
        width: 40,
        height: 40,
        marginTop: 10,
        marginLeft: 11
    }, slideBarHeaderName: {
        marginLeft: 55,
        paddingLeft: 11,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -33,
        color: 'rgba(255, 255, 255, 1)'
    }, slideBaruserIconuser: {
        position: 'absolute',
        right: 100,
        top: 11,
        width: 30,
        height: 30
    }, slideBaruserIconnotification: {
        position: 'absolute',
        right: 55,
        top: 15,
        width: 22,
        height: 22

    }, slideBaruserIconselect: {
        position: 'absolute',
        right: 11,
        top: -30,
        width: 22,
        height: 22

    }, slideBar: {
        marginLeft: -300,
        height: 801,
        width: '40%',
        backgroundColor: 'rgba(221, 45, 80, 0.79)',
        transition: '0.11s'
    }, slideBarActive: {
        height: 800,
        paddingTop: 30,
        width: '50%',
        backgroundColor: 'rgba(221, 45, 80, 0.79)'
    }, NavText: {
        margin: 11,
        marginTop: 6,
        padding: 6,
        paddingTop: 11,
        transition: '0.11s',
        fontSize: 20,

        color: 'white',
    }, homeicon: {
        height: 23,
        width: 23,

    }, calender: {
        height: 23,
        width: 23
    }, history: {
        height: 30,
        width: 30,
        marginLeft:20
    } ,NavTextCalendar:{
          marginLeft:20,
          fontSize: 20,
          marginTop: 6,
          color: 'white',
    },selecttabActive:{
        position:'absolute',
        right:3,
        top:68,
        borderRadius: 10,
        width:120,
        height: 41,
        padding:6,
        backgroundColor:'rgba(221, 45, 80, 0.79)' 
    },selecttab:{
        display: 'none',
        position:'absolute',
        right:3,
        top:68,
        borderRadius: 10,
        width:120,
        height: 41,
        padding:6,
        backgroundColor:'rgba(221, 45, 80, 0.79)' 
    },profile:{
       paddingLeft:20,
       color:'black',
       backgroundColor:'white',
        fontSize:20,
        borderRadius: 10,
    }
}) 
export default SlideBar;