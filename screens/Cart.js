import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import CartItemCard from '../components/CartItemCard';
import BillSummary from '../components/BillSummary';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const Cart = () => {
    const {cart, removeFromCart, updateQuantity, clearCart} = useCart()
    const itemTotal = cart.reduce((total, item) => total + item.price * item.count, 0);
    const deliveryFee = 'Free';

    const handleCheckout = async () => {
        const resToBack = cart.map(item =>({
            productId: item.id,
            quantity: item.count,
            unitPrice: item.price
        }));
        try {
            const response = await axios.post ('http://192.168.0.129:3113/orders',{
                items: resToBack
            });
            if (response.status === 201 || response.status === 200) {
                console.log('order placed successfully: ', response.data);
                clearCart();
            }
            else {
                console.warn('Something went wrong: ', response.status);
            }
        }
        catch (error) {
            console.error('checkout error: ', error.message);
        }
    }
  return (
    <View style={styles.container}>
      <View style={styles.cartTitCont}>
        <Text style={styles.cartTit}>My Cart</Text>
      </View>
      <View style={styles.itemsCont}>
        <ScrollView>
            {cart.map((item, index) => (
                <CartItemCard
                    key={item.id}
                    item={item}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                />
                ))}
        </ScrollView>
      </View>
     <BillSummary itemTotal={itemTotal} deliveryFee={deliveryFee} />
      <View>
        <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckout}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        margin: 10,
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    cartTit: {
        color: '#8404ae',
        fontWeight: 'bold',
        fontSize: 20, 
        marginBottom: 10
    },
    itemsCont: {
        backgroundColor: '#CFCFCF',
        height: '60%',
        margin: 10,
        display: 'flex',
        marginTop: 0,
        marginBottom: 0
    },
    checkoutBtn: {
        margin: 10,
        backgroundColor:'#8404ae',
        height: '20%',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 7.5
    },
    
})