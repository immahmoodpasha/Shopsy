import ProductCard from "../components/ProductCard";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import Header from "../components/Header";
import AdsCarousel from "../components/AdsCarousel";
import { FlatList } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useEffect, useState } from "react";
import axios from "axios";
import Card from '../components/Card';
import apiClient from "../apiClient";

const categoriesArray = ['Fruits & Vegetables', 'Baby Care', 'Bakery, Cakes & Dairy', 'Beverages', 'Snacks & Branded Foods', 'Eggs, Meat & Fish'];


const Dashboard = ({navigation}) => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        apiClient.get('/api/product')
        .then(
            (response)=>{
                setProducts(response.data);
                
            }
        ).catch(
            (err)=>{
                console.error('Error fetching products', err);
            }
        )
    }, [])

    const getProductsForCategory = (category) => {
        return products.filter(product => product.category.name === category);
    }
    return(
        <View style={styles.Dashboard}>
            <Header/>
            <ScrollView style={{paddingHorizontal: '5%'}} showsVerticalScrollIndicator={false}>
                <Text style={{color: '#8404ae', fontSize: 20, fontWeight: '700', paddingVertical: '3%'}}>Welcome User</Text>
                <AdsCarousel />
                <View style={styles.CategorySection}>
                    {categoriesArray.map((category, index)=>{
                        const productsInCategory = getProductsForCategory(category);
                        if (productsInCategory.length === 0) {
                            return null;
                        }
                        return(
                            <View key={index}>
                                <View style={{display:'flex', flexDirection: 'row', alignItems: 'center', marginTop: '4%', justifyContent: 'space-between'}}>
                                    <View style={styles.CategoryTitle}>
                                        <Text style={{color: 'white', fontWeight: '800', fontSize: 20}}>{category}</Text>
                                    </View>
                                    <TouchableOpacity onPress={()=>navigation.navigate('Categories', {category})}>
                                        <Text size={30} style={{color: '#8404ae', paddingLeft: '3%'}}>View More</Text>
                                    </TouchableOpacity>
                                </View>
                                
                                <View style={styles.CategoryList}>
                                    <FlatList contentContainerStyle={{gap:5}} horizontal keyExtractor={(item, index) => index.toString()} data={productsInCategory.slice(0,6)} renderItem={({item, index})=>(
                                        <Card product={item}/>
                                    )}/>
                                </View>
                                
                            </View>
                        );
                    }
                        
                    )}
                </View>
            </ScrollView>
            
            
            
        </View>
    );
}

export default Dashboard;