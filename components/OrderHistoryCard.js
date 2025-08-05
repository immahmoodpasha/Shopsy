import React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity, Button, ScrollView } from 'react-native';
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
                <Text style={{fontSize:11,fontWeight:'bold'}}>{orders.id}</Text>
                {orders.status === "Delivered" 
                ?
                (<>
                <Text style={{color:'green', fontSize:12}}>Successfull <Image source={require('../assets/check.png')} style={{width:20, height:20}}/></Text>

                </>
                ) 
                    
                : (<Text style={{color:'red', fontSize:12}}>Pending...</Text>)
                }

            </View>
            <ScrollView style={styles.scrollItemsSection}>
            <View style={{marginTop:10}}>
                {orders.items.map((item, index) => (
                    <View key={`${item.name}-${index}`} style={styles.orderscardbody}>
                        <View style={styles.OrderHistoryQuantityDiv}>
                            <Text>X {item.quantity}</Text>
                        </View>
                        <View style={{width: '80%'}}>
                            <Text style={{ fontSize: 15 }} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                        </View>
                    </View>
                    ))}
            </View>
            </ScrollView>
            <View style={{borderBottomColor:'grey', borderBottomWidth:0.40, borderStyle:'dashed'}}></View>
            {/* <View style={{display:'flex', justifyContent:"center", alignItems:'center'}}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderSummary',{order:orders})}>
                    <Text style={{fontSize:15, fontWeight:400}}>View Order</Text>
                 </TouchableOpacity>
            </View> */}
            <View style={{display:'flex', justifyContent:'center', alignItems:'center',marginBottom:10, marginTop:10}}>
                <Text style={{fontSize:15, fontWeight:300, color:'grey'}}>Ordered:
                     {orders.orderplaced},{orders.orderplacedtime} . Bill Total: ₹{orders.billing?.totalBill} </Text>
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
        borderWidth: 1,
        borderColor:'#8404ae',
        borderRadius:11,
        borderBottomWidth:5,
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
        borderColor:'#8404ae'
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
        backgroundColor:'#7e55b11c', 
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
    },
    scrollItemsSection:{
        maxHeight:130,
    }
}
)

export default OrderHistoryCard
