import { Image, StyleSheet, Text } from "react-native";
import Card from "./Card";

const ProductItem = ({ product }) => {
  return (
    <Card>
      <Text style={styles.list}>{product.title}</Text>
      <Image style={styles.image} source={{ uri: product.images }} />
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  list: {
    margin: 10,
    padding: 5,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Cinzel",
  },

  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
