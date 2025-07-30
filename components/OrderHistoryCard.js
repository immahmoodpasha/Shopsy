import React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity, Button } from 'react-native';
import check from '../assets/check.png'
import failed from '../assets/failed.png'
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";


function OrderHistoryCard ({orders}){
    const navigation = useNavigation()
    return(
        <TouchableOpacity onPress={() => navigation.navigate('OrderSummary',{order:orders})} activeOpacity={0.8}>
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
            <View style={{marginTop:10}}>
                {orders.items.map((item) => (
                    <View key={item.name} style={styles.orderscardbody}>
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
            {/* <View style={{display:'flex', justifyContent:"center", alignItems:'center'}}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderSummary',{order:orders})}>
                    <Text style={{fontSize:15, fontWeight:400}}>View Order</Text>
                 </TouchableOpacity>
            </View> */}
            <View style={{display:'flex', justifyContent:'center', alignItems:'center',marginBottom:10, marginTop:10}}>
                <Text style={{fontSize:15, fontWeight:300, color:'grey'}}>Ordered:
                     {orders.orderplaced},{orders.orderplacedtime} . Bill Total: ₹{orders.totalBill} </Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    orderscard: {
        margin:10,
        marginLeft:20,
        marginRight:20,
        borderWidth: 0.16,
        borderRadius:10,
        backgroundColor:'white'
    },
    orderscardheader: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:40,
        backgroundColor:'#7e55b12d',
        padding:7,
        borderRadius:10,
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
        backgroundColor:'#595e9c0d', 
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
        backgroundColor:'#7e55b154'
    }
}
)

export default OrderHistoryCard
