import { View, Image, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import {styles} from '../styles'
const ProductCard = () => {
    const [isAdded, setIsAdded] = useState(false);
    const [count, setCount] = useState(0);

  const addToCart = () => {
    if (!isAdded) setIsAdded(true);
    setCount(count + 1);
  };

    const removeFromCart = () => {
        if (count == 1){
            setIsAdded(false)
        }
        setCount(count - 1);
    }
    return(
        <View style={styles.ProductCard}>
            <View testID="ImageContainer" style={styles.ImageContainer}>
                <Image source={{
                    uri: 'https://m.media-amazon.com/images/I/71S6oQqVa5L._UF1000,1000_QL80_.jpg'
                }}
                style={{width: '100%', height: '100%', borderRadius: 20}}
                />
                {isAdded? <View style={[styles.AddButton, {paddingVertical: '2%', paddingHorizontal: '8%',backgroundColor: '#8404aeff', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '20%', maxWidth: '80%'}]}>
                    <TouchableOpacity onPress={()=>removeFromCart()}><Text style={{color: 'white', fontWeight: 800,fontSize: 25}}>-</Text></TouchableOpacity>
                    <Text style={{color: 'white', fontWeight: 800,fontSize: 14}}>{count}</Text>
                    <TouchableOpacity onPress={()=>addToCart()}><Text style={{color: 'white', fontWeight: 800,fontSize: 22}}>+</Text></TouchableOpacity>
                </View> : <TouchableOpacity onPress={()=>addToCart()} style={styles.AddButton}>
                    <Text style={{color: '#8404aeff', fontWeight: 800,fontSize: 14}}>ADD</Text>
                </TouchableOpacity>}
                
            </View>
            <View style={styles.ProductDetails}>
                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                    <Text style={{fontSize: 12, fontWeight: 500, color: 'black'}}>&#8377; </Text>
                    <Text style={{fontSize: 16, fontWeight: 800}}>30</Text>
                </View>
                <Text style={{fontSize: 11, fontWeight: 600, color: 'rgb(175, 83, 255)', backgroundColor: 'rgba(234, 216, 250, 0.83)', borderRadius: 10, paddingHorizontal: '5%', width: '35%'}}>250g</Text>
                <Text style={{fontSize: 15, fontWeight: 500, color: 'rgba(0, 0, 0, 0.83)', width: '100%'}}>Carrot (Ooty Carrot - Raw)</Text>
            </View>
        </View>
    );
}

export default ProductCard;
