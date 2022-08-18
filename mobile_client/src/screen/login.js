import React,{useState} from 'react';
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
} from 'react-native'
import { color } from 'react-native-reanimated';
const Login = ({navigation}) => {
   
    const [userName,setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    function handleSubmitPress  ()  {
       const user = {
          userName,
          password
       }
       setMessage("");
       axios.post(`http://10.0.2.2:8070/login/`, user)
       .then(async  res => {
        if(res['data']['message']=="success"){
            const token = res.data.message;
            const firstName = res.data.firstName;
            const lastName = res.data.lastName;
            const type = res.data.type;
            await AsyncStorage.setItem('token', token);
            await AsyncStorage.setItem('firstName', firstName);
            await AsyncStorage.setItem('lastName', lastName);
            await AsyncStorage.setItem('type', token);

           
            const getData = async (key) => {
                // get Data from Storage
                try {
                  const data = await AsyncStorage.getItem(key);
                  if (data !== null) {
                    console.log(data);
                    return data;
                  }
                } catch (error) {
                  console.log(error);
                }
              };
            // console.log(name);    
            navigation.replace('Home');
        }else{
            setMessage("Your Username and Password is not match" );
        }
       })
       .catch(error => console.log(error));
  
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.ScrollView}>
            <View style={styles.header}>
                <ImageBackground style={styles.defaultlogo} resizeMode={'stretch'} source={require('../assests/BloodCare.png')} />
            </View>
            <View style={styles.container}>
                <Text style={styles.containerLoginText} >Log In</Text>
                <Text style={styles.containerText}>Login to your Account</Text>
            </View>
           
            <View style={styles.textInput}>
            <Text style={styles.message} >{message}</Text>
                <View style={styles.sectionStyle} >
                {/* <Text style={styles.message} >{message}</Text> */}
                <Image  style={styles.userIcon} source={require('../assests/userIcon.png')} />
                <TextInput style={styles.input} placeholder='User name' placeholderTextColor={'rgba(246, 156, 174, 1)'} keyboardType="default" onChangeText={(userName) =>
                  setUserName(userName)} />
                </View> 
                <Image  style={styles.password} source={require('../assests/passwordIcon.png')} />
                <TextInput style={styles.input} placeholder='Password' placeholderTextColor={'rgba(246, 156, 174, 1)'} keyboardType="default" secureTextEntry={true} onChangeText={(password) =>
                  setPassword(password)} />
                <Pressable style={styles.LoginButton} color="rgba(255, 63, 101, 1)" onPress={handleSubmitPress}>  
                    <Text style={styles.text}>Login</Text>
                </Pressable>
                <Text style={styles.forgetPassword}>Forget Password</Text>
            </View>
            <ImageBackground style={styles.foot} resizeMode={'stretch'} source={require('../assests/Vector200.png')} />

          </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    ScrollView: {
        backgroundColor:'rgba(255, 255, 255, 1)'
    }, defaultlogo: {
        width: '101%',
        height: 200,
        marginLeft: -5
    }, container: {
        marginTop: 11
    }, containerLoginText: {
        paddingLeft: 150,
        fontSize: 30,
        fontWeight: 'bold'
    }, containerText: {
        paddingLeft: 100,
        fontSize: 20
    }, textInput: {
        marginTop: -55,
        paddingLeft: 50,
        paddingRight: 50,
    }, sectionStyle:{
       paddingTop:10
    } ,input: {
        marginTop: -35,
        height: 48,
        margin: 20,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20,
        // paddingTop: 10, 
        textAlign :  "center" , 
        TextColor: 'rgba(255, 63, 101, 1)',
        borderColor: 'rgba(255, 63, 101, 1)'
    },userIcon:{
        marginTop:110,
        paddingTop:10,
        marginLeft:40
    },password:{
         
        paddingTop:10,
        marginLeft:40
    },
     LoginButton: {
        marginTop:40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 11,
        paddingHorizontal: 20,
        borderRadius: 11,
        elevation: 3,
        backgroundColor: 'rgba(255, 63, 101, 1)',
    }, text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },forgetPassword:{
        marginTop:11,
        fontSize:15,
       marginLeft:90
    },foot:{
        marginTop:32,
        width: '100%',
        height: 90 
    },message:{
        position: 'absolute',
        padding: 6, 
        marginTop:69,
        width:'100%', 
        marginLeft:55,
        color:'rgba(255, 63, 101, 1)' ,
       fontWeight: 'bold'
    }
})
export default Login;