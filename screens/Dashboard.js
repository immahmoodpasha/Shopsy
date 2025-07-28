import ProductCard from "../components/ProductCard";
import { Text, View, ScrollView } from "react-native";
import { styles } from "../styles";
import Header from "../components/Header";
import AdsCarousel from "../components/AdsCarousel";
import { FlatList } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome6';

const categoriesArray = ['Vegetables', 'Fruits', 'Electronics']
const vegetablesList = ['Cabbage', 'Beetroot', 'Tomato']
const Dashboard = () => {
    
    return(
        <View style={styles.Dashboard}>
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{color: '#8404ae', fontSize: 20, fontWeight: '700', padding: '3%', paddingHorizontal: '2%'}}>Welcome User</Text>
                <AdsCarousel />
                <View style={styles.CategorySection}>
                    {categoriesArray.map((category, index)=>(
                        <View key={index}>
                            <View style={styles.CategoryTitle}>
                                <Text style={{color: 'white', fontWeight: '800', fontSize: 20}}>{category}</Text>
                            </View>
                            <View style={styles.CategoryList}>
                                <FlatList horizontal data={vegetablesList} renderItem={(item, index)=>(
                                    <View key={index}>
                                        <ProductCard name={item}/>
                                    </View>
                                )}/>
                                <Icon name="circle-arrow-right" size={30} color="black" paddingLeft="3%" />
                            </View>
                            
                        </View>
                    ))}
                </View>
            </ScrollView>
            
            
            
        </View>
    );
}

export default Dashboard;