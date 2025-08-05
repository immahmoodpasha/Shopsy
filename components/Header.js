import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "../styles";
const cartIcon = require('../assets/cart.png');
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import { useCart } from "../context/CartContext";

const Header = () => {
    const navigation = useNavigation();
    const {cart} = useCart();
    const count = cart.reduce((sum, item) => sum+item.count, 0);

    return(
        <View style={styles.Header}>
            <View style={{display: 'flex', flexDirection: 'row', gap: '8%'}}>
                <Icon name="shop" size={20} color="white"/>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 800}}>Rapidd</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{position: 'relative'}}>
                <Image source={cartIcon} style={{width: 30, height: 30}}></Image>
                {count>0 && (
                    <View style={styles.countAlert}>
                        <Text style={{color:'white', fontSize:11, fontWeight:'bold'}}>{count}</Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
}

export default Header;