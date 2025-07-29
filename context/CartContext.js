// context/CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 'cart' stores an array of items with: id, name, price, quantity, category, and count.
  const [cart, setCart] = useState([]);

  // Load cart from AsyncStorage on mount
  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedCart = await AsyncStorage.getItem('cart');
        if (storedCart) setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error('Failed to load cart:', error);
      }
    };
    loadCart();
  }, []);

  // Save cart to AsyncStorage whenever it changes
  useEffect(() => {
    AsyncStorage.setItem('cart', JSON.stringify(cart));
    console.log("Cart items:", cart);
  }, [cart]);


  // Add a product to the cart or update the count if it already exists.
  const addToCart = (product, countToAdd = 1) => {
  setCart((prevCart) => {
    const existing = prevCart.find((item) => item.id === product.id);
    if (existing) {
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, count: item.count + countToAdd } : item
      );
    } else {
      return [...prevCart, { ...product, count: countToAdd }];
    }
  }

);
};


  // Remove product completely from the cart.
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Update the count of a specific product.
  // If count becomes 0, remove the product from the cart.
  const updateQuantity = (id, newCount) => {
    setCart((prevCart) =>
      newCount <= 0
        ? prevCart.filter((item) => item.id !== id)
        : prevCart.map((item) =>
            item.id === id ? { ...item, count: newCount } : item
          )
    );
  };

  // Clear the entire cart.
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the cart context in your components.
export const useCart = () => useContext(CartContext);
