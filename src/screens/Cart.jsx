import { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import CartItem from "../components/CartItem";
import allCartItems from "../data/cart.json";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = allCartItems.reduce(
      (acc, currentItem) => (acc += currentItem.quantity * currentItem.price), 0
    ); //acc=acumulado
    setTotal(total)
    setCartItems(allCartItems);
  }, []);

  return (
    <View>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtracttor={(cartItem) => cartItem.id}
      />
      <Text>Total: {total} </Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
