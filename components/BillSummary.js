import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const BillSummary = ({ itemTotal = 0, deliveryFee }) => {
  const toPay = itemTotal;

  return (
    <View style={styles.billCont}>
      <View style={{ margin: 5 }}>
        <Text>Bill Summary</Text>
      </View>
      <View style={styles.rowGroup}>
        <View style={styles.row}>
          <Text>Item Total</Text>
          <Text> {'\u20B9'}{itemTotal.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text>Delivery Fee</Text>
          <Text style={{color: 'green'}}> {deliveryFee}</Text>
        </View>
      </View>
      <View style={styles.rowBottom}>
        <Text>To Pay</Text>
        <Text> {'\u20B9'}{toPay.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default BillSummary;

const styles = StyleSheet.create({
  billCont: {
    height: '15%',
    backgroundColor: '#CFCFCF',
    margin: 10,
  },
  rowGroup: {
    margin: 10,
    marginTop: 2,
    gap: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowBottom: {
    margin: 7.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
