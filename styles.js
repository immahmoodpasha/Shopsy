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
        width: width*0.35,
        height: 'auto',
        padding: '1%',
    },
    ImageContainer: {
        position: 'relative',
        aspectRatio: 1,
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
        boxShadow: '1px 1px 3px rgba(123, 121, 124, 0.27)',
        borderRadius: 10
    },
    AddButton: {
        position: 'absolute',
        bottom: '5%',
        right: '5%',
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 17,
        borderRadius: 15,
        borderColor: '#8404aeff',
        borderWidth: 2,
        boxShadow: '1px 1px 1px rgb(123, 121, 124)'
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