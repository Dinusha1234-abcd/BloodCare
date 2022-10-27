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
export default function BloodCamp({ navigation }) {
    const regDonorNic = AsyncStorage.getItem('userNic');
   const [data, setData] = useState([]);
   const [unsuccess, setUnSuccess] = useState(false);
   const [lastRow, setLastRow] = useState(0);
   const [loading, setLoading] = useState(true);
   const [unsuccessMessage, setUnsuccessMessage] = useState("");
   const [wait, setWait] = useState(false)
   useEffect((() => {getCampMoreDetails() }),[])
   function getCampMoreDetails(){
    axios.post("http://10.0.2.2:8070/registerdonor/campAllDetail").then(
            (res) => {
                setData(res.data.allCamps);
                if(data.length <11){
                    setLastRow(data.length);
                }else {
                    setLastRow(10);
                }
                console.log(100);
                setWait(true);
                setLoading(!loading);
            }).catch((err) => {
                setLoading(!loading);
                setUnsuccessMessage("Network Connection Issue Please Try Again");
                setUnSuccess(true)
            })
   }
   const list = [];
   for (let i = 0; i < data.length; i++) {
    list.push(
        
        <View style={styles.container}>
                <Text style={styles.campName}>{wait ? data[i]['name'] : null}</Text>
                <View style={styles.contentcontainer}>
                <Text style={styles.content}>Name :{data[i]['name']}</Text>
                <Text style={styles.content}>Date :{data[i]['date'].substring(0, 10)}</Text>
                <Text style={styles.content}>Location :{data[i]['place']}</Text>
                <Text style={styles.content}>Organizer Name :{data[i]['organizerName']}</Text>
                <Text style={styles.content}>Organizer Contact No :{data[i]['phoneNumber']}</Text>
                <Pressable style={styles.RegisterButton} color="rgba(255, 63, 101, 1)" onPress={() => navigation.navigate('registerForm')}>  
                    <Text style={styles.text}>Register Now</Text>
                </Pressable>
                
                </View>
             </View>
           
          
    )
   }
    return(
        <ScrollView>
        <View style={styles.main}>
            <SlideBar nav={navigation} headerName="Blood Camp" />
            <View style={styles.sele}>
                <TextInput style={styles.search} ></TextInput>
                <Image style={styles.searchIcon} source={require('../assests/Vector.png')} />
            </View>
           
           
             {/* <View style={styles.container}> */}
                 {list}
                {/* <Text style={styles.campName}>Pepole Live When People Give</Text>
                <View style={styles.contentcontainer}>
                <Text style={styles.content}>Date       :29-August-2022</Text>
                <Text style={styles.content}>Location   :Rathmalana</Text>
                <Text style={styles.content}>Place      :MOH Hall</Text>
                <Text style={styles.content}>Time       :8.00 a.m. to 3.00 p.m.</Text>
                <Pressable style={styles.RegisterButton} color="rgba(255, 63, 101, 1)" onPress={() => navigation.navigate('registerForm')} >  
                    <Text style={styles.text}>Register Now</Text>
                </Pressable>
                
                </View>
            </View>  */}
           
        </View>
        </ScrollView>
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
        height: 400,
        left: 30,
        top: 151,
        borderRadius:20,
        backgroundColor: 'rgba(255, 255, 255, 1)',
     },scroll:{
        position: 'absolute',
     
        
     },campName:{
        position: 'absolute',
        width: 319,
        height: 23,
        left: 35,
        top: 30,
        fontSize:20,
        marginBottom:50,
        color:'rgba(255, 101, 101, 1)',

     },content:{
        fontSize:16,
        marginLeft:30,
        marginTop:30
     },contentcontainer:{
        position:'absolute',
        marginTop:50
     },map:{
        marginTop:20,
     },RegisterButton:{
        marginTop:10,
        marginLeft:120,
        backgroundColor:'rgba(220, 231, 236, 1)',
        borderRadius:10,
        marginRight:50,
        height:40
     },text:{
        marginLeft:5,
        marginTop:5,
        fontSize:18,
        color:'rgba(1, 95, 250, 1)',
     }
})