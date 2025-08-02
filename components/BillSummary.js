import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext';
import axios from 'axios';



const BillSummary = ({ itemTotal = 0, deliveryFee }) => {
  const navigation = useNavigation();
  const toPay = itemTotal;
  const {cart, removeFromCart, updateQuantity, clearCart} = useCart()
  const handleCheckout = async () => {
        const resToBack = cart.map(item =>({
            productId: item.id,
            quantity: item.count,
            unitPrice: item.price
        }));
        try {
            const response = await axios.post ('http://10.128.19.188:3113/orders',{
                items: resToBack
            });
            if (response.status === 201 || response.status === 200) {
                console.log('order placed successfully: ', response.data);
                clearCart();
                navigation.navigate('OrderPlaced');
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
    <View style={styles.billCont}>
      <View style={{ margin: 5 }}>
        <Text style={{fontWeight: 'bold', fontSize: 17.5}}>Bill Summary</Text>
      </View>
      <View style={styles.rowGroup}>
        <View style={styles.row}>
          <Text>Item Total</Text>
          <Text> {'\u20B9'}{itemTotal.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text>Delivery Fee</Text>
          <Text>
            <Text style={{ textDecorationLine: 'line-through', color: 'gray', alignItems: 'center' }}>{'\u20B9'}50</Text>
            <Text style={{ color: 'green', fontWeight: 'bold' }}> {deliveryFee}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.rowBottom}>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>To Pay</Text>
        <Text> {'\u20B9'}{toPay.toFixed(2)}</Text>
      </View>
      <View style={{marginTop: 5, marginBottom: 12.5}}>
        <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckout}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BillSummary;

const styles = StyleSheet.create({
  billCont: {
    height: '25%',
    margin: 10,
  },
  rowGroup: {
    margin: 10,
    marginTop: 2,
    gap: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowBottom: {
    margin: 7.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkoutBtn: {
        margin: 10,
        backgroundColor:'#8404ae',
        height: '82.5%',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 7.5
    }
});
