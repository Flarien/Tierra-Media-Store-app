import { StyleSheet, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card';

const OrderItems = ({ item }) => {
  
  const { width } = useWindowDimensions();

    const total = item.items.reduce(
      (acc, currentItem) => (acc + currentItem.quantity * currentItem.price),
      0
    );
  return (
    <Card>
      <Text style={width < 400 ? styles.textMin : styles.text}>
        {new Date(item.createdAt).toLocaleString()}
      </Text>
      <Text style={width < 400 ? styles.textMin : styles.text}>
        Total: {total}{" "}
      </Text>
    </Card>
  );
};

export default OrderItems

const styles = StyleSheet.create({
  text: {
    margin: 10,
    padding: 5,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Cinzel",
    color: "white",
  },

  textMin: {
    margin: 10,
    padding: 5,
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Cinzel",
  },
});
