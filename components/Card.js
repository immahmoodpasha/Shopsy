import { View, Image, TouchableOpacity, Text } from "react-native";
import { useCart } from '../context/CartContext';
import { styles } from '../styles';

const Card = ({ product }) => {
  const { cart, addToCart, removeFromCart, updateQuantity,clearCart } = useCart();

  // Find product in cart
  const cartItem = cart.find(item => item.id === product.id);
  const count = cartItem ? cartItem.count : 0;

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.units,
      category: product.category.name,
      image:product.imageUrl,
    }, 1);
    // clearCart();
  };

  const handleRemove = () => {
    if (count === 1) {
      removeFromCart(product.id);
    } else {
      updateQuantity(product.id, count - 1);
    }
    
  };

  return (
    <View style={[styles.ProductCard, { height: 176 }]}>
      <View testID="ImageContainer" style={styles.ImageContainer}>
        <Image
          source={{ uri: product.imageUrl }}
          style={{ width: '100%', height: '100%', borderRadius: 20 }}
        />

        {count > 0 ? (
          <View style={[styles.AddButton, {
            paddingVertical: '0.1%',
            paddingHorizontal: '5%',
            backgroundColor: '#8404aeff',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '15%',
            maxWidth: '80%'
          }]}>
            <TouchableOpacity onPress={handleRemove}>
              <Text style={{ color: 'white', fontWeight: '800', fontSize: 25 }}>-</Text>
            </TouchableOpacity>
            <Text style={{ color: 'white', fontWeight: '800', fontSize: 14 }}>{count}</Text>
            <TouchableOpacity onPress={handleAdd}>
              <Text style={{ color: 'white', fontWeight: '800', fontSize: 22 }}>+</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleAdd} style={styles.AddButton}>
            <Text style={{ color: '#8404aeff', fontWeight: '800', fontSize: 10 }}>ADD</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.ProductDetails}>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <Text style={{ fontSize: 12, fontWeight: '500', color: 'black' }}>&#8377; </Text>
          <Text style={{ fontSize: 16, fontWeight: '800' }}>{product.price}</Text>
        </View>
        <Text style={{
          fontSize: 9,
          fontWeight: '600',
          color: 'rgb(175, 83, 255)',
          backgroundColor: 'rgba(234, 216, 250, 0.83)',
          borderRadius: 10,
          paddingHorizontal: '5%',
          alignSelf: 'flex-start',
        }}>
          {product.units}
        </Text>
        <Text style={{
          fontSize: 12,
          fontWeight: '500',
          color: 'rgba(0, 0, 0, 0.83)',
          width: '100%'
        }}
        numberOfLines={1}
        ellipsizeMode="tail"
        >
          {product.name}
        </Text>
      </View>
    </View>
  );
};

export default Card;
