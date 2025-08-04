import React from "react";
import {Image,View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity, SafeAreaView, ActivityIndicator, StatusBar} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


function UserProfileData ({label,value, icon}) {
    return (
        <View>
            <View style={styles.userName}>
                <Feather name={icon} color="#8404ae" size={26} style={styles.nameIcon}/>
                <View style={styles.userNameTextCont}>
                    <Text style={{fontSize:15,color:'#8404ae',fontWeight:500}}>{label}</Text>
                    <Text style={{fontSize:15,color:'#6d686d6f',fontWeight:500}}>{value}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userName:{
        display:'flex',
        flexDirection:'row',
        marginBottom:40,
        alignItems:'center'
    },
    userNameTextCont:{
        marginLeft:20
    },
    nameIcon:{
        backgroundColor:'#e8e8e865', 
        padding:5, 
        borderRadius:10
    }
})

export default UserProfileData