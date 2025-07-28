import React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity, Button } from 'react-native';
import check from '../assets/check.png'
import failed from '../assets/failed.png'
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";


function OrderHistoryCard ({orders}){
    const navigation = useNavigation()
    return(
        <View style={styles.orderscard}>
            <View style={styles.orderscardheader}>
                <Text style={{fontSize:15,fontWeight:550}}>{orders.id}</Text>
                {orders.status === "Delivered" 
                ?
                (<>
                <Text style={{color:'green', fontSize:15}}>Succesfull <Image source={require('../assets/check.png')} style={{width:20, height:20}}/></Text>

                </>
                ) 
                    
                : (<Text style={{color:'green', fontSize:15}}>Succesfull <Image source={require('../assets/check.png')} style={{width:20, height:20}}/></Text>)
                }

            </View>
            <View>
                {orders.items.map((item, index) => (
                    <View key={index} style={styles.orderscardbody}>
                        <View style={styles.OrderHistoryQuantityDiv}>
                            <Text>X {item.quantity}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 15 }}>{item.name}</Text>
                        </View>
                    </View>
                    ))}
            </View>
            <View style={{borderBottomColor:'grey', borderBottomWidth:0.40, borderStyle:'dashed'}}></View>
            <View style={{display:'flex', justifyContent:"center", alignItems:'center'}}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderSummary',{order:orders})}>
                    <Text style={{fontSize:15, fontWeight:400}}>View Order</Text>
                 </TouchableOpacity>
            </View>
            <View style={{display:'flex', justifyContent:'center', alignItems:'center',marginBottom:10}}>
                <Text style={{fontSize:15, fontWeight:300}}>Ordered:
                     {orders.date},{orders.time} . Bill Total: ₹{orders.billing.totalBill} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    orderscard: {
        margin:10,
        borderWidth: 0.16,
        borderRadius:8,
        backgroundColor:'white'
    },
    orderscardheader: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:40,
        backgroundColor:'#a9a9a914',
        padding:7,
        borderRadius:8
    },
    orderscardbody: {
        marginTop:5,
        marginLeft:20,
        marginBottom:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    OrderHistoryQuantityDiv: {
        backgroundColor:'#a9a9a928', 
        width:35, 
        height:25, 
        display:'flex', 
        alignItems:'center', 
        justifyContent:'center',
        borderRadius:6
    },
    button: {
        width:'80%',
        borderRadius:15,
        padding:10,
        margin:11,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#a2a2a26a'
    }
}
)

export default OrderHistoryCard
