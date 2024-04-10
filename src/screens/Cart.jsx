import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { clearCart as clearCartAction } from "../features/shop/cartSlice";
import { Alert } from "react-native";
import Toast from "react-native-toast-message";
import CartItem from "../components/CartItem";
import AddButton from "../components/AddButton";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const userEmail = useSelector((state) => state.authReducer.value.user);
  const dispatch = useDispatch();
  const [triggerPost, result] = usePostOrderMutation();
  console.log(result);
  const [isOrdering, setIsOrdering] = useState(false);

  const confirmCart = async () => {
    try {
      setIsOrdering(true);
      const currentDate = new Date().toISOString();
      const order = {
        total,
        cartItems,
        user: userEmail,
        createdAt: currentDate,
      };
      const response = await triggerPost(order);
      setIsOrdering(false);
      if (response?.data) {
        showToast("success", "Orden enviada correctamente");
        Alert.alert("Orden enviada", "¿Desea vaciar el carrito?", [
          { text: "Sí", onPress: clearCart },
          { text: "No", style: "cancel" },
        ]);
      } else {
        showToast("error", "Error al enviar la orden");
      }
    } catch (error) {
      setIsOrdering(false);
      showToast("error", "Error al enviar la orden");
      console.log(error.message)
    }
  };

  const clearCart = () => {
    dispatch(clearCartAction());
  };

  const showToast = (type, message) => {
    Toast.show({
      type: type,
      text1: message,
      visibilityTime: 3000,
      autoHide: true,
      bottomOffset: 40,
    });
  };

  return (
    <View>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(cartItem) => cartItem.id}
            clearCart={clearCart}
          />
          <Text style={styles.total}>Total: ${total}</Text>
          <AddButton
            onPress={confirmCart}
            disabled={isOrdering}
            title="Confirmar"
          />
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
