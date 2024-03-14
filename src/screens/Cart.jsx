import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";
import { StyleSheet, FlatList, View, Text, Pressable } from "react-native";
import CartItem from "../components/CartItem";

const Cart = () => {

  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const [triggerPost, result] = usePostOrderMutation()
  console.log(result);
  
  const confirmCart = ()=> {
    triggerPost({total, cartItems, user: "loggedUser"})
  }

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
