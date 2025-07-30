import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useCart } from '../context/CartContext';

const CartItemCard = ({ item, updateQuantity, removeFromCart }) => {
  const handleDecrement = () => {
    if (item.count === 1){
      removeFromCart(item.id)
    }
    else {
      updateQuantity(item.id, item.count-1)
    }
  }
  const handleIncrement = () => {
    updateQuantity(item.id, item.count+1)
  }
  return (
    <View style={styles.itemCard}>
      <View style={styles.topItemCard}>
        <View style={styles.image}>
          <Image 
            style={{ width: '100%', height: '100%', resizeMode: "stretch" }}
            source={{ uri: item.image }}
          />
        </View>
        <View style={styles.ordContent}>
          <Text style={{fontSize: 15}} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
          <Text style={{fontSize: 11}}>Category: {item.Category}</Text>
          <Text style={{fontSize: 11}}>Unit Price: {'\u20B9'}{(item.price).toFixed(2)}</Text>
          <Text style={{fontSize: 11}}>Total Price: {'\u20B9'}{(item.price * item.count).toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.butItemCard}>
        <View style={styles.qtyBox}>
          <TouchableOpacity onPress={handleDecrement}>
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>{item.count}</Text>
          <TouchableOpacity onPress={handleIncrement}>
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.but} onPress={() => removeFromCart(item.id)}>
          <Text style={{textAlign: 'center', color: '#8404ae'}}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItemCard

const styles = StyleSheet.create({
    itemCard: {
        backgroundColor: 'white',
        display: 'flex',
        height: 125,
        margin: 10,
        padding: 5,
        borderRadius: 7.5
    },
    topItemCard: {
        display: 'flex',
        height: '65%',
        margin: 5,
        marginTop:0,
        // backgroundColor: '#CFCFCF',
        flexDirection: 'row'
    },
    image: {
        // borderWidth: 1,
        width: '25%',
        height: '87.5%',
        margin: 5,
        display: 'flex',
        alignSelf: 'center',
        borderRadius: 7.5,
        overflow: 'hidden'
    },
    ordContent: {
        // borderWidth: 1,
        width: '69%',
        marginLeft: 'auto',
        margin: 5,
        height: '80%',
        display: 'flex',
        alignSelf: 'center',
        padding: 3,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    butItemCard: {
        display: 'flex',
        height: '23%',
        margin: 5,
        marginTop:0,
        // backgroundColor: '#CFCFCF',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    but: {
        borderWidth: 1,
        width: '25%',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 7.5,
        borderColor: '#8404ae'
    },
    qtyBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 7.5,
        width: '35%',
        height: '100%',
        paddingHorizontal: 10,
        backgroundColor:'#8404ae'
    },
    qtyText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 10
    }
})