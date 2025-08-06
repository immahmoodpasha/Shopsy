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
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import Card from '../components/Card';
import Header from '../components/Header';
import apiClient from '../apiClient';

const PRIMARY_COLOR = '#8404aeff';

const categories = [
  { label: 'All Items', image: require('../images/Allitems.jpg') },
  { label: 'Fruits & Vegetables', image: require('../images/Vegetables.jpg') },
  { label: 'Baby Care', image: require('../images/Babycare.jpg') },
  { label: 'Bakery, Cakes & Dairy', image: require('../images/Dairy.jpg') },
  { label: 'Beverages', image: require('../images/beverages.jpg') },
  { label: 'Snacks & Branded Foods', image: require('../images/snack.jpg') },
  { label: 'Eggs, Meat & Fish', image: require('../images/Nonveg.jpg') },
];

const Categories = ({ route }) => {
  const { category } = route.params || {};
  const [selectedCategory, setSelectedCategory] = useState(category || 'All Items');
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    apiClient.get('https://2fabe7816646.ngrok-free.app/api/product')
      .then((response) => {
        // console.log(response.data.slice(0, 10));
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
      });
      
  }, []);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  useEffect(() => {
    setSearchText('')
  }, [selectedCategory]);
  
  const filteredProducts = products.filter((p) => {
    const matchCategory = selectedCategory === 'All Items' || p.category.name.toLowerCase() === selectedCategory.toLowerCase()

    const matchSearch = searchText.trim() === '' || p.name.toLowerCase().includes(searchText.toLowerCase());
    
    return matchCategory && matchSearch;
  });

  
  const handleSearch = async () => {
  try {
    console.log(selectedCategory)
    if (selectedCategory === 'All Items'){
      const response = await apiClient.get(`https://2fabe7816646.ngrok-free.app/api/product?filterQuery=${encodeURIComponent(searchText)}`);
      setProducts(response.data);
    }
    else {
      const response = await apiClient.get(`https://2fabe7816646.ngrok-free.app/api/product?category=${encodeURIComponent(selectedCategory)}&filterQuery=${encodeURIComponent(searchText)}`);
      setProducts(response.data);
    }
  } catch (error) {
  }
};

  return (
    <View style={{ flex: 1, backgroundColor: '#f0e6ff', }}>
      {/* Sticky Header Area */}
      <View style={styles.stickyHeader}>
        <View>
          <Header />
        </View>

        {/* Search Box */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search for items"
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={setSearchText}
            returnKeyType="search"
            onSubmitEditing={handleSearch} // optional: triggers search on keyboard enter
          />
          <TouchableOpacity onPress={handleSearch}>
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
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={PRIMARY_COLOR} />
        </View>
      ) : (
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
      )}
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
    borderRadius: 100
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
