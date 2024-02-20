import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const CartItem = ({ item }) => {
  return (
    <View>
      <View style={styles.cartContainer}>
        <Image style={styles.image} source={{ uri: item.images }} />
        <Text>{item.title} </Text>
        <Text>{item.price} </Text>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.back_green,
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
  text: {
    margin: 10,
    width: "55%",
    padding: 5,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Cinzel",
    color: "white",
  },

  textMin: {
    margin: 10,
    width: "55%",
    padding: 5,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Cinzel",
  },
});
