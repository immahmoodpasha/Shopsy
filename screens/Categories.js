import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import Card from '../components/Card';

const PRIMARY_COLOR = '#8404aeff';

const categories = [
  { name: 'clipboard-list', label: 'All Items', lib: FontAwesome5 },
  { name: 'carrot', label: 'Vegetables', lib: FontAwesome5 },
  { name: 'baby', label: 'Babycare', lib: FontAwesome5 },
  { name: 'bowl', label: 'Dairy', lib: Entypo },
  { name: 'medkit', label: 'Medicines', lib: FontAwesome5 },
  { name: 'ellipsis-h', label: 'More', lib: FontAwesome5 },
  { name: 'drumstick-bite', label: 'Nonveg', lib: FontAwesome5 },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Items');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://10.222.31.58:3113/products')
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
      : products.filter(
          (p) => p.Category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.heading}>Categories</Text>
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
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.label}
        contentContainerStyle={styles.iconsContainer}
        renderItem={({ item }) => {
          const IconComponent = item.lib;
          return (
            <TouchableOpacity
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
        }}
      />
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
        columnWrapperStyle={{justifyContent:'flex-start',columnGap:'5', marginHorizontal:0 }}
        renderItem={({ item })=><Card product={item} />}
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
});

export default Categories;
