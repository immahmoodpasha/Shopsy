import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import Card from '../components/Card';
import Header from '../components/Header';

const PRIMARY_COLOR = '#8404aeff';

const categories = [
  { label: 'All Items', image: require('../images/Allitems.jpg') },
  { label: 'Vegetables', image: require('../images/Vegetables.jpg') },
  { label: 'Babycare', image: require('../images/Babycare.jpg') },
  { label: 'Dairy', image: require('../images/Dairy.jpg') },
  { label: 'Medicines', image: require('../images/Medicine.jpg') },
  { label: 'Nonveg', image: require('../images/Nonveg.jpg') },
  { label: 'more', image: require('../images/mor.png') },
];

const Categories = ({ route }) => {
  const { category } = route.params || {};
  const [selectedCategory, setSelectedCategory] = useState(category || 'All Items');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.43.182:3113/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.error('Error fetching products', err);
      });
  }, []);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  const filteredProducts =
    selectedCategory === 'All Items'
      ? products
      : products.filter(
          (p) => p.Category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <View style={{ flex: 1, backgroundColor:'#f0e6ff', }}>
      {/* Sticky Header Area */}
      <View style={styles.stickyHeader}>
        <View style={{ marginTop: StatusBar.currentHeight }}>
          <Header />
        </View>

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

        {/* Category Icons */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item.label}
          contentContainerStyle={styles.iconsContainer}
          renderItem={({ item }) => {
            const isSelected = selectedCategory === item.label;
            return (
              <TouchableOpacity
                style={[styles.iconDiv, isSelected && styles.glowEffect]}
                onPress={() => setSelectedCategory(item.label)}
              >
                <Image
                  source={item.image}
                  style={styles.categoryImage}
                />
                <Text style={[styles.iconText, isSelected && { color: "violet" }]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Scrollable Product List */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'flex-start', gap: 5 }}
        renderItem={({ item }) => <Card product={item} />}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items in this category</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stickyHeader: {
    backgroundColor: '#fff',
    zIndex: 10,
    elevation: 3,
    paddingBottom: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  iconsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  iconDiv: {
    marginRight: 20,
    alignItems: 'center',
  },
  glowEffect: {
    backgroundColor: '#f0e6ff',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#9400D3',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 6,
  },
  iconText: {
    textAlign: 'center',
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  categoryImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  listContent: {
    
    paddingHorizontal: 10,
    paddingBottom: 100,
    paddingTop: 10,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 30,
    color: '#999',
  },
});

export default Categories;
