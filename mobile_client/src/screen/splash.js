import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { ScrollView, StyleSheet,View, Text,ImageBackground,Button } from "react-native";

const Splash = () => {

    const [isGo,setIsGo] = React.useState(true);
    const navigation = useNavigation();

    React.useEffect(()=>{
        if(isGo==true){
            setTimeout( () =>{
                navigation.navigate("Login"); 
                setIsGo(false);        
             },2000)}
        }
     ) 

    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.header}>
                <ImageBackground style={styles.defaultlogo} resizeMode={'stretch'} source={require('../assests/bloodcareIcon2.png')} />
                <Text style={styles.name} >BloodCare</Text>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    ScrollView:{
        backgroundColor:'rgba(255, 255, 255, 1)'
    },
    defaultlogo: {
        width: 150,
        height:110,
        marginLeft: 120,
        marginTop:250
    },
    name:{
        marginTop:20,
        marginLeft:120,
        fontWeight:'bold',
        color:'red',
        fontSize:30
    }
})

export default Splash;     