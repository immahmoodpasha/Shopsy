import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const PRIMARY_COLOR = '#8404aeff';

const categories = [
  { name: 'clipboard-list', label: 'All Items', lib: FontAwesome5 },
  { name: 'carrot', label: 'Vegetables', lib: FontAwesome5 },
  { name: 'baby', label: 'Babycare', lib: FontAwesome5 },
  { name: 'bowl', label: 'Dairy', lib: Entypo },
  { name: 'medkit', label: 'Medicines', lib: FontAwesome5 },
  { name: 'ellipsis-h', label: 'More', lib: FontAwesome5 },
  { name: 'drumstick-bite', label: 'Nonveg', lib: FontAwesome5 }, // Optional
];


const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Items');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.73.36:3113/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.error('Error fetching products', err);
      });
  }, []);

  const filteredProducts =
    selectedCategory === 'All Items'
      ? products
      :products.filter(
  (p) => p.Category.toLowerCase() === selectedCategory.toLowerCase());
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>

      {/* Search Box */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for items"
          placeholderTextColor="#888"
        />
        <TouchableOpacity>
          <Icon name="search" size={20} color={PRIMARY_COLOR} />
        </TouchableOpacity>
      </View>

      {/* Horizontal Scroll Category Icons */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.iconsContainer}
        style={styles.scrollContainer}
      >
        {categories.map((item, index) => {
          const IconComponent = item.lib;
          return (
            <TouchableOpacity
              key={index}
              style={styles.iconDiv}
              onPress={() => setSelectedCategory(item.label)}
            >
              <IconComponent
                name={item.name}
                size={60}
                color={PRIMARY_COLOR}
                style={styles.iconStyle}
              />
              <Text style={styles.iconText}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Product Cards */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 80 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    textAlign: 'center',
    marginVertical: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  scrollContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  iconDiv: {
    marginRight: 20,
    alignItems: 'center',
  },
  iconStyle: {
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  iconText: {
    textAlign: 'center',
    fontSize: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default Categories;
