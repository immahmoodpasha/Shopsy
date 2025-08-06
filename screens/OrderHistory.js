import React from 'react';
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity, SafeAreaView, ActivityIndicator} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import OrderHistoryCard from '../components/OrderHistoryCard'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { FlatList } from 'react-native';
import apiClient from '../apiClient';



function OrderHistory(){
    const navigation = useNavigation()
    const [orders, setOrders] = useState([])
    const [loading, setloading] = useState(true)
    
    useEffect(()=>{
        apiClient.get('https://2fabe7816646.ngrok-free.app/api/order/order-history')
        .then((response)=>{
            // console.log(response.data.data[0].items);
            setOrders(response.data.data)
            setloading(false)
        })
        .catch((error)=>{
            setloading(false)
        })
    },[])

      const renderItem = ({ item }) => <OrderHistoryCard orders={item} />;


    return(
        <SafeAreaView>
            <View style={{height:80, backgroundColor:'#ffffffff'}}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Entypo name="chevron-left" size={30} style={{marginLeft:10}} onPress={() => navigation.navigate('MainApp')}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:23, fontWeight:500}}>Your Orders</Text>
                </View>
            </View>
            { loading ? (            
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 50, display:'flex' }}>
                <ActivityIndicator size="large" color="#8404ae" />
            </View> ) :

            <FlatList
            data={orders}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle= {{paddingBottom:100}}
            />
            
           }

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:12,
        marginTop: 40,
        paddingHorizontal: 5
    }
 }
)
export default OrderHistory