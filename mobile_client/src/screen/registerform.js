import React,{useState,useEffect} from 'react';
import axios from 'axios';
import RadioButtonRN from 'radio-buttons-react-native';
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
export default function registerForm({ navigation }) {
    const regDonorNic = AsyncStorage.getItem('userNic');
    const [data, setData] = useState([]);
    const [unsuccess, setUnSuccess] = useState(false);
    const [lastRow, setLastRow] = useState(0);
    const [loading, setLoading] = useState(true);
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    // const [data, setData] = useState([]);
    // const [unsuccess, setUnSuccess] = useState(false);
    // const [lastRow, setLastRow] = useState(0);
    // const {id} =useParams()
    // const [loading, setLoading] = useState(true);
    // const [unsuccessMessage, setUnsuccessMessage] = useState("");
    // useEffect ((() => {getCampId()}), [])
    // useEffect ((() => {getCampId()}), [])
    // function getCampId() {
    //     const Id ='2';
    //     const userNic = '981234566V';
    //     const camp = {
    //         id,
    //         userNic,
    //         value
    //     }
    //     axios.post("http://10.0.2.2:8070/registerdonor/registerform",camp).then(
    //         (res) => {

    //             setData(res.data.camps);
    //             setcampName(res.data.campName);
    //             // setFirstName(res.data.camps[0].firstName);
    //             // setLastName(res.data.camps[0].lastName);
    //             // setcampName(res.data[0].campName);
    //             setLoading(!loading);
    //             console.log(lastRow);
    //             setWait(true);
               
    //         }).catch((err) => {
    //             //sever 
    //                 setLoading(!loading);
    //                 setUnsuccessMessage("Network Connection Issue Please Try Again");
    //                 setUnSuccess(true)
    //         })
    // }
     const changeVeg = () => {
        setValue('veg')
     }
     const changeNonVeg = () => {
        setValue('nonveg')
     }

    // function registerCamp(){
    //     const Id =id;
    //     const userNic = regDonorNic;
    //     const   user = {
    //         id,
    //         userNic,
    //         value
    //     }
    //     axios.post("http://10.0.2.2:8070/registerdonor/registerformUpdate",user).then(
    //         (res) => {
    //             //check password and username  
    //             if (res['data']['message'] == "success") {
    //                 // showUpdateDonor(data[0].firstName,data[0].userNic,data[0].lastName,data[0].phoneNumber,data[0].address, data[0].district,data[0].email, data[0].province);
    //                 setWait(false);
    //                 setSuccessMessage("Doctor Update Sucessfully")
    //                 setSuccess(true);

    //             } else {
    //                 setWait(false);
    //                 setUnsuccessMessage("Doctor Update UnSucessfully");
    //                 setUnSuccess(true);

    //             }

    //         }
    //     ).catch((err) => {
    //         //sever error
    //         console.log(err.message);
    //         setWait(false);
    //         setUnsuccessMessage("Network Connection Issue Please Try Again");
    //         setUnSuccess(true);
    //      } )

         
    // }

    
    return(
        <ScrollView>
        <View style={styles.main}>
             <SlideBar nav={navigation} headerName="Register Form" />
                <View style={styles.form}>
                <Text style={styles.headname}>Register Form</Text>
                <Text style={styles.campName}>Blood Donation</Text>
                <View style={styles.formconent}>
                <Text style={styles.lable}>Camp ID</Text>
                <TextInput style={styles.content1} placeholder='3' ></TextInput>
                <Text style={styles.lable}>Camp Name</Text>
                <TextInput style={styles.content2} placeholder='Blood Donation'></TextInput>
                <Text style={styles.lable}>Name</Text>
                <TextInput style={styles.content3} placeholder='Kalshi Lakeesha'></TextInput>
                <Text style={styles.lable}>NIC</Text>
                <TextInput style={styles.content4} placeholder='981234566V'></TextInput>
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