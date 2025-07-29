import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles";
const cartIcon = require('../assets/cart.png');
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.Header}>
            <View style={{display: 'flex', flexDirection: 'row', gap: '8%'}}>
                <Icon name="shop" size={20} color="white"/>
                <Text style={{color: 'white', fontSize: 17, fontWeight: 800}}>Shopsy store</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('C1art')}>
                <Image source={cartIcon} style={{width: 30, height: 30}}></Image>
            </TouchableOpacity>
        </View>
    );
}

export default Header;