import ProductCard from "../components/ProductCard";
import { Text, View, ScrollView } from "react-native";
import { styles } from "../styles";
import Header from "../components/Header";
import AdsCarousel from "../components/AdsCarousel";
import { FlatList } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useEffect, useState } from "react";
import axios from "axios";
import Card from '../components/Card';

const categoriesArray = ['Vegetables', 'Fruits', 'Electronics'];


const Dashboard = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://192.168.43.182:3113/products')
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
        return products.filter(product => product.Category === category);
    }
    return(
        <View style={styles.Dashboard}>
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{color: '#8404ae', fontSize: 20, fontWeight: '700', padding: '3%', paddingHorizontal: '2%'}}>Welcome User</Text>
                <AdsCarousel />
                <View style={styles.CategorySection}>
                    {categoriesArray.map((category, index)=>{
                        const productsInCategory = getProductsForCategory(category);
                        if (productsInCategory.length === 0) {
                            return null;
                        }
                        return(
                            <View key={index}>
                                <View style={styles.CategoryTitle}>
                                    <Text style={{color: 'white', fontWeight: '800', fontSize: 20}}>{category}</Text>
                                </View>
                                <View style={styles.CategoryList}>
                                    <FlatList horizontal data={productsInCategory} renderItem={(item, index)=>(
                                        <View key={index}>
                                            <Card product={item}/>
                                        </View>
                                    )}/>
                                    <Icon name="circle-arrow-right" size={30} color="black" paddingLeft="3%" />
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