import React from "react";
import {Image,View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity, SafeAreaView, ActivityIndicator, StatusBar} from 'react-native';
import failed from '../assets/failed.png'
import { useRoute } from '@react-navigation/native';
import user from '../assets/profile-picture.png'
import { useState, useEffect } from "react";
import Feather from 'react-native-vector-icons/Feather';
import UserProfileData from "../components/UserProfileData";
import axios from 'axios'
import EditProfile from "../screens/EditProfile";
import { useNavigation} from '@react-navigation/native';

function UserProfile(){
    const navigation = useNavigation()
    const url= 'http://192.168.43.182:3113/userProfile'

    const [data, setData] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")

    useEffect(()=>{
        axios.get(url)
            .then((response)=>{
                const data =  response.data
                if (data && Object.keys(data).length !== 0) {
                setData(data);
                 }
                 setisLoading(false);
            })
            .catch((err)=> console.error('failed to fetch data', err))
    }, [data])

    const handleSave = async () => {
        if (name && email && number && address) {
            const newUser = { name, email, number, address };
            try {
            await axios.put(url, newUser);
            setData(newUser);
            } catch (err) {
            console.log("Failed to save user profile", err);
            }
        }
    };
    return (
        <SafeAreaView style={styles.Main}>
                <View style={styles.Header}>
                    <View style={styles.HeaderImgCont}>
                        <Image
                            source={user}
                            style={styles.HeaderImg}
                        />
                    </View>
                </View>
                {isLoading ? (<ActivityIndicator size="large" color="blue" />):
                 data ? (
                <View style={styles.PersonalInfoCard}>
                    <View style={styles.PersonalInfoCardHeading}>
                        <Text style={styles.PersonalInfoText}>Personal Details</Text>
                        <Feather name="edit" color="#8404ae" size={24} onPress={()=>navigation.navigate('EditProfile', {profileData: data})} />
                    </View>
                    <UserProfileData label="Name" value={data.name} icon="user"/>
                    <UserProfileData label="Mobile" value={data.number} icon="phone-call"/>
                    <UserProfileData label="Email" value={data.email} icon="mail"/>
                    <UserProfileData label="Home address" value={data.address} icon="user"/>
                </View>
                ) : (
                    <View style={styles.PersonalInfoCard}>
                        <Text style={styles.PersonalInfoText}>Enter Your Details</Text>
                        <View style={{marginTop:15, gap:10}}>
                                <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
                                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
                                <TextInput style={styles.input} placeholder="Phone Number" value={number} onChangeText={setNumber} />
                                <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
                        </View>
                        <View style={{display:'flex', alignItems:'center'}}>
                            <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                                <Text style={{ color: "white", fontWeight: "bold" }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )

                }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Main: {
        backgroundColor:'#e9e9e9ff',
        height:1000
    },
    Header: {
        backgroundColor:'#8404ae', 
        height:150,
        borderBottomEndRadius:80, 
        borderBottomLeftRadius:80
    },
    HeaderImgCont: {
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center',
        marginTop:150
    },
    HeaderImg:{
        height: 150,
        width: 150,
        borderWidth:5,
        borderRadius:75,
        borderColor:'#8404ae'
    },
    PersonalInfoCard:{
        backgroundColor:'#ffffffff', 
        height:400,
        marginTop:100,
        marginLeft:20,
        marginRight:20,
        borderRadius:30,
        padding:20,
        borderWidth:1,
        borderBottomWidth:10,
        borderColor:'#8404ae'
    },
    PersonalInfoCardHeading:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
    },
    PersonalInfoText:{
        fontSize:25,
        fontWeight:500,
        color:'#8404ae'
    }
    ,
    input: {
        borderWidth: 1,
        borderColor: "#8404ae",
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        marginBottom: 15,
  },
    saveBtn: {
        backgroundColor: "#8404ae",
        padding: 12,
        marginTop: 10,
        alignItems: "center",
        borderRadius: 10,
        width:'60%'
    }
});

export default UserProfile