import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Card from "./Card";

const CartItem = ({ item }) => {
  return (
    <Card>
      <View style={styles.cartContainer}>
        <Image style={styles.image} source={{ uri: item.images }} />
        <Text style={styles.descriptionTitle}>{item.title} </Text>
        <Text style={styles.price}>{item.price} </Text>
      </View>
    </Card>
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
