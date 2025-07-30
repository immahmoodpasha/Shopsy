import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

const OrderPlaced = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.animCont}>
        <LottieView 
            source={require('../assets/animations/anim2.json')}
            autoPlay
            loop={false}
            style={{width: '50%', height: '50%'}}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Order Placed Successfully!!</Text>
      </View>
      <View style={styles.backToMainCont}>
        <TouchableOpacity style={styles.exploreBtn} onPress={() => navigation.navigate('MainApp')}>
            <Text style={{textAlign: 'center', fontSize: 17.5, fontWeight: 'bold', color: 'white'}}>Explore More Items</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderPlaced

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    animCont: {
        width: '90%',
        height: '70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backToMainCont: {
        width: '90%',
        marginBottom: '15%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    exploreBtn: {
        width: '65%',
        backgroundColor: '#8404ae',
        height: '50%',
        justifyContent: 'center',
        borderRadius: 7.5
    }
})