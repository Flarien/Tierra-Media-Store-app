import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/shop/cartSlice"; 
import { colors } from "../global/colors";
import { Entypo } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import Card from "./Card";

const CartItem = ({ item }) => {
   const dispatch = useDispatch();

   const handleRemoveItem = () => {
     dispatch(removeItem({ id: item.id }));

     Toast.show({
       type: "info",
       text1: "¡Producto eliminado!",
       visibilityTime: 1000,
     });
   };

  return (
    <Card>
      <View style={styles.cartContainer}>
        <Image style={styles.image} source={{ uri: item.images }} />
        <Text style={styles.descriptionTitle}>Nombre: {item.title} </Text>
        <Text style={styles.price}>Precio: {item.price} </Text>
        <Text style={styles.price}>Cantidad: {item.quantity} </Text>
        <Pressable
          onPress={() => {
            handleRemoveItem();
          }}
        >
          <Entypo name="trash" size={24} color={colors.error} />
        </Pressable>
      </View>
    </Card>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.back_green,
    shadowColor: "black",
    shadowOffset: {
      height: 3,
      width: 2,
    },
    elevation: 8,
    shadowOpacity: 1,
    shadowRadius: 1,
    margin: 8,
  },

  image: {
    minHeight: 90,
    minWidth: 90,
    width: "35%",
    margin: 5,
  },
  descriptionTitle: {
    fontFamily: "Cinzel",
    fontSize: 18,
    color: "white",
    paddingVertical: 2,
  },

  price: {
    fontFamily: "Cinzel",
    fontSize: 20,
    color: "black",
    paddingVertical: 4,
  },
});
