import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import VegIcon from 'react-native-vector-icons/FontAwesome5';
import DairyIcon from 'react-native-vector-icons/Entypo';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      <View style={{flex: 1,flexDirection:'row' ,justifyContent: 'space-between', flexWrap: 'wrap', padding: 20}}>
        <View>
        <VegIcon name="clipboard-list" size={30} color="#8404aeff" style={{alignSelf: 'center'}} />
        <Text style={{textAlign: 'center', fontSize: 10, marginTop: 10}}>All Items</Text>
        </View>
        <View>
            <DairyIcon name="leaf" size={30} color="#8404aeff" style={{alignSelf: 'center'}} />
        <Text style={{textAlign: 'center', fontSize: 10, marginTop: 10}}>All Items</Text>
        </View>
        <View>
        <VegIcon name="clipboard-list" size={30} color="#8404aeff" style={{alignSelf: 'center'}} />
        <Text style={{textAlign: 'center', fontSize: 10, marginTop: 10}}>All Items</Text>
        </View>
        <View>
        <VegIcon name="clipboard-list" size={30} color="#8404aeff" style={{alignSelf: 'center'}} />
        <Text style={{textAlign: 'center', fontSize: 10, marginTop: 10}}>All Items</Text>
        </View>
        <View>
        <VegIcon name="clipboard-list" size={30} color="#8404aeff" style={{alignSelf: 'center'}} />
        <Text style={{textAlign: 'center', fontSize: 10, marginTop: 10}}>All Items</Text>
        </View>
        <View>
        <VegIcon name="clipboard-list" size={30} color="#8404aeff" style={{alignSelf: 'center'}} />
        <Text style={{textAlign: 'center', fontSize: 10, marginTop: 10}}>All Items</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#8404aeff',
        textAlign: 'center',
        marginVertical: 20,
    },

});

export default Categories