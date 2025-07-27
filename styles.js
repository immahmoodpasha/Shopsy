import { StyleSheet, Dimensions } from "react-native"

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    ProductCard: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: width*0.30,
        height: 'auto',
        padding: '1%',
        marginBottom:5,
    },
    ImageContainer: {
        position: 'relative',
        aspectRatio: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        borderRadius: 8
    },
    AddButton: {
        position: 'absolute',
        bottom: '5%',
        right: '5%',
        backgroundColor: 'white',
        paddingVertical: '7%',
        paddingHorizontal: '18%',
        borderRadius: 15,
        borderColor: '#8404aeff',
        borderWidth: 2,
        boxShadow: '1px 1px 1px rgb(123, 121, 124)',
    },
    ProductDetails: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'auto',
        paddingHorizontal: '10%'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },


})