    import React from "react";
    import {Image,View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity, SafeAreaView, ActivityIndicator, StatusBar} from 'react-native';
    import failed from '../assets/failed.png'
    import { useRoute } from '@react-navigation/native';
    import user from '../assets/profile-picture.png'
    import { useState, useEffect } from "react";
    import Feather from 'react-native-vector-icons/Feather';
    import UserProfileData from "../components/UserProfileData";
    import axios from 'axios'
    import UserProfile from "./UserProfile";
    import Entypo from 'react-native-vector-icons/Entypo';
    import { useNavigation} from '@react-navigation/native';
import apiClient from "../apiClient";


    function EditProfile(){
        const navigation = useNavigation()
        const route = useRoute()
        const {profileData} = route.params

        const [data, setData] = useState(null)
        const [name, setName]= useState(profileData.name|| "")
        const [email, setEmail] = useState(profileData.email ||"")
        const [phoneNumber, setPhoneNumber] = useState(profileData.phoneNumber || "")
        const [address, setAddress] = useState(profileData.address || "")
        const url= '/api/customer/edit-profile'

        const handleSave = async()=>{
            const newData = {name,email,phoneNumber,address}
            try{
                console.log(newData)
                const res = await apiClient.put(url,newData)
                navigation.goBack()
            }
            catch(err){
                console.error('Data Not Saved', err)
            }
        }

        return (
            <SafeAreaView style={styles.SafeAreview}>
                <View style={styles.header}>
                    <Entypo name="chevron-left" size={35} style={styles.backIcon} onPress={()=>navigation.goBack()}/>
                    <Text style={styles.edityourprofile}>Edit Your Profile</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="name" style={styles.input} value={name} onChangeText={setName} />
                    <TextInput style={styles.input} value={email}  editable={false} />
                    <TextInput placeholder="phonenumber" style={styles.input} value={phoneNumber} onChangeText={setPhoneNumber} />
                    <TextInput placeholder="address" style={styles.input} value={address} onChangeText={setAddress} />   
                    {/* selection={{ start: 0, end: 0 }} */}
                </View>
                <View style={styles.savebtnContainer}>
                    <TouchableOpacity onPress={()=>handleSave()} style={styles.saveBtn}>
                        <Text style={{color:'white'}}>Save</Text>
                    </TouchableOpacity>
                </View>
                    
            </SafeAreaView>
        )
    }

    const styles = StyleSheet.create({
        SafeAreview:{
            marginTop:StatusBar.currentHeight
        },
        header:{
            display:'flex', 
            flexDirection:'row', 
            alignItems:'center', 
            marginTop:20
        },
        backIcon:{
            marginLeft:10
        },
        edityourprofile:{
            fontSize:25, 
            marginLeft:25
        },
        line:{
            borderBottomWidth:0.3, 
            borderBottomColor:'grey', 
            marginTop:10, 
            marginBottom:10
        },
        input:{
            borderWidth: 1,
            borderColor: "#8404ae",
            borderRadius: 10,
            padding: 10,
            fontSize: 16,
            marginBottom: 15,
            width:'80%'            
        },
        inputContainer:{
            gap:10,
            marginTop:20,
            display:'flex',
            alignItems:'center'
        },
        savebtnContainer:{
            display:'flex', 
            alignItems:'center'
        },
        saveBtn: {
            backgroundColor: "#8404ae",
            padding: 12,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 10,
            width:'80%',
        
        }
    })



    export default EditProfile;