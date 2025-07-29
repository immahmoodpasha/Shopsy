import React from 'react';
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity, SafeAreaView, ActivityIndicator} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import OrderHistoryCard from '../components/OrderHistoryCard'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { FlatList } from 'react-native';



function OrderHistory(){
    const navigation = useNavigation()
    const [orders, setOrders] = useState([])
    const [loading, setloading] = useState(true)
    
    useEffect(()=>{
        axios.get('http://192.168.43.182:3113/orders')
        .then((response)=>{
            setOrders(response.data)
            setloading(false)
        })
        .catch((error)=>{
            console.error('Data Not Fetched')
            setloading(false)
        })
    },[orders])

      const renderItem = ({ item }) => <OrderHistoryCard orders={item} />;


    return(
        <SafeAreaView>
            <View style={{height:80, backgroundColor:'#ffffffff'}}>
                <View style={styles.header}>
                    <Entypo name="chevron-left" size={30} style={{marginLeft:10}}/>
                    <Text style={{fontSize:23, fontWeight:500}}>Your Orders</Text>
                </View>
            </View>
            { loading ? (<ActivityIndicator></ActivityIndicator>) :

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
        marginTop: 40
    }
 }
)
export default OrderHistory