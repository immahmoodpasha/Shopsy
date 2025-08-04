import React, { useEffect } from "react"
import { View, Text, StyleSheet,Image, TouchableOpacity, Button, SafeAreaView, StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import check from "../assets/check.png"
import cross from"../assets/failed.png"
import axios from "axios";
import { useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import BillingSummary from "../components/BillingSummary";
import OrderDetailsComponent from "../components/OrderDetailsComponent"
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
function OrderSummary(){
    const route = useRoute();
    const { order } = route.params;
    const navigation = useNavigation()

    return (
        <ScrollView style={{backgroundColor:'white'}}>
        <View style={{marginTop: StatusBar.currentHeight, backgroundColor:'white'}}>
            <View style={styles.OrderSummaryHeader}>
                <View>
                    <Entypo name="chevron-left" size={35} style={{marginLeft:10}} onPress={()=>navigation.navigate('OrderHistory')}/>
                </View>
                <View>
                    <Text style={{fontSize:16, fontWeight:400}} >Order: {order.id}</Text>
                    <Text style={{fontSize:16, fontWeight:400}}>{order.totalItems} item</Text>
                </View>
            </View>
            <View style={{borderBottomWidth:0.2, borderBottomColor:'grey', marginVertical:10}}></View>
            <View style={{marginLeft:18}}>
                {order.status === "Delivered" ? (
                    <>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10, marginTop:15}}>
                        <Image source={check} style={{ width: 40, height: 40 }} />
                        <Text style={{fontSize:25, fontWeight:600}}>Delivered</Text>
                </View>
                    </>
            ): (
                    <>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10, marginTop:15}}>
                        <Image source={cross} style={{ width: 30, height: 30 }} />
                        <Text style={{fontSize:25, fontWeight:600}}>Pending</Text>
                </View>
                    </>
            )
            }
            </View>
            <View style={{borderBottomWidth:0.2, borderBottomColor:'grey', marginVertical:15}}></View>
            <View style={{marginLeft:25, marginBottom:10}}>
                <Text style={{fontSize:20, fontWeight:500}}>{order.totalItems} item in order</Text>
            </View>
            
            <View style={styles.ImageContainer}>
                {order.items.map((item, index) => (
                    <View key={item.name + index} style={{ display: 'flex', flexDirection: 'row' }}>
                        <View>
                        <Image
                            source={{ uri: item.imageUrl }}
                            style={{ width: 40, height: 40, marginTop: 10 }}
                        />
                        </View>

                        <View style={{ marginLeft: 20, marginTop: 10, display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ fontSize: 16 }}>{item.name}</Text>
                        <Text style={{ color: 'grey' }}>{item.quantity} units</Text>
                        </View>

                        <View style={{ marginLeft: 'auto', marginTop: 15, marginRight: 25 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>₹ {item.price}</Text>
                        </View>
                    </View>
                    ))}
            </View>
            <View style={{borderBottomColor:'#b6b6b645', borderBottomWidth:7, marginTop:15}}></View>
            <View style={{backgroundColor:'white'}}>
                <View style={{display:'flex', flexDirection:'row', margin:10, gap:15, marginLeft:20}}>
                    <Ionicons name="receipt-outline"  size={25}></Ionicons>
                    <Text style={{fontSize:20}}>Order Summary</Text>
                </View>
                <View style={{marginLeft:10}}>
                       <BillingSummary label="Item Total" value={order.billing.itemTotal}/>
                       <BillingSummary label="Delivery Fee" value={order.billing.deliveryFee}/>
                       <BillingSummary label="Platform Fee" value={order.billing.platformFee}/>
                       <View style={{display:'flex',alignItems:'center', justifyContent:"center"}}><View style={{borderBottomColor:'#b6b6b645', borderBottomWidth:1,marginBottom:10, width:'95%'}}></View></View>
                       <View style={{marginLeft:10,marginBottom:10, display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <View>
                                <Text style={{fontSize:20,color:'#000000eb', fontWeight:'bold'}}>Total Bill</Text>
                                <Text style={{fontSize:15,color:'grey', marginTop:5}}>Incl. all taxes and charges</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:20,marginRight:30, fontWeight:'bold'}}>₹ {order.billing.totalBill}</Text>
                            </View>
                        </View> 
                        
                </View>
                <View style={{borderBottomColor:'#b6b6b645', borderBottomWidth:7,marginBottom:10}}></View>
                <View style={{marginLeft:20, paddingBottom:15}}>
                    <Text style={{fontSize:20,color:'#000000eb', fontWeight:'bold'}}>Order Details</Text>
                    <OrderDetailsComponent label="Order Id" value={`#${order.id}`}/>
                    <OrderDetailsComponent label="Receiver Details" value={`${order.name} , ${order.mobile}`}/>
                    <OrderDetailsComponent label="Delivery Address " value={order.address}/>
                    <OrderDetailsComponent label="Order Placed" value={`${order.orderplaced} , ${order.orderplacedtime}`}/>
                    <OrderDetailsComponent label="Order Arrived at" value={`${order.orderreceived} , ${order.orderreceivedat}`}/>
                </View>
            </View>

        </View>
        </ScrollView>
   )
}

const styles = StyleSheet.create({
    OrderSummaryHeader:{
        marginTop:20,
        marginLeft:5,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    ImageContainer:{
        display:'flex',
        marginLeft:20
    }
})
export default OrderSummary