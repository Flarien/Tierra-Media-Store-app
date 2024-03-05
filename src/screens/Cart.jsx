//import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";
import { StyleSheet, FlatList, View, Text, Pressable } from "react-native";
import CartItem from "../components/CartItem";
//import allCartItems from "../data/cart.json";

const Cart = () => {
  // const [cartItems, setCartItems] = useState([]);
  // const [total, setTotal] = useState(0);

  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const [triggerPost, result] = usePostOrderMutation()

  const confirmCart = ()=> {
    triggerPost({total, cartItems, user: "loggedUser"})
  }

  // useEffect(() => {
  //   const total = allCartItems.reduce(
  //     (acc, currentItem) => acc + currentItem.quantity * currentItem.price,
  //     0
  //   ); //acc=acumulado
  //   setTotal(total);
  //   setCartItems(allCartItems);
  // }, []);

  return (
    <View>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(cartItem) => cartItem.id}
          />
          <Text style={styles.total}>Total: ${total}</Text>
          <Pressable onPress={confirmCart}>
            <Text>Confirmar</Text>
          </Pressable>
        </>
      ) : (
        <Text>No hay productos agregados</Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  total: {
    fontFamily: "Cinzel",
    fontSize: 25,
    color: "black",
    textAlign: "center",
    paddingVertical: 6,
  },
});
