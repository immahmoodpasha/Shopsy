import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  SafeAreaView,
  Image
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
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
    axios.get('http://10.157.223.5:3113/products')
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


  const renderHeader = () => (
    <View style={{ marginTop: StatusBar.currentHeight, }}>
      <Header />
      <View style={styles.header}>
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
              style={[styles.iconDiv,isSelected&&styles.glowEffect]}
              onPress={() => setSelectedCategory(item.label)} 
            >
              <Image
                source={item.image}
                style={styles.categoryImage}
              />
              <Text style={[styles.iconText,isSelected&&{color:"violet"}]}>{item.label}</Text>
            </TouchableOpacity>
          )
          }}
        />
      </View>
    </View>

  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader}
        
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    textAlign: 'center',
    marginVertical: 20,
  },
  header: {
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  iconsContainer: {
    paddingBottom: 20,
  },
  iconDiv: {
    marginRight: 20,
    alignItems: 'center',
  },
  iconStyle: {
    alignSelf: 'center',
  },
  iconText: {
    textAlign: 'center',
    fontSize: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 30,
    color: '#999',
  },
  categoryImage: {
  width: 60,
  height: 60,
  marginBottom: 0,
  backgroundColor:"transparent",
  resizeMode:'contain',
  borderRadius:100
},
});

export default Categories;
