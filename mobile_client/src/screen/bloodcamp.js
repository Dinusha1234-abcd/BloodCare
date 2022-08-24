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
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        backgroundColor:'rgba(253, 223, 229, 1)'
    }
})