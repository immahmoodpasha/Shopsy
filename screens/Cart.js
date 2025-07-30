import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import CartItemCard from '../components/CartItemCard';
import BillSummary from '../components/BillSummary';
import { useCart } from '../context/CartContext';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Cart = () => {
    const navigation = useNavigation();
    const {cart, removeFromCart, updateQuantity, clearCart} = useCart()
    const itemTotal = cart.reduce((total, item) => total + item.price * item.count, 0);
    const deliveryFee = 'Free';

  return (
    <View style={styles.container}>
      <View style={styles.topCont}>
        <View style={styles.cartTitCont}>
            <TouchableOpacity>
                <Entypo name='chevron-left' style={[styles.cartTit,{fontSize: 30, marginRight: 5}]}/>
            </TouchableOpacity>
            <Text style={styles.cartTit}>My Cart</Text>
        </View>
        {cart.length>0 && (
            <>
                <View style={styles.addMore}>
                <TouchableOpacity onPress={() => navigation.navigate('MainApp')}>
                    <Text style={{fontWeight:'bold', color: 'white'}}>Add More</Text>
                </TouchableOpacity>
        </View>
            </>
        )}
      </View>
      <View style={styles.itemsCont}>
        {cart.length===0 ? (
            <View style={styles.empCartCont}>
                <View style={styles.empCartIcon}>
                    <MaterialIcons name='add-shopping-cart' size={80}/>
                </View>
                <View>
                    <Text style={{fontSize: 17.5, fontWeight: 'bold'}}>Oops.....Your Cart is Empty!!</Text>
                </View>
                <TouchableOpacity style={styles.browProdBtn} onPress={() => navigation.navigate('MainApp')}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>Browse Products</Text>
                </TouchableOpacity>
            </View>
        ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
                {cart.map((item, index) => (
                    <CartItemCard
                        key={item.id}
                        item={item}
                        updateQuantity={updateQuantity}
                        removeFromCart={removeFromCart}
                    />
                ))}
        </ScrollView>
        )}
      </View>
     {cart.length>0 && (
        <View style={styles.bottomCont}>
            <BillSummary itemTotal={itemTotal} deliveryFee={deliveryFee} />
        </View>
     )}
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        padding: 7.5,
        display: 'flex',
        flexDirection:'column',
        paddingBottom: '57.5%'
        // justifyContent:'space-between',
    },
    topCont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    cartTitCont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    addMore: {
        marginBottom: 5,
        marginRight: 5,
        borderRadius: 7.5,
        padding: 5,
        backgroundColor:'#8404ae',
    },
    cartTit: {
        color: '#8404ae',
        fontWeight: 'bold',
        fontSize: 20
    },
    itemsCont: {
        // backgroundColor: '#CFCFCF',
        height: '93.5%',
        margin: 10,
        display: 'flex',
        marginTop: 0,
        marginBottom: 0
    },
    empCartCont: {
        backgroundColor: '#CFCFCF',
        width: '100%',
        height: '42.5%',
        display: 'flex',
        alignSelf: 'center',
        marginTop: '7.5%',
        borderRadius: 10,
        alignItems: 'center',
        padding: 20,
        justifyContent: 'space-between'
    },
    empCartIcon: {
        width: '35%',
        height:'50%',
        backgroundColor: 'white',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    browProdBtn: {
        backgroundColor: '#8404ae',
        width: '60%',
        height: '20%',
        borderRadius: 7.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    bottomCont: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#CFCFCF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 10,
        paddingBottom: 20,
        
    }
})