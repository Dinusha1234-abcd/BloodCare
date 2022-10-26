import React,{useState,useEffect} from 'react';
import axios from 'axios';
import RadioButtonRN from 'radio-buttons-react-native';

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
export default function registerForm({ navigation }) {
    
    // const [data, setData] = useState([]);
    // const [unsuccess, setUnSuccess] = useState(false);
    // const [lastRow, setLastRow] = useState(0);
    // // const {id} =useParams()
    // const [loading, setLoading] = useState(true);
    // const [unsuccessMessage, setUnsuccessMessage] = useState("");
    // useEffect ((() => {getCampId()}), [])
    
    return(
        <ScrollView>
        <View style={styles.main}>
             <SlideBar nav={navigation} headerName="Register Form" />
                <View style={styles.form}>
                <Text style={styles.headname}>Register Form</Text>
                <Text style={styles.campName}>Camp Name</Text>
                <View style={styles.formconent}>
                <Text style={styles.lable}>Camp ID</Text>
                <TextInput style={styles.content1} ></TextInput>
                <Text style={styles.lable}>Camp Name</Text>
                <TextInput style={styles.content2} ></TextInput>
                <Text style={styles.lable}>Name</Text>
                <TextInput style={styles.content3} ></TextInput>
                <Text style={styles.lable}>NIC</Text>
                <TextInput style={styles.content4} ></TextInput>
                <Text style={styles.lable}>Are you vegetarian or not?</Text>
                <RadioButtonRN />
                <RadioButtonRN />
                </View>
                <Pressable style={styles.RegisterButton} color="rgba(255, 63, 101, 1)" >  
                    <Text style={styles.text}>Register</Text>
                </Pressable>
                <Pressable style={styles.RegisterCancel} color="rgba(255, 63, 101, 1)" >  
                    <Text style={styles.text1}>Cancel</Text>
                </Pressable>
                </View>

        </View>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    main: {
        backgroundColor: 'rgba(253, 223, 229, 1)'
    },form :{
        position: 'absolute',

        marginTop: 110,
        marginLeft: 10,
        width: 370,
        height: 600,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 20 
    },headname :{
        position: 'absolute',
        width: 319,
        height: 30,
        left: 125,
        top: 20,
        fontSize:22,
        marginBottom:5,
        color:'rgba(255, 101, 101, 1)',

    },campName :{
        position: 'absolute',
        width: 319,
        height: 30,
        left: 125,
        top: 50,
        fontSize:20,
        marginBottom:5,
        color:'rgba(255, 101, 101, 1)', 
    },lable :{
        fontSize:20,
         marginTop:40,
        marginLeft:20
    },content1 :{
        position: 'absolute',
      width: 320,
      height: 40,
      left: 10,
      marginTop: 70,
      borderColor: 'rgba(0, 0, 0, 0.2)',
      borderWidth: 1,
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: {
         width: 0,
         height: 3,
    },
    shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      backgroundColor: 'rgba(253, 223, 229, 1)',
      borderRadius: 10,
      textAlign: "center",
      fontSize: 20
    },formconent:{
        position : "absolute",
        fontSize:20,
         marginTop:80,
        marginLeft:20
    },content2 :{
        position: 'absolute',
      width: 320,
      height: 40,
      left: 10,
      marginTop: 135,
      borderColor: 'rgba(0, 0, 0, 0.2)',
      borderWidth: 1,
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: {
         width: 0,
         height: 3,
    },
    shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      backgroundColor: 'rgba(253, 223, 229, 1)',
      borderRadius: 10,
      textAlign: "center",
      fontSize: 20
    },content3:{
        position: 'absolute',
        width: 320,
        height: 40,
        left: 10,
        marginTop: 200,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: {
           width: 0,
           height: 3,
      },
      shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'rgba(253, 223, 229, 1)',
        borderRadius: 10,
        textAlign: "center",
        fontSize: 20
    },content4 :{
        position: 'absolute',
        width: 320,
        height: 40,
        left: 10,
        marginTop: 265,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: {
           width: 0,
           height: 3,
      },
      shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'rgba(253, 223, 229, 1)',
        borderRadius: 10,
        textAlign: "center",
        fontSize: 20
    },RegisterButton :{
        marginTop:550,
        marginLeft:120,
        backgroundColor:'rgba(253, 223, 229, 1)',
        borderRadius:10,
        marginRight:50,
        height:40,
        width: 100,
    },text:{
        marginLeft:15,
        marginTop:5,
        fontSize:18,
        color:'rgba(255, 101, 101, 1)',
     },RegisterCancel :{
        marginTop:-40,
        marginLeft:230,
        backgroundColor:'rgba(38, 168, 38, 0.3)',
        borderRadius:10,
        marginRight:50,
        height:40,
        width: 100,
    },text1:{
        marginLeft:20,
        marginTop:5,
        fontSize:18,
        color:'rgba(38, 168, 38, 1)',
    }

})