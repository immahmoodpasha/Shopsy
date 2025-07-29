import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import CartItemCard from '../components/CartItemCard';
import BillSummary from '../components/BillSummary';

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const [cartItems, setCartItems] = useState([]);

    const dummyCartItems = [
        {
            id: '1',
            name: 'Carrot 500g',
            category: 'Vegetables',
            unitPrice: 3.99,
            image: 'https://as2.ftcdn.net/v2/jpg/01/59/33/87/1000_F_159338719_7K6bGhz3qFBIpGMD4rwhLy8JWOCQKfRs.jpg',
            quantity: 1,
        },
        {
            id: '2',
            name: 'Tomato 1kg',
            category: 'Vegetables',
            unitPrice: 4.99,
            image: 'https://cdn.pixabay.com/photo/2016/02/23/17/39/tomatoes-1218054_960_720.jpg',
            quantity: 3,
        }
    ];

    useEffect(() => {
        const dummyStorage = async () => {
            const exist = await AsyncStorage.getItem('carts');
            if (!exist) {
                await AsyncStorage.setItem('carts', JSON.stringify(dummyCartItems));
            }
        };
        dummyStorage();
    }, []);
    useEffect(() => {
        const getCart = async () => {
            const data = await AsyncStorage.getItem('carts');
            if (data) {
                setCartItems(JSON.parse(data));
            }
        };
        getCart();
    }, []);

    const updateQuantity = async (id, delta) => {
    const updated = cartItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    );

    setCartItems(updated);
    await AsyncStorage.setItem('carts', JSON.stringify(updated));
    };

    const removeItem = async (id) => {
    const filtered = cartItems.filter(item => item.id !== id);
    setCartItems(filtered);
    await AsyncStorage.setItem('carts', JSON.stringify(filtered));
    };

    const itemTotal = cartItems.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
    const deliveryFee = 3;

  return (
    <View style={styles.container}>
      <View style={styles.cartTitCont}>
        <Text style={styles.cartTit}>My Cart</Text>
      </View>
      <View style={styles.itemsCont}>
        <ScrollView>
            {cartItems.map((item, index) => (
                <CartItemCard
                    key={item.id}
                    item={item}
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
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