import React from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, Button, SafeAreaView, StatusBar } from 'react-native';

function OrderDetailsComponent({label, value}){
    return (
    <View style={{marginTop:10}}>
        <Text style={{fontSize:18, color:'grey'}}>{label}</Text>
        <Text>{value}</Text>
    </View>
    )
}

export default OrderDetailsComponent