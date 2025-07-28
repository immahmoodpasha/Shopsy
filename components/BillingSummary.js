import React from "react";
import { View, Text, StyleSheet } from 'react-native';

function BillingSummary ({label, value}){
    return(
        <View style={{marginLeft:10,marginBottom:10, display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <View>
                <Text style={{fontSize:16,color:'#000000eb'}}>{label}</Text>
            </View>
            <Text style={{fontSize:16,marginRight:30}}>₹ {value}</Text>
        </View>     
    )
}

export default BillingSummary