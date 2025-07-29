import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import CartItemCard from '../components/CartItemCard';
import BillSummary from '../components/BillSummary';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const {cart, removeFromCart, updateQuantity} = useCart()

    const itemTotal = cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
    const deliveryFee = 3;

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
        <TouchableOpacity style={styles.checkoutBtn}>
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