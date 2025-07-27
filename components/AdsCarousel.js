import { Text, View, Dimensions, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { styles } from "../styles";

const {width} = Dimensions.get('window');

const carousel_width = width * 0.9;
const carousel_height = carousel_width * 0.54;

const ad1 = require('../assets/ad1.png');
const ad2 = require('../assets/ad2.png');
const ad3 = require('../assets/ad3.png');
const ad4 = require('../assets/ad4.png');
const ad5 = require('../assets/ad5.png');
const AdsCarousel = () => {


    return(
        <View style={styles.AdsCarousel}>
            <Carousel 
                loop
                autoPlay={true}
                autoPlayInterval={2500}
                data={[ad1,ad2,ad3,ad4,ad5]}
                renderItem={({item, index})=>(
                    <View style={styles.carouselItemContainer}>
                        <Image source={item} style={styles.carouselImage}></Image>
                    </View>
                )}
                width={carousel_width}
                height={carousel_height}
                style={{borderRadius: 20}}
            />
        </View>
    );
}

export default AdsCarousel;
